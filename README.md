# API-23-24
Het web is een geweldige plek en de beschikbare technologieën ervan zijn vandaag de dag krachtiger dan ooit tevoren. De kracht van het web ligt in het feit dat het een platform is dat voor iedereen beschikbaar is en dat het gebaseerd is op open standaarden. De technologieën worden ontworpen en gespecificeerd op basis van consensus en zijn niet in handen van één enkele entiteit.

Desondanks zijn er veel mensen en bedrijven die vinden dat het internet niet voldoet aan hun behoeften. Dit blijkt uit de pogingen van grote techbedrijven om hun eigen afgesloten ecosystemen te creëren. Ze streven hiermee naar controle over zowel de gebruikerservaring als de gegenereerde data.

In dit vier weken durende vak zullen we de kracht van het web ervaren en kijken hoe we (mobiele) web apps kunnen maken die net zo aantrekkelijk zijn als native mobiele apps. We beginnen met het maken van een server-side gerenderde applicatie waarbij we geleidelijk de gebruikerservaring verbeteren met relevante beschikbare web API's.

## Gamenation
![gamenation-banner](https://github.com/LisaxLF/API-23-24/assets/112825800/24377883-af97-4cd7-88cc-7a53b8fcb48f)

Gamenation is een online platform dat gamers verbindt met een uitgebreide verzameling van spellen. Met een interface die lijkt op die van Steam, stelt Gamenation gebruikers in staat om door een gevarieerde catalogus van spellen te bladeren, nieuwe releases te ontdekken, spellen te kopen en te spelen, en in contact te komen met andere gamers. De spellengegevens worden aangedreven door de Internet Game Database (IGDB), waardoor gebruikers toegang hebben tot uitgebreide informatie over elk spel, waaronder beschrijvingen, recensies, trailers en meer.

### Job stories
Job Stories zijn een krachtig hulpmiddel in de wereld van productontwikkeling, omdat ze zich richten op de behoeften en doelen van gebruikers in specifieke situaties. In tegenstelling tot traditionele gebruikersverhalen, die zich vaak richten op functionaliteit en systeemgedrag, benadrukken job stories de motivaties en context van de gebruiker.

Een job story bestaat uit drie elementen: de gebruiker, de situatie en het gewenste resultaat. Door deze elementen te identificeren, kunnen we een dieper inzicht krijgen in wat gebruikers nodig hebben en waarom ze het nodig hebben.

In dit document presenteren we een reeks job stories voor Gamenation, een online gamingplatform. Elke job story richt zich op een specifiek scenario waarin een gebruiker een bepaalde taak wil volbrengen of een doel wil bereiken. Door deze job stories te begrijpen, kunnen we de functionaliteit van Gamenation optimaliseren om aan de behoeften van onze gebruikers te voldoen.

1. Als een gamer wil ik de details van een specifiek spel kunnen bekijken, zodat ik meer te weten kan komen over het spel voordat ik beslis om het te kopen of te spelen.
2. Als een gamer wil ik op de detailpagina van een spel kunnen zien welke platforms worden ondersteund, zodat ik kan controleren of het spel beschikbaar is voor het platform dat ik bezit.
3. Als een gamer wil ik op de detailpagina van een spel de trailer kunnen bekijken, zodat ik een voorproefje kan krijgen van de gameplay en de grafische kwaliteit.
4. Als een gamer wil ik op de detailpagina van een spel recensies van andere gebruikers kunnen lezen, zodat ik de meningen van anderen kan zien voordat ik beslis om het spel te spelen.
5. Als een gamer wil ik op de detailpagina van een spel gerelateerde spellen kunnen zien, zodat ik meer spellen kan ontdekken die vergelijkbaar zijn met het spel dat ik bekijk.

### Flowchart
Deze flowchart illustreert de navigatiestructuur van Gamenation, een online gamingplatform, en visualiseert hoe gebruikers door de verschillende pagina's kunnen navigeren om spellen te ontdekken, informatie te bekijken en aankopen te doen. Hoewel niet alle functionaliteiten volledig zijn uitgewerkt, biedt de flowchart een overzicht van de hoofdfunctionaliteiten van Gamenation, zoals het bekijken van alle games, het verkennen van verschillende platformen en genres, het beheren van het winkelwagentje, en het bekijken van zowel populaire als highlighted games.

Elk knooppunt in de flowchart vertegenwoordigt een specifieke pagina of functionaliteit binnen Gamenation, terwijl de pijlen de mogelijke paden aangeven die gebruikers kunnen volgen om van de ene pagina naar de andere te gaan. Hoewel de flowchart niet alle aspecten van Gamenation omvat, helpt het bij het visualiseren van de gebruikerservaring en het identificeren van de belangrijkste interactiemogelijkheden op het platform.

Door deze flowchart te raadplegen, kunnen ontwikkelaars en ontwerpers een beter begrip krijgen van de structuur en het gebruik van Gamenation, en kunnen ze eventuele knelpunten in de navigatie identificeren om de gebruikerservaring te verbeteren.

![image](https://github.com/LisaxLF/API-23-24/assets/112825800/f626eed6-f0d5-4179-ba59-b3b3ebe243a6)

## The Journey
Nadat ik mijn concept concreet had uitgewerkt, begon ik met de ontwikkeling van de server en de API. De API, afkomstig van IGDB, bood verschillende endpoints en datasets die essentieel waren voor het functioneren van mijn platform. Tegelijkertijd begon ik met het opzetten van de server om deze gegevens te verwerken en aan te bieden aan mijn webapplicatie.

### Web design
Voor het webdesign van Gamenation heb ik een goed uitgewerkt concept gemaakt in Figma. Dit omvatte gedetailleerde ontwerpen voor de sectie met highlighted games, evenals voor de hoofdpagina en detailpagina van het platform. Met Figma kon ik de lay-out, kleurenpaletten, typografie en interactieve elementen zoals knoppen en navigatiebalken nauwkeurig uitwerken voordat ik begon met de daadwerkelijke implementatie van de website. Dit zorgde voor een gestroomlijnde en consistente gebruikerservaring op alle pagina's van Gamenation.

![homepage](https://github.com/LisaxLF/API-23-24/assets/112825800/fa64efb2-2ce2-499e-acb6-c6cc7d85bb41)
![higlightedGame _ Hover](https://github.com/LisaxLF/API-23-24/assets/112825800/e435d64c-bf4b-44f2-bf71-cd06318aaffa)
![detailpage](https://github.com/LisaxLF/API-23-24/assets/112825800/2f4c50dc-4b59-4075-8611-980a387cfe80)

### Server
Voor de server heb ik besloten om niet de traditionele combinatie van Express en EJS te gebruiken, maar in plaats daarvan te experimenteren met Tiny HTTP en Liquid. Hoewel dit een leercurve met zich meebracht om deze nieuwe technologieën te begrijpen en toe te passen, vond ik het belangrijk om mijn kennis te verbreden en nieuwe tools te verkennen die mogelijk beter pasten bij de behoeften van mijn project.

### UI/UX en Technische Breakdown
Bij het ontwerpen van Gamenation, heb ik een technische breakdown uitgevoerd om ervoor te zorgen dat alle HTML goed werd geïmplementeerd en dat de gebruikerservaring soepel verliep. Hier is hoe ik te werk ben gegaan:

- **Wireframing en Prototyping:** Ik begon met het maken van wireframes en prototypes om de structuur en lay-out van de verschillende pagina's te visualiseren. Dit hielp bij het bepalen van de optimale plaatsing van elementen zoals navigatiebalken, zijbalken, en content secties.
  
- **HTML-structuur:** Na het vaststellen van de algemene lay-out, begon ik met het opzetten van de HTML-structuur voor elke pagina. Ik zorgde ervoor dat de HTML semantisch correct was en dat alle elementen op een logische en georganiseerde manier waren geplaatst.
Componenten en Herbruikbaarheid: Ik identificeerde herbruikbare componenten binnen de UI, zoals kaarten voor individuele spellen, navigatiebalken, en knoppen. Deze componenten werden vervolgens apart geïmplementeerd en kunnen gemakkelijk worden hergebruikt op verschillende pagina's.
Door deze technische breakdown toe te passen, kon ik de HTML van Gamenation nauwkeurig en efficiënt implementeren,

![image](https://github.com/LisaxLF/API-23-24/assets/112825800/6f3b4772-c606-4d86-974b-be15f10edf91)
![IMG_8635](https://github.com/LisaxLF/API-23-24/assets/112825800/08d29f2e-00c0-4926-b420-7a42b5e2343a)
![IMG_8636](https://github.com/LisaxLF/API-23-24/assets/112825800/61fd659d-a581-4983-bc90-ad956ea2db04)
![IMG_8637](https://github.com/LisaxLF/API-23-24/assets/112825800/438ad7b0-9939-4a00-b971-8d16ce8305f5)
![IMG_8638](https://github.com/LisaxLF/API-23-24/assets/112825800/c565807b-b8d7-481a-a575-8cd14ac5993e)

## Features
- Highlighted games
- Platforms
- Populaire games

### Highlighted Games
![banner-gamenation-HG](https://github.com/LisaxLF/API-23-24/assets/112825800/993c7f47-abed-4ba3-aed0-c099c77b0aed)

Voor de feature "Highlighted games" worden er 3 spellen uitgelicht op basis van hun releasedatum. Hier is een voorbeeld van een functie die gebruikmaakt van de IGDB API om deze spellen op te halen:

``` Javascript
async function getHighlightedGames(accessToken) {
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
```

### Platforms
![banner-gamenation-Platforms](https://github.com/LisaxLF/API-23-24/assets/112825800/68cb0a07-5ef9-4a3c-9e6c-ca8b73848b5b)

Voor de functie "Platforms" was het oorspronkelijke plan om een overzicht te bieden gebaseerd op filters, zodat gebruikers alleen games konden zien die beschikbaar zijn op een specifiek spelplatform. Hoewel deze functionaliteit nog niet is uitgewerkt, kan het worden geïmplementeerd door gebruik te maken van de IGDB API om games op te halen die zijn geassocieerd met een bepaald platform.

### Popular games
![banner-gamenation-Popular](https://github.com/LisaxLF/API-23-24/assets/112825800/2b23301f-1db4-4889-b550-43617c8872e5)

De functie getHighestRatedGames is bedoeld om de hoogst gewaardeerde games op te halen vanuit de IGDB API. Deze games worden geselecteerd op basis van hun beoordeling (rating), waarbij alleen games met een rating van 90 of hoger worden opgenomen. De functie retourneert een lijst van maximaal 9 games, inclusief de naam, coverafbeelding, beoordeling en informatie over betrokken bedrijven.

``` Javascript
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
```

## Technologies

Gamenation maakt gebruik van de volgende technologieën:

- JavaScript (Node.js)
- IGDB API
- Figma (voor ontwerp)
- Postman (voor testen van API-calls)

## Installation

Om Gamenation lokaal te installeren, volg je deze stappen:

1. Kloon de repository naar je lokale machine:

    ```
    git clone <repository_url>
    ```

2. Navigeer naar de hoofdmap van het project:

    ```
    cd gamenation
    ```

3. Installeer de benodigde afhankelijkheden met behulp van npm:

    ```
    npm install
    ```

4. Maak een `.env` bestand aan in de hoofdmap van het project en voeg de benodigde omgevingsvariabelen toe, zoals `TWITCH_CLIENT_ID` en `ACCESS_TOKEN`.

## Usage

Om Gamenation te gebruiken, volg je deze stappen:

1. Zorg ervoor dat de vereiste omgevingsvariabelen zijn geconfigureerd in het `.env` bestand.

2. Voer het project uit met behulp van npm:

    ```
    npm start dev
    ```

3. Open je webbrowser en navigeer naar `http://localhost:4000` om Gamenation te bekijken.

## Testing and Iteration

Om de functionaliteiten van Gamenation te testen en iteraties uit te voeren, kun je gebruikmaken van tools zoals Postman. Met Postman kun je gemakkelijk API-verzoeken uitvoeren en de ontvangen data controleren om ervoor te zorgen dat alles correct werkt zoals verwacht.

## License

Gamenation is gelicentieerd onder de MIT-licentie. Zie het `LICENSE` bestand voor meer informatie.


