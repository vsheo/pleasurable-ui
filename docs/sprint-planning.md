# Pleasurable User Interface

## Sprint Planning

Repo klaarzetten, taken plannen en afspraken maken met je team.

### Aanpak
Deze sprint werk je in een team aan de website voor een opdrachtgever. Jullie gaan op 1 repository werken met de *Feature Branch Workflow*; issue oppakken, feature branch maken, pull request maken, code laten reviewen, mergen...

Eerst ga je de planning van deze sprint bekijken en bedenken wat jullie deze sprint gaan realiseren. Daarna ga je met je team een project board inrichten, taken plannen en MoSCoW bepalen. Tot slot ga je met het team de repository klaarzetten. Deze sprint ga je leren werken met branches, zodat jullie tegelijk aan code kunnen werken.

## Sprint Planning

Bekijk het programma van Sprint 11 op de programma-website. Deze sprint ga je met een team samenwerken. Let op de verplichte voortgangsgesprekken op vrijdag.

In het programma is nog niet alles ingevuld. Wat voor practicum willen jullie woensdag? En volgende week? Waar is behoefte aan? Wat voor JS challenge willen jullie donderdagen? Schrijf dit op het *whiteboard*.

### Sprint review verwerken
Laat eerst aan elkaar zien wat jullie de vorige sprints hebben gemaakt.

Bespreek de feedback van de opdrachtgever die jullie tijdens de Sprint Review hebben gekregen. 

### Sitemap en pagina's
Maak daarna gezamenlijk een sitemap van het hele project op het whiteboard. Deze sprint ga je met een team een website ontwerpen en maken, als jullie taken gaan verdelen kun je de hele website maken... en misschien nieuwe dingen verzinnen?

Schrijf of teken Lo-fi per pagina wat er ongeveer op een pagina komt. Geef aan welke pagina's of onderdelen al door jullie zijn gemaakt en welke nog niet. Voeg ook nieuwe ideeën toe als je die hebt. 

### Figma designs en styleguide
Bekijk jullie Hi-fi Figma designs en vergelijk het met de sitemap die jullie hebben gemaakt. Hebben jullie van alle pagina's en onderdelen een design? 
En wat is de status van de styleguide?

Geef op het whiteboard aan welke onderdelen wel en welke nog geen design hebben.

## Taken plannen en MoSCoW bepalen

Omdat je met een team gaat samenwerken is het verstandig om een nieuw project board aan te maken. Dat moet één van de teamleden doen en de anderen toegang geven.

Dezelfde persoon moet deze leertaak Forken om het project board en issues te kunnen koppelen. Dit wordt jullie gezamenlijke *repository*.

Maak samen issues van de taken waar jullie mee aan de slag willen deze sprint. Schrijf voor een issue een (korte) uitleg wat het issue inhoudt en mogelijke knelpunten. Het is de bedoeling dat je dit zo schrijft dat teamleden ook begrijpen wat je bedoelt...

### MoSCoW
Kunnen jullie al bedenken wat jullie elke week af willen hebben om woensdag 28 mei een mooie website te presenteren? Wat is daarvoor nodig? Hier kan je de _MoSCoW methode_ voor gebruiken.

MoSCoW is een afkorting van *Must haves*, *Should haves*, *Could haves* em *Won't haves (this time)*. Dit is een methode waarmee je taken kan _prioriteren_. Wat moet er sowieso zijn voor de oplevering? Welke onderdelen zijn belangrijk, maar niet noodzakelijk voor de oplevering? Welke onderdelen of pagina's zijn niet per se nodig en doen jullie alleen als er genoeg tijd is? En welke onderdelen zijn nu niet nodig?

Label jullie taken met de MoSCoW labels. Labels kunnen gedurende het project veranderen; elke vrijdag gaan jullie gezamenlijk het project board bespreken en bijwerken. Dit is ook een mooi moment om nog een paar *Could haves* te bedenken, wat zou echt vet zijn om te maken? Misschien lukt het wel...

Een aantal *Must haves* in week 1 zijn belangrijk om ervoor te zorgen dat niemand hoef te wachten. Bijvoorbeeld het server.js file netjes opzetten. En de stylguide stylesheet die iedereen nodig heeft.

#### Bronnen

- [MoSCoW method](https://en.wikipedia.org/wiki/MoSCoW_method)

### Taakverdeling

Omdat jullie deze sprint in een team gaan werken gaan jullie alle code opnieuw schrijven. En alles (!) wat je de afgelopen sprints hebt geleerd over performance, user experience en progressive enhancement toepassen!

Iedereen werkt aan taken waarvoor je moet analyseren, ontwerpen en bouwen. In een frontend team ga je niet verdelen wie de CSS doet, en wie de HTML of NodeJS. Je verdeelt functionaliteiten, onderdelen van een website en componenten.

Verdeel de taken door issues te assignen aan teamleden. Probeer als het kan een start en eind datum voor de issues bedenken. Sommige taken zijn afhankelijk van andere taken, dus die moeten eerst worden gedaan. Zet daar dan een strakke eind datum op, of doe deze meteen vandaag.
We gaan deze week volle kracht van start zodat jullie aanstaande vrijdag een werkende versie van de volledige site hebben. Zo kunnen we volgende week met nieuwe experimenten en _pleasurables_ aan de slag.


Maak afspraken over aanwezigheid en plan hoe laat jullie elke dag de Stand-up doen. 
Pak jullie learnings over samenwerken uit Sprint 7 er nog eens bij, wat kon je toen beter doen? 


### 🧑‍🏫 Planning bespreken met een docent
Bespreek jullie ideeën, planning, MoSCoW en afspraken vandaag nog met een docent.


## Feature branch workflow

Nu gaan jullie de ontwikkelomgeving inrichten. 

Jullie gaan als team 1 website maken. Jullie maken 1 ontwerp, je werkt soms in je eigen code en soms zullen jullie de code gaan samenvoegen. Dit doe je door met je team 1 gezamenlijke repository te gebruiken.

Deze sprint gaan we leren om te werken met verschillende _branches_. Een branch is een _vertakking_ van de _main_ branch, de backbone van jullie project met de code die uiteindelijk live gaat.

Als de teamleden in een _branch_ werken, kun je code aanpassen, toevoegen en verwijderen zonder dat de anderen daar last van hebben. Zo kan je tegelijk aan onderdelen van een website werken. Als een _branch_ af is en goed bevonden, kan je deze met een _Pull Request_ _mergen_ naar de _main_ branche.

Het idee is dus dat niemand in de main branch werkt, maar dat jullie in verschillende onafhankelijke branches werken en deze steeds samenbrengen in de main branch.

### Collaborators aanmaken
Slechts één teamlid forkt de leertaak. Voeg de teamleden toe als _Collaborators_. Nu kunnen alle teamleden samenwerken op dezelfde repository, door deze allemaal te clonen (downloaden).

### 🛠️ Branches maken
Ga nu met je team uitproberen hoe je met branches moet werken en via een pull request en een code review van andere teamleden nieuwe features naar de main branch kunt mergen.

- Clone allemaal de gezamenlijke repo
- Maak een feature branch aan met een logische naam
- Maak een eigen Route en een bijhorende View aan in jouw Feature Branch
- Maak daarna een Pull Request naar _main_
- Assign je teamgenoten om jouw Pull Request te reviewen
- Merge naar Main !

### Bronnen

- [About branches - Github](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- [Creating and deleting branches within your repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)


## 👷 Aan de slag
Nu jullie de repo goed hebben staan, het project board hebben ingevuld, en een eerste planning hebben gemaakt, kunnen jullie aan de slag. 

Pak een issue op dat aan jou is toegewezen. Werk zo nodig het Figma design bij, schets in een Wireflow de user flow als je aan een interactie gaat werken en maak een breakdown. Hou in het issue de voortgang bij en vraag elkaar regelmatig om feedback. 

💡 Top tip: Het is verstandig en goed voor de samenwerking als jullie met het hele team de breakdown van een wireflow en pagina's gaan bespreken voordat je gaat coderen. Zo komen jullie tot goede code afspraken en hou je de kwaliteit van het gemaakte werk gelijk.

Maak een _Feature Branch_ als je gaat coderen. En laat je werk reviewen door teamleden met een _Pull Request_ als je het wil toevoegen aan de _main_ branch.

Have fun!



<!--
### Samenwerken & planning
In de analysefase bespreek je als team welke werkzaamheden er zijn, wie wat gaat doen en maak je een planning. 
Er is veel werk aan de winkel deze sprint, maak afspraken om elke dag aan het project te werken en hoe jullie elkaar op de hoogte houden van de vorderingen.

### Materiaal voor samenwerken

- [About Github Projects, quickstart en best practices](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [De Daily standup meeting: uitleg en tips](https://scrumguide.nl/daily-standup-meeting/)

- [Making a pull-request](https://www.atlassian.com/git/tutorials/making-a-pull-request) (nb. wij gebruiken de feature-branch workflow)
- [How to Collaborate on GitHub](https://code.tutsplus.com/tutorials/how-to-collaborate-on-github--net-34267)
- [download het Team Canvas](https://github.com/fdnd-task/performance-matters-fast-website/blob/main/docs/Teamcanvas.pdf)
- [Lees instructies over het gebruik van het Teamcanvas in de deeltaak uit sprint 1](https://github.com/fdnd-task/your-tribe-team-canvas)

-->
