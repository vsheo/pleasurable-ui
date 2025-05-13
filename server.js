// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from "express";

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from "liquidjs";

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express();

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }));

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static("public"));

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine("liquid", engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set("views", "./views");

// index GET
app.get("/", async function (request, response) {
    // alle gift data
    const giftResponse = await fetch('https://fdnd-agency.directus.app/items/milledoni_products/?fields=name,image,slug,id,img,img.id&filter={"img":{"_nnull":"null"}}');
    const giftResponseJSON = await giftResponse.json();

    // alle bookmarked items
	const allBookmarks = await getBookmarks(2)

    response.render("index.liquid", { giftData: giftResponseJSON.data, bookmarks: allBookmarks });
});

// index POST
app.post("/:id", async function (request, response) {
    const giftId = request.params.id;

    // url waar het cadeau opgeslagen moet worden
    const postURL = "https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products_1/";

    // filter om te zoeken naar het cadeau,
    const checkGift = await fetch(postURL + `?filter={"milledoni_users_id":"2","milledoni_products_id":"${giftId}"}`);
    const checkGiftResponseJSON = await checkGift.json();

    // if statement om te kijken als het cadeau al in de lijst staat
    if (checkGiftResponseJSON.data.length > 0) {
        // als dat het geval is dan hebben we de id nodig om het met delete uit de lijst te haalen
		// postURL + id geeft alle data van het cadeau in de bookmarks lijst terug
        await fetch(postURL + checkGiftResponseJSON.data[0].id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    // Voeg de nieuwe waarde toe aan de bookmark list in directus
    else {
        await fetch(postURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                milledoni_users_id: 2,
                milledoni_products_id: giftId,
            }),
        });
    }
    // Redirect terug naar de index pagina
    response.redirect("/");
});

// favorieten GET
app.get("/favorieten/:id", async function (request, response) {
    const listId = request.params.id;

    // alle bookmarked items
	const allBookmarks = await getBookmarks(listId)

    const bookmarkedData = await fetch(`https://fdnd-agency.directus.app/items/milledoni_products/?fields=name,image,slug,id,img,img.id&filter={"id":{"_in":"${allBookmarks}"}}`)
    const bkmDataResponseJSON = await bookmarkedData.json()

    response.render("favorieten.liquid", { bkmgifts: bkmDataResponseJSON.data });
});

// dit is een functie die een array maakt met alle bookmarked cadeau's
async function getBookmarks(listId) {
	// haal alle items uit een lijst op
	const yourList = `https://fdnd-agency.directus.app/items/milledoni_users/?fields=id,liked_products.milledoni_products_id&filter={"id":"${listId}"}`;
	const yourListResponse = await fetch(yourList);
	const yourListResponseJSON = await yourListResponse.json();

	// alle milledoni_products_id's uit "liked_products" maken tot een array
	const productIdArray = yourListResponseJSON.data[0].liked_products.map(
		product => product.milledoni_products_id
	);

	// return een array met alle milledoni_products_id's, dit zijn de bookmarked cadeau's
	return productIdArray;
}

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set("port", process.env.PORT || 8000);

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get("port"), function () {
    console.log(
        `Project draait via http://localhost:${app.get(
            "port"
        )}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`
    );
});
