# Milledoni

## Inleiding
De opdrachtgevers zijn Frederica en Ton. Zij zijn de eigenaren van de website Milledoni.
Zij geloven dat een cadeau mensen dichter bij elkaar brengt.
Op de website kunnen gebruikers de tijd nemen om, met behulp van filters en een AI zoekfunctie, het perfecte cadeau te vinden.

De huidige versie van de website is verouderd. Daarom hebben zij een designers ingeschakeld om een nieuw ontwerp te laten maken.

Wij hebben deze designs ontvangen en hebben ze omgezet naar een werkende website.
De vernieuwde versie ziet er nu als volgt uit:
![image](https://github.com/user-attachments/assets/7dfdd7b1-30a0-469a-9672-8aeb8a336d17)



## Inhoudsopgave

  * [Beschrijving & Gebruik](#Beschrijving-en-Gebruik)
     * [Homepagina](#Homepagina)
     * [Detailpagina](#Detailpagina)
     * [Favorieten pagina](#Favorieten-pagina)
  * [Kenmerken](#kenmerken)
     * [Code conventies](#Code-conventies)
     * [HTML & Liquid](#HTML-en-Liquid)
        * [Liquid Partials](#Liquid-Partials)
        * [Data vanuit Server](#Data-vanuit-Server)
     * [CSS](#CSS)
        * [Styleguide](#Styleguide)
        * [nesting](#nesting)
        * [carrousel](#carrousel)
        * [bookmark hover](#bookmark-hover)
     * [server.js](#server.js)
        * [Functies](#Functies)
           * [getBookmarks functie](#getBookmarks-functie)
           * [changeBookmark functie](#changeBookmark-functie)
        * [Index route](#Index-route)
           * [Index GET route](#Index-GET-route)
           * [Index POST route](#Index-POST-route)
       * [Detail route](#deatail-route)
           * [Detail GET route](#Detail-GET-route)
           * [Detail POST route](#Deatil-POST-route)
       * [Favorieten route](#Favorieten-route)
          * [Favorieten GET route](#Favorieten-GET-route)
          * [Favorieten POST route](#Favorieten-POST-route)
     * [JavaScript](#JavaScript)
        * [Sticky header](#Sticky-header)
     * [UI states](#UI-states)
        * [UI states buttons](#UI-states---buttons)
        * [UI states: loader](#UI-states---loader)
        * [UI states: error](#UI-states---error)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving en Gebruik

### Homepagina
Als je op de website komt, kom je op de homepagina. Je ziet voor desktop aan de linkerkant de chat en aan de rechterkant alle cadeau's. Bovenin staan nog een 2 button naar de favorieten pagina en profile (die is niet gemaakt). 
Voor mobile en tablet is alles onder elkaar gezet en is de searchbar onderin gezet blijft staan als je scrolt. Voor steeds grotere schermen komt er een rij bij van de cadeau's tot de desktop versie. 

Je kan op de homepagina door de cadeau's heen scrollen en opslaan en niet opslaan (bookmark veranderd). Als je erdoorheen scrolt naar beneden gaat de header weg en als je ohoog scrolt komt die weer in beeld. Je kan op de cadeua's klikken en dan ga je naar de detailpagina van het cadeau waarop je hebt geklikt. 
Als je op de searchbar klikt gaat de tekst weg en kan je typen (doet het nog niet). Je kan op de Mijn lijst klikken dan ga je naar de favorieten pagina. 

We hebben besloten om voor mobile en tablet alles onder elkaar te zetten en voor desktop naast elkaar. Zo Is het responsive en goed te zien op alle schermen. Als je naar beneden scrolt gaat de header weg en als je naar boven scrolt komt de header terug. We hebben dit gedaan zodat je meer ruimte hebt voor de cadeau's en is er meer ruimte voor de cadeau's. De website gaat over de cadeua's en moet goed te zien zijn. 

Dit is een demo van alle interacties op de home pagina:

https://github.com/user-attachments/assets/ee9a30c6-d053-4718-8e2d-8d9642ff15e0

Hier zie je de home pagina op verschillende scherm breedtes:

https://github.com/user-attachments/assets/df28cb80-db84-4bd2-8af7-f2c195500ee9




### Detailpagina
Als je op een cadeau klikt ga je naar de detailpgina van dat cadeau. Je kan daar meer informatie zien over het cadeau, zie je wie het cadeau heeft gespot, waar je het kan kopen en zie je meer cadeau's die je misschien ook leuk vind. Ook op deze pagina kan je het cadeau opslaan en niet opslaan. 

Als je over de tabel van de verschillende winkels waar je het kan kopen gaat zie je waar je muis zit. De achtergrond en de tekstkleur veranderd.
Bij ‘You may also like’ staat een carrousel waarin je meer cadeau's kunt zien. De buttons aan de zijkanten wordt lichter wanneer je niet verder kunt scrollen.
De kaartjes in de carrousel worden groter wanneer ze in het midden staan, en de marker (het bolletje onderaan de carrousel) kleurt dan grijs.
Wanneer je over een marker hovert, wordt deze iets groter.

Dit is een demo van alle interacties op de detail pagina:

https://github.com/user-attachments/assets/ced0c728-2627-4bcb-b87a-d5d69a440a62

Hier zie je de detail pagina op verschillende scherm breedtes:

https://github.com/user-attachments/assets/30d69415-3d6c-4668-b0db-06b35807a396


### Favorieten pagina
Als je op de Mijn lijst in de header klikt ga je de favorieten pagina. Je ziet dan de naam van de persoon voor de wie de lijst is (voor nu is het mijn lijst) met een img. Daaronder de cadeau's die opgeslagen zijn. Je kan hier ook de cadeau's uit je lijst halen en dan gaat het cadeua weg van de favorieten pagina. 

Voor mobile is zijn de cadeau's onder elkaar en als de schermen steeds groter worden komt er een rij bij t/m 3 rijen.   

We hebben ervoor gekozen om de favorieten pagina zo te maken, omdat dit het belangrijkste te van de pagina is. We wilde deze pagina wel hebben, omdat we de opgeslagen cadeua's wilde laten zien. 

Hier zie je de homepage op verschillende scherm breedtes:

https://github.com/user-attachments/assets/4a0c99ef-3177-44d7-b15c-9d621b73eb73


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



## HTML en Liquid
### Liquid Partials
We hebben een head.liquid en een footer.liquid in een partial gedaan. Zo kunnen we voor meerdere pagina dezelfde head en footer gebruiken. 

We halen aan het begin van een pagina de head op die een dynamische titel heeft en onderaan halen we de footer op.
https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/views/index.liquid#L1
https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/views/partials/head.liquid#L9
https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/views/index.liquid#L72

We hebben de cadeau’s in een partial gedaan, omdat we de cadeau’s op meerdere plekken gebruiken. Zo hoefden we de cadeau’s niet meerdere keren de schrijven en kon het nu maar met 1 regel code. 
https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/views/index.liquid#L64
https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/views/detail.liquid#L153
https://github.com/vsheo/pleasurable-ui/blob/5c34c9757fa5cc6271bd544fb9600d6e61007bba/views/favorieten.liquid#L11

### Data vanuit Server
In server.js hebben we voor elke pagina een GET en een POST route. Per pagina geven we alleen de data mee die nodig is om die specifieke pagina te tonen.

Hieronder zie je een voorbeeld van de GET route voor de index pagina.
Om de cadeau kaartjes weer te geven, hebben we de volgende gegevens nodig:
- name: de naam of titel van het cadeau kaartje
- slug: wordt gebruikt voor de redirect naar de detail pagina
- id: wordt gebruikt om het cadeau op te slaan in een bookmark lijst
- img en img.id: voor het tonen van responsive afbeeldingen vanuit Directus

De URL met deze tags gebruiken we als basis URL voor alle pagina's

https://github.com/vsheo/pleasurable-ui/blob/5c34c9757fa5cc6271bd544fb9600d6e61007bba/server.js#L26-L39


Dit is een voorbeeld van de GET route voor de favorietenpagina.
Op deze pagina moeten we weten welke cadeaus door de gebruiker zijn gebookmarked.

Daarom voegen we aan de basis URL een filter toe.
Deze filter zorgt ervoor dat alleen de data wordt opgehaald van de cadeaus die zijn opgeslagen. Zo laden we alleen de relevante informatie die nodig is om de favorieten lijst weer te geven.

https://github.com/vsheo/pleasurable-ui/blob/5c34c9757fa5cc6271bd544fb9600d6e61007bba/server.js#L89-L93


## CSS
### Styleguide
We hebben het begin een styleguide gemaakt. We hebben allemaal onze gemaakte website en van het design erin gestopt en daar is de styleguide van gemaakt. 
De styleguide bestaat uit kleuren, border-radius, borders, font-size, font-weight, font-family, line-height en box-shadow. De font wordt ingeladen met @font-face. 

Het is ingedeeld per pagina met een class en als je iets uit de styleguide gebruikt dan moet je var() gebruiken en de class toevoegen aan de HTML waar je de style wilt.
<img width="608" alt="Scherm­afbeelding 2025-05-27 om 23 26 05" src="https://github.com/user-attachments/assets/3ee8d616-4c8c-4acf-833d-433392e61269" />


### nesting
We hebben besloten om code te nesten, omdat het dan overzichtelijker wordt. Zo kan je zien wat bij wat hoort en kan je sneller en makkelijker dingen aanpassen. 

Het nesten van media queries. 
https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/public/sprint-11.css#L297-L310

Het nesten van een container met wat daarin zit. 
https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/public/sprint-11.css#L139-L238


### carrousel
De carrousel werkt volledig met CSS, zonder JavaScript.
In de HTML bestaat deze uit een ul element, waarbij elk cadeau kaartje als een li wordt weergegeven.
Helemaal aan het einde van de lijst staat een extra li met een link terug naar de homepage, zodat de gebruiker meer resultaten kan bekijken.

https://github.com/user-attachments/assets/76d9010c-3349-4832-b670-00219476e63a

Op de mobiele en tablet versie van de website wordt de carrousel vervangen door een grid.
Deze grid past zich automatisch aan(er worden nieuwe kolommen toegevoegd zodra er voldoende ruimte is)
https://github.com/vsheo/pleasurable-ui/blob/6259ce4f98b636cae8880c53c260525c11321192/public/sprint-11.css#L929-L935

#### carrousel ul
Voor de desktopversie krijgt de carrousel container (de ul) de volgende CSS properties:
- ```overflow-x: auto;```: Zorgt ervoor dat de container horizontaal scrollbaar is
- ```scroll-snap-type: x mandatory;```: Hiermee worden de li elementen horizontaal gesnapped tijdens het scrollen (de li vanzelf naar een bepaalde positie toe gaat).
- ```scroll-marker-group: after;```: dit zorgt ervoor dat er later een indicator komt voor elke li, op de indicator kan ook geklikt worden om direct naar het bijbehorende li te scrollen
- ```scroll-behavior: smooth;```: Zorgt voor een smooth scroll animatie wanneer de gebruiker door de carrousel gaat
https://github.com/vsheo/pleasurable-ui/blob/6259ce4f98b636cae8880c53c260525c11321192/public/sprint-11.css#L957-L960

Daarnaast gebruiken we de volgende CSS pseudo-elementen:
- ```::scroll-button(left)```
- ```::scroll-button(right)```

Deze knoppen worden gebruikt om door de carrousel te navigeren.
Wanneer op de rechter knop ```::scroll-button(right)``` wordt geklikt, scrollt de carrousel automatisch naar het eerstvolgende li element m.b.v. scroll snapping.
De bijbehorende indicator verschuift ook mee naar rechts om de bijbehorende li positie aan te geven.
Zodra het einde van de lijst is bereikt, krijgt de knop een lagere opacity om visueel aan te geven dat er niet verder gescrold kan worden.
https://github.com/vsheo/pleasurable-ui/blob/6259ce4f98b636cae8880c53c260525c11321192/public/sprint-11.css#L962

Het pseudo-element ```::scroll-button``` heeft verplicht de CSS property ```content: ""``` nodig, zonder content wordt het element niet weergegeven.

Ik heb geprobeerd om met Unicode in de content property pijltjes te maken.
Maar het was lastig om de pijlen in het midden te krijgen vanwege de line height.

Uiteindelijk heb ik ervoor gekozen om een SVG als background image te gebruiken voor de buttons.
De content property heb ik toen leeg gelaten, zodat de background image wel zichtbaar is.
https://github.com/vsheo/pleasurable-ui/blob/6259ce4f98b636cae8880c53c260525c11321192/public/sprint-11.css#L972-L975

De hover en active states voor de scroll buttons heb ik gemaakt m.b.v. [deze CodePen](https://codepen.io/web-dot-dev/pen/PwoRRwe?editors=1100)
https://github.com/vsheo/pleasurable-ui/blob/6772b5369f522796ef6eb3db80695bff77461716/public/sprint-11.css#L981-L988

Het laatste pseudo element dat we nodig hebben op de ul is ```::scroll-marker-group```.
Met dit pseudo element kunnen we de positie van de indicator cirkels (de scroll markers) bepalen binnen de carrousel container.
https://github.com/vsheo/pleasurable-ui/blob/6259ce4f98b636cae8880c53c260525c11321192/public/sprint-11.css#L998

#### carrousel li
Op elk li element in de carrousel gebruiken we de volgende CSS properties:
- ```scroll-snap-align: center;```: zorgt ervoor dat het li element altijd in het midden van de container komt wordt wanneer er gescrold wordt.
- ```scroll-snap-stop: always;```: dit zorgt ervoor dat scroll snap stopt bij de eerst volgende li element

https://github.com/vsheo/pleasurable-ui/blob/6259ce4f98b636cae8880c53c260525c11321192/public/sprint-11.css#L1017-L1018

Daarna gebruiken we de pseudo class ```::scroll-marker {```
Hiermee kunnen we de indicatoren (de scroll markers) zelf stylen.
Ik heb deze gebruikt om de indicatoren de vorm van cirkeltjes te geven, zodat ze duidelijk zichtbaar zijn als navigatiepunten binnen de carrousel.
https://github.com/vsheo/pleasurable-ui/blob/6259ce4f98b636cae8880c53c260525c11321192/public/sprint-11.css#L1034

Om de indicatoren interactiever te maken, heb ik het volgende toegepast:
- ```target-current {``` Om de indicator van het li element dat in het midden staat iets groter te maken
https://github.com/vsheo/pleasurable-ui/blob/6259ce4f98b636cae8880c53c260525c11321192/public/sprint-11.css#L1051
- en ```hover {``` Om ervoor te zorgen dat de indicator wat groter wordt wanneer de gebruiker er overheen hovert
https://github.com/vsheo/pleasurable-ui/blob/6259ce4f98b636cae8880c53c260525c11321192/public/sprint-11.css#L1056

#### carrousel animatie
Om ervoor te zorgen dat het volgende li element met een scale animatie naar het midden beweegt, gebuikt ik een keyframe animatie die het li element op 50% wat groter maakt en op 100% terug laat gaan naar ```scale: 1;```
https://github.com/vsheo/pleasurable-ui/blob/6772b5369f522796ef6eb3db80695bff77461716/public/sprint-11.css#L1233-L1243
Daarna maak ik een custom property aan om een timeline te maken voor de scroll beweging van het li element in de carrousel.
https://github.com/vsheo/pleasurable-ui/blob/6772b5369f522796ef6eb3db80695bff77461716/public/sprint-11.css#L1020-L1022
op die timeline plaats ik de keyframe animation
https://github.com/vsheo/pleasurable-ui/blob/6772b5369f522796ef6eb3db80695bff77461716/public/sprint-11.css#L1024-L1026

### bookmark hover
We hebben op de bookmark-button twee hover-effecten toegepast op de SVG's: één voor de opgeslagen status en één voor wanneer het item nog niet is opgeslagen. Als het item is opgeslagen, wordt er bij hover een plus-teken getekend. Als het item nog niet is opgeslagen, verschijnt er een vinkje (checkmark).
In beide SVG's hebben de <path>-elementen voor het plus-teken en het vinkje een eigen class. Voor de opgeslagen versie zijn dat .plus-2 en .check-2, en voor de niet-opgeslagen versie .plus en .check.

https://github.com/vsheo/pleasurable-ui/blob/78f523a71726449eca50b6009949ab36df84a328/views/partials/giftcard.liquid#L21
https://github.com/vsheo/pleasurable-ui/blob/78f523a71726449eca50b6009949ab36df84a328/views/partials/giftcard.liquid#L26

Met CSS worden deze paden zichtbaar gemaakt of verborgen met opacity. Een waarde van 1 maakt het pad zichtbaar, 0 maakt het onzichtbaar. Via transition geven we aan hoe lang het duurt voordat de opacity verandert.
Staat bij de path die al getoond wordt.
https://github.com/vsheo/pleasurable-ui/blob/78f523a71726449eca50b6009949ab36df84a328/public/sprint-11.css#L395-L396

De stroke-dasharray maakt van het path een lijn van 30 eenheden, daarna een gat, en dat gaat steeds opnieuw. Met de stroke-dashoffset schuift de hele lijn buiten beeld, omdat die even groot is als de stroke-dasharray. Daardoor is die onzichtbaar.
Staat op de path die bij de hoevr getoond wordt. 
https://github.com/vsheo/pleasurable-ui/blob/78f523a71726449eca50b6009949ab36df84a328/public/sprint-11.css#L401-L402

Bij hover verandert de opacity, en met animation wordt het juiste svg path getekend. De animatie heet drawPlus, duurt 1 seconde, en blijft op het eindresultaat staan dankzij forwards. In de @keyframes wordt stroke-dashoffset op 0 gezet, zodat het path steeds meer zichtbaarder wordt
Path met hover die getoond werd. 
https://github.com/vsheo/pleasurable-ui/blob/78f523a71726449eca50b6009949ab36df84a328/public/sprint-11.css#L407
Path met de hoevr die getoond wordt. 
https://github.com/vsheo/pleasurable-ui/blob/78f523a71726449eca50b6009949ab36df84a328/public/sprint-11.css#L411-L412
Keyframes
https://github.com/vsheo/pleasurable-ui/blob/78f523a71726449eca50b6009949ab36df84a328/public/sprint-11.css#L415-L419


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
De indexpagina heeft een GET route om alle cadeau's op de homepage te laten zien, en een POST route waarmee de gebruiker cadeau's kan toevoegen aan of verwijderen uit zijn lijsten.

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

## Detail route
De detailpagina heeft een GET route om alle cadeau's op een eigen detailpagina te laten zien, en een POST route waarmee de gebruiker cadeau's kan toevoegen aan of verwijderen uit zijn lijst.

### Detail GET route
In deze route wordt de fetch url gebruikt met daarin name, slug, img en img.id. Daar wordt voor deze route de description, amount, spotter, tags en de slug. Met de slug kan die zien welk cadeau het is. 
https://github.com/vsheo/pleasurable-ui/blob/a0ee467f6aa6af029241f1d15d1c90cbebe2d0b0/server.js#L133-L135

Daarbij wordt ook een aparte fetch url gedaan voor de you also like. Daar wordt dezelfde url gebruikt maar dan met als de img niet goed in de database staat voor de responsive images wordt die niet getoond. Er worden maar 6 cadeau’s getoond. 
https://github.com/vsheo/pleasurable-ui/blob/a0ee467f6aa6af029241f1d15d1c90cbebe2d0b0/server.js#L141-L142

Er zit een try catch als er iets mis is met de url en de slug niet hetzelfde zijn van een cadeau dan wordt de 404 pagina getoond en als de url alles klopt dan laat die de detailpagina van het cadeau zien. 
Hetzelfde als er iets mis gaat met de fetch. 
https://github.com/vsheo/pleasurable-ui/blob/a0ee467f6aa6af029241f1d15d1c90cbebe2d0b0/server.js#L130-L147

### Detail POST route
Voor de post op detailpagina wordt de id en de slug van het cadeau, die opgeslagen of niet opgeslagen doorgestuurd. Daarna roepen we de changeBookmark functie aan, waarbij we deze id en de slug gebruiken. Voor nu werken we met een lijst, die we hardcoded meegeven met id: 2.
https://github.com/vsheo/pleasurable-ui/blob/a0ee467f6aa6af029241f1d15d1c90cbebe2d0b0/server.js#L158-L161

Na het uitvoeren van de functie redirecten we de gebruiker terug naar dezelfde pagina.
https://github.com/vsheo/pleasurable-ui/blob/a0ee467f6aa6af029241f1d15d1c90cbebe2d0b0/server.js#L164

## Favorieten route
De favorieten pagina heeft een GET route om alle cadeau's die opgeslagen zijn te laten zien en een POST route waarmee de gebruiker cadeau's kan verwijderen uit zijn lijst.

### Favorieten GET route
Op deze pagina laten we alleen de cadeau's uit een lijst zien. Hiervoor halen we eerst alle cadeau's uit de lijst op met de getBookmarks functie.
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L53-L56

deze functie geeft een array terug. in directus kan je een array meegeven in de fetch URL, dus het enige dat wij moeten doen is de filter schrijven. de data die dan uit de fetch komt heeft alleen de data van cadeau's uit de bookmark lijst
https://github.com/vsheo/pleasurable-ui/blob/96fc1494ed458254e7fd3bdf6920f073538e62d6/server.js#L58-L59

### Favorieten POST route
Voor de post op favorieten pagina wordt de id en de name van het cadeau, die opgeslagen of niet opgeslagen doorgestuurd. Daarna roepen we de changeBookmark functie aan, waarbij we deze id en de name gebruiken. Voor nu werken we met een lijst, die we hardcoded meegeven met id: 2.

Na het uitvoeren van de functie redirecten we de gebruiker terug naar dezelfde pagina.
Met assign favoriet_gifts weet die of die op de favorieten pagina moet blijven. Bij de post is een if else gebruikt om te zien of die een andere action moet pakken en dat gebeurt door favoriet_gifts. Die ook bij de cadeau’s op de favorieten pagina staat. 

https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/server.js#L66-L67
https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/server.js#L72

https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/views/partials/giftcard.liquid#L21-L25
https://github.com/vsheo/pleasurable-ui/blob/200abb3da14b2de42d2c3bdfe5dab0aa429f9ba7/views/favorieten.liquid#L12

## JavaScript

### Sticky header
De header verdwijnt wanneer de gebruiker naar beneden scrolt en verschijnt weer bij het scrollen naar boven.
Ik heb dit gedaan zodat de cadeau container op de index pagina de volledige hoogte van het scherm kan gebruiiken voor het tonen van de cadeau's.
Dit is vooral handig op mobiele apparaten, waar het scherm kleiner is.
Als de gebruiker ver naar beneden heeft gescrold, hoeft die niet helemaal terug naar boven om de header opnieuw te zien/gebruiken.

https://github.com/user-attachments/assets/82b6eaa0-a61a-4b1e-a80c-c5af7a450cd1

Dit heb ik gedaan door de header position: sticky te geven. Hierdoor blijft de header altijd zichtbaar in beeld, ook wanneer JavaScript niet werkt.<br>
https://github.com/vsheo/pleasurable-ui/blob/f7d15290db6fda9990ec46f81010a58499090dea/public/sprint-11.css#L12-L19
Met JavaScript selecteer ik de header en plaats ik een eventlistener op alle scroll bewegingen<br>
https://github.com/vsheo/pleasurable-ui/blob/f7d15290db6fda9990ec46f81010a58499090dea/public/main.js#L40)
Met pageYOffset krijg ik hoeveel pixels de pagina verticaal is verschoven<br>
https://github.com/vsheo/pleasurable-ui/blob/f7d15290db6fda9990ec46f81010a58499090dea/public/main.js#L43-L44
Als het verschil tussen de huidige en vorige pageYOffset positief is (dus bij scrollen naar beneden), voegen we de class "scroll-down" toe om de header buiten beeld te zetten<br>
https://github.com/vsheo/pleasurable-ui/blob/94ca1dda67a1ac4c7125ea528c18403afea865b2/public/main.js#L42-L46
De class "scroll-down" zorgt ervoor dat de header met een transition uit beeld verdwijnt<br>
https://github.com/vsheo/pleasurable-ui/blob/94ca1dda67a1ac4c7125ea528c18403afea865b2/public/sprint-11.css#L21-L29
Als het verschil tussen de huidige en vorige pageYOffset negatief is (dus bij scrollen omhoog), wordt de header weer zichtbaar gemaakt door de class "scroll-up" toe te voegen<br>
https://github.com/vsheo/pleasurable-ui/blob/94ca1dda67a1ac4c7125ea528c18403afea865b2/public/main.js#L48-L52
Als laatste zetten we lastScroll gelijk aan currentScroll. Dit doen we zodat bij de volgende scroll de if statement uitgaat van de huidige scrollpositie, in plaats van altijd vanaf het begin van de pagina (bovenaan) te rekenen<br>
https://github.com/vsheo/pleasurable-ui/blob/94ca1dda67a1ac4c7125ea528c18403afea865b2/public/main.js#L53


## UI states
### UI states - buttons


### UI states - loader
We hebben een loader toegevoegd aan de bookmark button.
Wanneer erop geklikt wordt, verandert de opacity van de knop en verschijnt er een loader in beeld.
Deze loader blijft draaien totdat het cadeau succesvol is opgeslagen in de bookmark lijst.

https://github.com/user-attachments/assets/8b10b1c0-e04e-4b1d-aabc-a6f5c8c8ac1b

Normaal wordt de pagina automatisch refreshed wanneer er een form submit wordt in de browser.
Wij wilden dit juist voorkomen om de gebruikerservaring op de website te verbeteren.
Bijvoorbeeld:
Een gebruiker voegt ergens onderaan de pagina een cadeau toe aan zijn bookmark lijst.
Dit veroorzaakt een pagina refresh, waardoor de gebruiker weer helemaal bovenaan de pagina terecht komt.
Hierdoor verliest hij zijn zoek resultaten en zijn positie op de website.

Om dit te voorkomen, gebruiken we een client side fetch om de form die submit wordt op te vangen.
Met behulp van een DOMParser voegen we daarna de nieuwe informatie toe aan de pagina, zonder de pagina te refreshen.

Als eerste gebruiken we een if statement om te controleren of de browser dit ondersteunt.
Als dat het geval is, voegen we een eventlistener toe voor het submit event op de pagina.
Het form element waarop de submit plaatsvindt, slaan we op in een variabele.
https://github.com/vsheo/pleasurable-ui/blob/0f8d0124e73256e7b90d7f42e2821038520dae9a/public/main.js#L1-L4

We gebruiken het data-enhanced attribuut op het form element.
Op de pagina zijn er veel cadeaus, dit attribuut helpt ons om na het verzenden van het form met fetch het juiste form element in de DOM terug te vinden.
later gebruiken wij dit attribuut samen met de DOMParser om het juiste element te selecteren en de nieuwe HTML in te laden op de positie van dit element.
https://github.com/vsheo/pleasurable-ui/blob/0f8d0124e73256e7b90d7f42e2821038520dae9a/views/partials/giftcard.liquid#L18

In JavaScript controleren we of het formulier het data-enhanced attribuut heeft.
Als dat niet het geval is, doet deze code niets met deze form submit en wordt de form op de standaard manier verwerkt.
https://github.com/vsheo/pleasurable-ui/blob/0f8d0124e73256e7b90d7f42e2821038520dae9a/public/main.js#L7-L9

Normaal gesproken zou de browser op dit moment de pagina refreshen om de nieuwe HTML voor de bookmark te laten zien.
Wij stopen dit met ```preventDefault()```.
In plaats daarvan starten we een loader door een class toe te voegen aan het formulier.
https://github.com/vsheo/pleasurable-ui/blob/0f8d0124e73256e7b90d7f42e2821038520dae9a/public/main.js#L11-L12

De loading-state class wordt toegevoegd aan het form element.
Met CSS nesting selecteert deze class de button binnen de form element en zet deze op display: none.
Tegelijkertijd wordt de loader zichtbaar gemaakt door deze op display: block te zetten.
https://github.com/vsheo/pleasurable-ui/blob/0f8d0124e73256e7b90d7f42e2821038520dae9a/public/sprint-11.css#L383-L391

Daarna voeren we een client-side fetch uit.
De fetch wordt uitgevoerd met de URL die staat in het action-attribuut van het formulier.
de response van de fetch zetten we daarna om in tekst.
https://github.com/vsheo/pleasurable-ui/blob/0f8d0124e73256e7b90d7f42e2821038520dae9a/public/main.js#L14-L19

Daarna zetten we de tekst om naar HTML met behulp van de DOMParser.
https://github.com/vsheo/pleasurable-ui/blob/0f8d0124e73256e7b90d7f42e2821038520dae9a/public/main.js#L21-L22

De responseDOM bevat de HTML code van de hele pagina, maar wij hebben maar een klein gedeelte daarvan nodig.
Met behulp van het data-enhanced attribuut zoeken we in de nieuwe DOM(responseDOM) naar het element dat dezelfde data-enhanced attribuut heeft.
https://github.com/vsheo/pleasurable-ui/blob/0f8d0124e73256e7b90d7f42e2821038520dae9a/public/main.js#L24-L26

Nu kunnen we de loader stoppen en het formulier vervangen door de nieuwe HTML
https://github.com/vsheo/pleasurable-ui/blob/0f8d0124e73256e7b90d7f42e2821038520dae9a/public/main.js#L28-L30


### UI states - error
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
