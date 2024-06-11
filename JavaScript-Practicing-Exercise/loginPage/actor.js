

async function myActorData(){

    const apiURL = `https://freetestapi.com/api/v1/actors`;

    try{

        const response = await fetch(apiURL);

        if(!response.ok){
            throw new ("Network is not good")
        }
        const data = await response.json();
        displayData(data);

    } catch(error){

        console.error("There is a error to fetching the data, ", error);
    }
}

function displayData(data){
    const container = document.getElementById("container-actor");

    container.innerHTML = " ";

    data.forEach(actors => {

        const actorContainer = document.createElement("div");

        actorContainer.innerHTML = `
        <p>ID: ${actors.id}</p>
        <p>Name: ${actors.name}</p>
        `;

        container.appendChild(actorContainer);
    });

}