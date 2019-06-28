
//function displayPet() {
    const name = "Franklin";
    const user = sessionStorage.getItem("userData");
    const userData = JSON.parse(user);
    makeRequest('GET', 'http://localhost:9966/petclinic/api/pets')
    .then((value) => {
        const parent = document.getElementById("name")
        console.log(value);
        console.log(userData);

            for (key of value) {
                console.log(key);
                console.log(key["owner"]["id"]);
                
                if (key["owner"]["id"] == userData["id"]) {
                    
                    // document.getElementById("catname").innerText = key["name"];
                    const wrapperEl = document.createElement("p");
                    wrapperEl.innerText = key["name"];
                    parent.append(wrapperEl);
                    console.log(key["owner"]["id"]);
                    console.log(userData["id"]);
                }

            }
          
        }).catch((error) => {
            console.warn(error);
        });
    

// }
