

async function myMoviesData(){

    const apiURL = `https://freetestapi.com/api/v1/movies`;

    try{
        const response = await fetch(apiURL);

        if(!response.ok){

            throw new ("Network is not good");

        }
        const data =await response.json();
        displayData(data);

    } catch(error){
        console.error("There is a problem to fetching the data, ",error);
    }

}

function displayData(data){

    const container = document.getElementById("movies-container");

    container.innerHTML = " ";

    data.forEach(movies => {

        const movieDiv = document.createElement("p");

        movieDiv.innerHTML = `

        <Strong> ID: ${movies.id} </Strong>
        <p> Title: ${movies.title} </p>
        <p> Year: ${movies.year} </p>
        <p> Rating: ${movies.rating} </p>
        `;
        container.appendChild(movieDiv);

    });
}