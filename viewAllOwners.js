function makeRequest(method, url, body) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            console.log("Req: ", req);
            if (req.status >= 200 && req.status <= 299) {
                resolve(JSON.parse(req.responseText));
            } else {
                reject('Error!: ' + req.responseText);
            }
        };
        req.open(method, url);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(body);
    });
}


function viewOwners() {
    makeRequest("GET", "http://localhost:9966/petclinic/api/owners")
        .then((value) => {
            const data = value;
            const parent = document.getElementById("details");
            console.log(data);
            for (d of data) {
                console.log(d);

                if ((d instanceof Object)) {
                    const wrapperEl = document.createElement("div");
                    const ownerId ={}
                    ownerId["id"]= d["id"];
                    const hEl = document.createElement("h1");
                    hEl.innerText = d["id"];
                    hEl.className = "badge badge-pill badge-danger";
                    wrapperEl.append(hEl);
                    const pEl = document.createElement("p");
                    pEl.innerText = d["firstName"];
                    pEl.className = "btn btn-primary ";
                    pEl.onclick = function () {
                        // sessionStorage.clear();
                    const dataString = JSON.stringify(ownerId);
                    console.log(dataString);
                    sessionStorage.setItem("userData", dataString);
                    window.location = "NewPets.html";
                    };
                    wrapperEl.append(pEl)
                    parent.append(wrapperEl);
                    parent.append(wrapperEl);
                    
                } 
            }

        }).catch((error) => {
            console.warn(error);
        });


    console.log(value);
}