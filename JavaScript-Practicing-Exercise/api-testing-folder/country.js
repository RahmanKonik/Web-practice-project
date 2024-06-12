
async function myCountryData(){

    const apiuri = `https://freetestapi.com/api/v1/countries`;

    try{
        const response = await fetch(apiuri);
        if(!response.ok){
            throw new ("Netowrk is not good!");
        }
        const data = await response.json();
        displayData(data);

    }catch(error){
        console.error("There is a problem to fetch the data, ", error);
    }

}

function displayData(data){

    const container = document.getElementById("country-container");

    container.innerHTML = " ";

    data.forEach(country => {

        const countryDiv = document.createElement("p");

        countryDiv.innerHTML = `
        <strong> ID: ${country.id}</strong>
        <p> Name: ${country.name}</p>
        <p> Capital: ${country.capital}</p>
        `;

        container.appendChild(countryDiv);
    });
}