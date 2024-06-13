

async function currencyData(){

    const api =`https://freetestapi.com/api/v1/currencies`;

    try{
        const response = await fetch(api);

        if(!response.ok){

            throw new ("Network is not good");

        }
        const data = await response.json();

        displayData(data);

    } catch(error){
        console.error("There is a error to fetch the data, ", error);
    }

}

function displayData(data){

    const container = document.getElementById("currency-container");

    container.innerHTML = " ";

    // you can find more data (easy to create more variable) information by this api, https://freetestapi.com/api/v1/currencies

    data.forEach(currency =>{
        const currencydiv = document.createElement("p");
        currencydiv.innerHTML = `
        <p> ID: ${currency.id}</p>
        <p> Name: ${currency.name}</p>
        `;

        container.appendChild(currencydiv);
    });

}