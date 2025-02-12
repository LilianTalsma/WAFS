// window.addEventListener("load", (event) => {
//     setVariabele()
// })

// function setVariabele(){
//     var infoBox = document.getElementById("infoBox");
// }

const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/211';

const myUrl = baseURL + endpointMe;


async /*9*/ function getData(URL) {
    return ( //8
        fetch(URL) //1
        .then( //2
            response /*3*/ => response.json() //4
        )
        .then( //5
            jsonData /*6*/ => {
                return jsonData
            } //7
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

        console.log(myName);
    });
}







function openInfoBox(obj) {
    obj.querySelector(".infobox").classList.toggle("active");

    console.log(obj)
}

//Ik roep de functie aan met het element tussen de haakjes (obj), 
//dan zoek ik in het obj naar het element met de class .infobox, 
//de classlist toggle active zorgt ervoor dat ik de textbox aan en uit kan klikken.