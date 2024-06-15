

async function studentData(){

    const studentID = document.getElementById("studentid").value; // input tag's id

    const dataDiv = document.getElementById("student-container");

    // if loop condition will be check the user input number is valid or not, if user enter invalid number, user get that information.
    if(!studentID){
        dataDiv.innerHTML = "Please enter a valid ID";
        return;
    }

    const apiURI = `https://freetestapi.com/api/v1/students/${studentID}`;

    try{

        const response = await fetch(apiURI);

        if(!response.ok){
            throw new Error(`Error fetching data: ${response.statusText}`)
        }

        const data = await response.json();

        displayData(data);
    } catch(error){
        dataDiv.innerHTML = `Error: ${error.message}`;
    }
}

function displayData(data){

    const dataDiv = document.getElementById("student-container");

    if(data && data.id){

        dataDiv.innerHTML = `
            <h2>Student Data</h2>
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Age:</strong> ${data.age}</p>
        `;
    } else {
        dataDiv.innerHTML = 'No found data for this id!';
    }
}