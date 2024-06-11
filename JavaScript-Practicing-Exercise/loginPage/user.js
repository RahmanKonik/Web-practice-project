
async function myUserData(){

    // api variable with api

    const apiURL = `https://freetestapi.com/api/v1/users`;

    // try... handling property

    try{
        const response = await fetch(apiURL);
        if(!response.ok){
            throw new ("Network problem");
        }
        const data = await response.json();

        displayData(data);
    } catch (error){
        console.error("There is a problem to fetching the data,", error);
    }

}

function displayData(data){
    const container = document.getElementById("container-data");

    container.innerHTML = " ";

    data.forEach(users =>{

        const userdiv = document.createElement("div");

        userdiv.innerHTML = `

        <h2> Id: ${users.id}</h2>
        <p> Name: ${users.name}</p>
        <p> Age: ${users.age}</p>
        <p> UserName: ${users.username}</p>
        <p> Occupation: ${users.occupation}</p>
        `;
        container.appendChild(userdiv);

    });

}