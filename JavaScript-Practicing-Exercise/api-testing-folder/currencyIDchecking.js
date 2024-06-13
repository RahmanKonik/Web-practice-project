

async function currencyData(){

    const currencyId = document.getElementById('currencyID').value;

    const dataDiv = document.getElementById('currency-container');

    if(!currencyId){
        dataDiv.innerHTML = "Please enter a valid ID.";
        return;
    }

    const apiURL = `https://freetestapi.com/api/v1/currencies/${currencyId}`;

    try{
        const response = await fetch(apiURL);

        if(!response.ok){
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();

        displayData(data);

    }catch(error){
        dataDiv.innerHTML = `Error: ${error.message}`;

    }

}


function displayData(data){

    const dataDiv = document.getElementById("currency-container");

    if (data && data.id) {
        dataDiv.innerHTML = `
            <h2>Currency Data</h2>
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Symbol:</strong> ${data.symbol}</p>
            <p><strong>Country:</strong> ${data.country}</p>
        `;
    } else {
        dataDiv.innerHTML = 'No data found for the given ID.';
    }
}