# Milledoni

## Inleiding
De opdrachtgevers zijn Frederica en Tom. Zij zijn de eigenaren van de website Milledoni.
Op deze website kunnen gebruikers met behulp van filters het perfecte cadeau vinden.

De huidige versie van de website is verouderd. Daarom hebben zij een designers ingeschakeld om een nieuw ontwerp te laten maken.

Wij hebben deze designs ontvangen en hebben ze omgezet naar een werkende website.
De vernieuwde versie ziet er nu als volgt uit:
![image](https://github.com/user-attachments/assets/7dfdd7b1-30a0-469a-9672-8aeb8a336d17)



## Inhoudsopgave

  * [Beschrijving & Gebruik](#Beschrijving-&-Gebruik)
  * [Kenmerken](#kenmerken)
     * [Code conventies](#Code-conventies)
     * [HTML & Liquid](#HTML-&-Liquid)
        * [Liquid Partials](#Liquid-Partials)
        * [Data vanuit Server](#Data-vanuit-Server)
     * [CSS](#CSS)
        * [Styleguide](#Styleguide)
        * [nesting](#nesting)
        * [carrousel](#carrousel)
     * [server.js](#server.js)
        * [Functies](#Functies)
           * [getBookmarks functie](#getBookmarks-functie)
           * [changeBookmark functie](#changeBookmark-functie)
        * [Index route](#Index-route)
           * [Index GET route](#Index-GET-route)
           * [Index POST route](#Index-POST-route)
        * [favorieten GET route](#favorieten-GET-route)
     * [JavaScript](#JavaScript)
        * [bookmark hover?](#bookmark-hover?)
        * [Sticky header](#)
     * [UI states](#UI-states)
        * [UI states: buttons](#UI-states:-buttons)
        * [UI states: loader](#UI-states:-loader)
        * [UI states: error](#UI-states:-error)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving & Gebruik
per pagina wat gemaakt is
en wat je op elk pagina kan doen
Index pagina
details pagina
favorieten pagina
ontwerp keuzes (voor alles)


## Kenmerken
## Code conventies
- Custom properties en classnames
     - Voor de naamgeving van custom properties en classnames hebben wij een eigen structuur. Het eerste woord (en soms ook het tweede) geeft aan waarvoor de property bedoeld is, en het laatste woord geeft aan wat er wordt aangepast. Bijvoorbeeld: bg-primary. Hier geeft bg aan dat het om de achtergrond gaat, en primary dat het de primaire kleur betreft.
Zie dit voorbeeld in de code:
https://github.com/vsheo/pleasurable-ui/blob/81b449b11213ad8e77e94495eae7a38efc6142cc/public/styleguide.css#L35-L36
- We werken altijd in feature branches.
     - Voor elk issue maken we een nieuwe branch aan.
     - Voor we mergen naar de main branch, vragen we eerst om een code review. Alleen wanneer er twee goedgekeurde reviews zijn, mogen we mergen naar main.
- Pull request
     - Bij het aanmaken van een pull request vullen we altijd [deze template](https://github.com/vsheo/pleasurable-ui/wiki/pull-request-template) in. Zo zorgen we ervoor dat de rest van het team alle informatie bij elkaar heeft om met de review te starten.
- Tap index houden we op 4 spaties
- CSS
     - Margins en paddings zetten we op één regel, waar mogelijk. Voorbeeld uit de code
       https://github.com/vsheo/pleasurable-ui/blob/81b449b11213ad8e77e94495eae7a38efc6142cc/public/sprint-11.css#L381



## HTML & Liquid
### Liquid Partials
### Data vanuit Server


## CSS
### Styleguide
### nesting
### carrousel


## server.js
### Functies
In het server.js bestand staan twee functies:
- getBookmarks: haalt alle cadeau's op uit een lijst.
- changeBookmark: voegt een cadeau toe aan een lijst of verwijdert een cadeau uit een lijst.

We hebben ervoor gekozen om deze functies te maken omdat we deze stukken code op meerdere routes gebruikt worden: de index, details en favorieten pagina.

Door deze functies te schrijven:
- voorkomen we herhalende code
- blijft server.js overzichtelijk
- en verbeteren we de performance doordat er minder code geschreven staat in server.js.

### getBookmarks functie
Om deze functie te gebruiken, heb je alleen de naam van een lijst nodig.

bijvoorbeeld:
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L56

Met deze naam wordt een fetch URL gemaakt met een filter op de lijst naam. Door de naam te gebruiken blijft de URL in de browser leesbaar en begrijpelijk voor de gebruiker
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L78

Daarna wordt met map een nieuwe array gemaakt met alleen de id's van de cadeau's in de lijst, van de fetch URL.
map is een ingebouwde JavaScript functie die iets uitvoert op elk item van een array.
In dit geval halen we van elk cadeau de id op, en maken daar een nieuwe array van.
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L83-L85

Nadat de array met id's is gemaakt, geeft de functie deze terug met return. Daarna kunnen we in de route verder werken met deze array.
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L88

### changeBookmark functie
Om deze functie te gebruiken, heb je twee variabelen nodig:
listId (milledoni_users_id): dit is de id van de lijst waarin het cadeau moet worden opgeslagen.
giftId (milledoni_products_id): dit is de id van het cadeau dat je wilt opslaan of verwijderen uit de lijst.

bijvoorbeeld:
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L69

In deze functie maken we eerst een variabele aan met een fetch URL zonder filter.
Deze URL haalt alle cadeau's op uit alle lijsten. Daarna filteren we op de juiste lijst en cadeau’s
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L96-L100

Daarna controleert de functie of het cadeau al in de lijst staat.
Dit gebeurt met een filter op de fetch URL.
Met een if statement kijken we of data.length 0 is:
- Is het 0, dan staat het cadeau nog niet in de lijst, dus we voegen het toe met POST
- Is het groter dan 0, dan staat het cadeau al in de lijst, dan halen we het weg met DELETE
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L99-L103

Om het cadeau uit de lijst te halen, doen we eerst een fetch op de unieke id van dat cadeau.
Hiermee krijgen we een item terug, het cadeau dat we willen verwijderen.
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L106-L111

Als het cadeau nog niet in de lijst staat, dan voegen we het toe.
Hiervoor gebruiken we:
- listId (milledoni_users_id): de lijst waar het cadeau opgeslagen wordt.
- giftId (milledoni_products_id): de id van het cadeau dat toegevoegd wordt. Dit is de id die overeenkomt met het cadeau uit de [milledoni products](https://fdnd-agency.directus.app/items/milledoni_products/) lijst
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L115-L126

## Index route
De indexpagina heeft een GET route om alle cadeau's op de homepage te laten zien, en een POST route waarmee de gebruiker cadeau's kan toevoegen aan of verwijderen uit zijn lijsten

### Index GET route
In deze route wordt een fetch URL gebruikt die de name, slug, id en img.id ophaalt. We filteren de data op cadeau's met een img tag, zodat deze bovenaan staan. Deze tag gebruiken we later voor responsive images.
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L27-L33

Op de hoofdpagina ziet de gebruiker alle cadeau's uit zijn lijst. Hiervoor gebruiken we de getBookmarks functie. In Liquid controleren we verder of een cadeau al in de lijst staat.
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L36

De data van alle cadeau's en de cadeau's in de bookmarks lijst worden meegegeven via response.render
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L38

### Index POST route
Voor de POST route wordt de id van het cadeau, die opgeslagen moet worden, doorgestuurd. Daarna roepen we de changeBookmark functie aan, waarbij we deze id gebruiken. Voor nu werken we met een lijst, die we hardcoded meegeven met id: 2.
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L43-L45

Na het uitvoeren van de functie redirecten we de gebruiker terug naar dezelfde pagina.
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L48

### favorieten GET route
Op deze pagina laten we alleen de cadeau's uit een lijst zien. Hiervoor halen we eerst alle cadeau's uit de lijst op met de getBookmarks functie.
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L53-L56

deze functie geeft een array terug. in directus kan je een array meegeven in de fetch URL, dus het enige dat wij moeten doen is de filter schrijven. de data die dan uit de fetch komt heeft alleen de data van cadeau's uit de bookmark lijst
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L58-L59


## JavaScript
### bookmark hover?


## UI states
### UI states: buttons
### UI states: loader


### UI states: error
We hebben gezien dat de opdrachtgever inmiddels een design heeft voor de 404 pagina. Tijdens deze sprint hebben we dat gebouwd.
Het ziet er nu zo uit:
![image](https://github.com/user-attachments/assets/c2a1b04b-2f94-4127-ab33-0d3e2bec64e4)

In server.js hebben we ervoor gezorgd dat de gebruiker altijd op deze pagina terecht komt wanneer de URL ongeldig is.
Wanneer de gebruiker op deze pagina belandt, kan hij makkelijk terug naar de homepagina gaan met de button.


## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
- Download de nieuwste versie van Node.js (https://nodejs.org/en) op je laptop of computer.
- Fork deze repository en Clone jouw fork naar je laptop
- Open de repository in Visual Studio Code (of een andere code editor)
- open de terminal in vscode en instaleer node in de repository:
```
npm install
npm install -D nodemon
```
- controleer als de deze code hebt staan in package.json:"
```
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```
- Zodra de installatie klaar is, voer je het volgende commando uit om de website op localhost te starten
    - Voor gewone start, met deze moet je handmatig de server opnieuw opstarten bij wijzigingen:
    ``` npm start ```
    - Als je de server start met nodemon, dan wordt de server automatisch opnieuw gestart bij wijzigingen in server.js:
    ``` npm run dev ```
- Na het starten zie je in de terminal een localhost-link. Klik erop of open deze in je browser
- als je de server wilt stoppen dan kan dat met deze command:
``` Ctrl + C ```

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
