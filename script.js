
const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/211';

const myUrl = baseURL + endpointMe;

// Ik link de url van de api en mijn persoonlijke nummer aan elkaar waardoor het "mijn persoonlijke" url word.


async function getData(URL) {
    return ( 
        fetch(URL) 
        .then( 
            response  => response.json() 
        )
        .then( 
            jsonData  => {
                return jsonData
            } 
        )
    );
}


getMyName();

function getMyName() {


    getData(myUrl).then(data => {

        const infobox1 = document.querySelector('#infoBox1');

        const infobox2 = document.querySelector('#infoBox2');

        const infobox3 = document.querySelector('#infoBox3');

        const infobox4 = document.querySelector('#infoBox4');

        const infobox5 = document.querySelector('#infoBox5')


        const myData = data.data;
        let myName = myData.name;

        infoBox3.textContent = myName;

    });
}

// De functie haalt de data op uit de "mijn url" die ik net aan elkaar heb gekoppeld, 
// de querySelector haalt de class infoBox3 op uit de html en ik geef aan door het = teken,
// dat de text content van infoBox3 gevuld moet worden met de data uit de myName.


function openInfoBox(obj) {
    obj.querySelector(".infobox").classList.toggle("active");

    console.log(obj)
}

//Ik roep de functie aan met het element tussen de haakjes (obj), 
//dan zoek ik in het obj naar het element met de class .infobox, 
//de classlist toggle active zorgt ervoor dat ik de textbox aan en uit kan klikken.