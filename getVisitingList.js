window.onload = getVisits(7);

function getVisits(petId) {
    getPetVisits();
    const petVisit = JSON.parse(sessionStorage.getItem("data"));
    console.log("here it is:", petVisit);
    console.log("does this exist?", petVisit[1]);
    console.log("how about this?", petVisit[1].pet);
    console.log("and this?", petVisit[1].pet.id);
    for (let i in petVisit) {
        const visitNo = petVisit[i];
        if (visitNo.pet.id === petId) {
            sessionStorage.setItem("vId", i);
        }
    }

    const vNo = sessionStorage.getItem("vId");

    const date = document.getElementById("visitDate");
    date.innerText = "Date of Visit: " + petVisit[vNo].date;

    const reason = document.getElementById("visitReason");
    reason.innerText = "Reason for Visit: " + petVisit[vNo].description;

    const pet = document.getElementById("name");
    pet.innerText = "Pet Name:  " + petVisit[vNo].pet.name;
    return false;
}


function getPetVisits() {
    makeRequest('GET', 'http://localhost:9966/petclinic/api/visits/')
        .then((value) => {
            console.log("Visit details retrieved successfully!!", value);
            const petVisits = JSON.stringify(value);
            sessionStorage.setItem("data", petVisits);
        }).catch((error) => {
            console.warn("It definitely didnt work... :(", error);
        });
    return false;
}
