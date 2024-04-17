import 'dotenv/config';
import { App } from '@tinyhttp/app';
import {
    logger
} from '@tinyhttp/logger';
import {
    Liquid
} from 'liquidjs';
import sirv from 'sirv';

const engine = new Liquid({
    extname: '.liquid'
});

const app = new App();
app
    .use(logger())
    .use('/', sirv('dist/assets'))
    .listen(process.env.PORT);
console.log(`Server running on port ${process.env.PORT}`);
    
app.get('/', async (req, res) => {
    try {
        // Haal toegangstoken op van Twitch API
        const accessToken = await getTwitchAccessToken();

        // Haal gegevens op van hoog gewaardeerde spellen
        const highRatedGames = await getHighRatedGames(accessToken);
        console.log("The three most highest rated games:",highRatedGames);
        console.log("The three most highest rated games:",highRatedGames[0].cover);

        // Haal de covers van de spellen op
        const gameCover = await Promise.all(highRatedGames.map(game => getCoverGame(game.cover, accessToken)));

        console.log("The covers of the three most highest rated games:", gameCover);

        // Render de template met de gamegegevens
        const renderedTemplate = renderTemplate('views/index.liquid', {
            games: highRatedGames,
            covers: gameCover
        });

        // Stuur de gerenderde template als reactie
        res.send(renderedTemplate);
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).send('Internal Server Error');
    }
});

app.get('/game/:id/', async (req, res) => {});

const renderTemplate = (template, data) => {
    const templateData = {
        NODE_ENV: process.env.NODE_ENV || 'production',
        ...data
    };

    return engine.renderFileSync(template, templateData);
};



// FUNCTIES //
// Functie om toegangstoken van Twitch API op te halen
async function getTwitchAccessToken() {
    const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`, {
        method: 'POST'
    });

    if (!response.ok) {
        throw new Error('Unable to fetch access token');
    }

    const data = await response.json();
    return data.access_token;
}

// Functie om gegevens van hoog gewaardeerde spellen op te halen
async function getHighRatedGames(accessToken) {
    const response = await fetch(`https://api.igdb.com/v4/games`, {
        method: 'POST',
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${accessToken}`,
        },
        body: 'fields cover, name, summary, genres, platforms, rating, rating_count; limit 3; where rating > 90; sort rating desc;'
    });

    if (!response.ok) {
        throw new Error('Unable to fetch high rated games data');
    }

    const data = await response.json();
    return data;
}

// ENDPOINTS //

// endpoint cover
async function getCoverGame(coverId, accessToken) {
    const response = await fetch(`https://api.igdb.com/v4/covers`, {
        method: 'POST',
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${accessToken}`,
        },
        body: 'fields *; where id =' + coverId + ';'
    });

    if (!response.ok) {
        throw new Error(`Unable to fetch detailed game data for game with ID ${gameId}`);
    }

    const data = await response.json();
    return data;
}