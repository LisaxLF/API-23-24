import 'dotenv/config';
import { App } from '@tinyhttp/app';
import { logger } from '@tinyhttp/logger';
import { Liquid } from 'liquidjs';
import sirv from 'sirv';

const engine = new Liquid({
	extname: '.liquid',
});

const app = new App();
app.use(logger()).use('/', sirv('dist/assets')).listen(process.env.PORT);
console.log(`Server running on port ${process.env.PORT}`);

app.get('/', async (req, res) => {
	try {
		// Haal toegangstoken op van Twitch API
		const accessToken = await getTwitchAccessToken();

		// HIGHLIGHTED SPELLEN //
		// Haal gegevens op van hoog gewaardeerde spellen
		const highlightedGames = await gethighlightedGames(accessToken);

		// Haal de covers van de spellen op
		const gameCover = await Promise.all(
			highlightedGames.map((game) => getCoverGame(game.cover, accessToken)),
		);

		// MEEST GEWAARDEERDE SPELLEN //
		// Haal gegevens op van de meeste gewaardeerde spellen
		const highestRatedGames = await getHighestRatedGames(accessToken);

		// De rating van de spellen beperken tot hele getallen
		highestRatedGames.forEach((game) => {
			game.rating = Math.round(game.rating);
		});

		// Haal de covers van deze spellen op
		const highestRatedGameCover = await Promise.all(
			highestRatedGames.map((game) => getCoverGame(game.cover, accessToken)),
		);


		// Render de template met de gamegegevens
		const renderedTemplate = renderTemplate('views/index.liquid', {
			games: highlightedGames,
			covers: gameCover,
			gamesHighestRated: highestRatedGames,
			coversHighestRated: highestRatedGameCover,
		});

		// Stuur de gerenderde template als reactie
		res.send(renderedTemplate);
	} catch (error) {
		console.error('Error:', error.message);
		return res.status(500).send('Internal Server Error');
	}
});

app.get('/game/:id/', async (req, res) => {
	try {
		// Haal het spel-ID op uit de URL
		const gameId = req.params.id;

		// Haal de toegangstoken op van de Twitch API
		const accessToken = await getTwitchAccessToken();

		// Haal de spelgegevens op van de IGDB API
		const gameResponse = await fetch(`https://api.igdb.com/v4/games`, {
			method: 'POST',
			headers: {
				'Client-ID': process.env.TWITCH_CLIENT_ID,
				Authorization: `Bearer ${accessToken}`,
			},
			body: `fields *; where id = ${gameId};`,
		});

		// Controleer of het antwoord van de API succesvol is
		if (!gameResponse.ok) {
			throw new Error('Game not found');
		}

		// Haal de spelgegevens op uit het JSON-antwoord
		const gameIdData = await gameResponse.json();

		// Haal de gegevens van het eerste spel op uit de JSON-array
		const gameData = gameIdData[0];

		// Controleer of er spelgegevens zijn gevonden
		if (!gameData) {
			throw new Error('Game not found');
		}

		// Haal het ID van de cover op uit de spelgegevens
		const gameCoverId = gameData.cover;

		// Haal de covergegevens op van de IGDB API
		let gameCoverData = await getCoverGame(gameCoverId, accessToken);
		gameCoverData = gameCoverData[0];

		// Haal de release date op van het spel
		const gameReleaseDate = gameData.first_release_date;

		// Bepaal de prijs van het spel
		const gamePrice = determinePrice(gameReleaseDate);

		// Render de template met de spelgegevens
		const renderedTemplate = renderTemplate('views/detail.liquid', {
			game: gameData,
			cover: gameCoverData,
			price: gamePrice,
		});

		// Stuur de gerenderde template als reactie
		res.send(renderedTemplate);
	} catch (error) {
		// Stuur een foutmelding als er een probleem is opgetreden
		res.status(404).send(error.message);
	}
});

const renderTemplate = (template, data) => {
	const templateData = {
		NODE_ENV: process.env.NODE_ENV || 'production',
		...data,
	};

	return engine.renderFileSync(template, templateData);
};

// FUNCTIES //
// Functie om toegangstoken van Twitch API op te halen
async function getTwitchAccessToken() {
	const response = await fetch(
		`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
		{
			method: 'POST',
		},
	);

	if (!response.ok) {
		throw new Error('Unable to fetch access token');
	}

	const data = await response.json();
	return data.access_token;
}

// Functie om gegevens van hoog gewaardeerde spellen op te halen
async function gethighlightedGames(accessToken) {
	const response = await fetch(`https://api.igdb.com/v4/games`, {
		method: 'POST',
		headers: {
			'Client-ID': process.env.TWITCH_CLIENT_ID,
			Authorization: `Bearer ${accessToken}`,
		},
		body: 'fields *; limit 3; where release_dates.date >= 1640995200 & release_dates.date < 1672531200; sort rating desc;',
	});

	if (!response.ok) {
		throw new Error('Unable to fetch high rated games data');
	}

	const data = await response.json();
	return data;
}

async function getHighestRatedGames(accessToken) {
	const response = await fetch(`https://api.igdb.com/v4/games`, {
		method: 'POST',
		headers: {
			'Client-ID': process.env.TWITCH_CLIENT_ID,
			Authorization: `Bearer ${accessToken}`,
		},
		body: 'fields name, cover, rating, involved_companies; limit 9; where rating >= 90 & cover != null & involved_companies != null; sort rating desc;',
	});

	if (!response.ok) {
		throw new Error('Unable to fetch high rated games data');
	}

	let data = await response.json();

	// geeft alleen de eerste id van de involved_companies
	data.forEach((game) => {
		game.involved_companies = game.involved_companies[0];
	});

	// flatten de array van involved_companies
	data.flatMap((game) => game.involved_companies).flat();

	return data;
}

// ENDPOINTS //

// endpoint cover
async function getCoverGame(coverId, accessToken) {
	const response = await fetch(`https://api.igdb.com/v4/covers`, {
		method: 'POST',
		headers: {
			'Client-ID': process.env.TWITCH_CLIENT_ID,
			Authorization: `Bearer ${accessToken}`,
		},
		body: 'fields *; where id =' + coverId + ';',
	});

	if (!response.ok) {
		throw new Error(
			`Unable to fetch detailed game cover for game with ID ${coverId}`,
		);
	}

	const data = await response.json();
	return data;
}

// Extra functie om een prijs te bepalen
function determinePrice(releaseDate) {
	// Hoe ouder de release date, hoe goedkoper het spel
	const date = new Date(releaseDate * 1000);
	const currentDate = new Date();
	const differenceInYears = currentDate.getFullYear() - date.getFullYear();
	return 60 - differenceInYears * 5;
}
