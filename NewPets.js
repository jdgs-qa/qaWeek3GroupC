//"id": 1,
    // "name": "Leo",
    //     "birthDate": "2010/09/07",
    //         "type": {
    //     "id": 1,
    //         "name
// for an id print off pet name, birthDate, type, 

// function displayPet(method, url, userData) {
    
//     makeRequest('GET', 'http://localhost:9966/petclinic/api/pets')
//         .then((value) => {
//             console.log("success");
//             //const data = JSON.parse(req.responseText);
//             for (key in value) {
//                 if (data === userData.owner.Id) {
//                      document.getElementById("name").value = key;

//                      console.log("name");
//                      console.log(key)
//                      break;
//                 }
//             }
//             console.log(value);
//         }).catch((error) => {
//             console.warn(error);
//         });
//     console.log(value); 
//     document.getElementById(value).innerText;

// }


function displayPet(method, url, userData) {
    console.log("Start");
const name = "Franklin";

    makeRequest('GET', 'http://localhost:9966/petclinic/api/pets')
        .then((value) => {
            console.log("success");
            //const data = JSON.parse(req.responseText);
            for (key in value) {
                if (name === userData.owner.Id) {
                    document.getElementById("name").value = key;
                    console.log("name");
                    console.log(key)
                    break;
                }
            }
            console.log(value);
            console.log("error")
        }).catch((error) => {
            console.warn(error);
        });
    console.log(value);
    document.getElementById(value).innerText;

    console.log("End");

}
