window.onload = getVisits(1);

function getVisits(petId) {
    getPetVisits()
    const petVisits = sessionStorage.getItem("petVisits");
    for (let i of petVisits) {
        let visitNo = petVisits[i];
        if (visitNo.pet.id == petId) {
            let y = i;
        }
    }
    const date = document.getElementById("visitDate");
    date.innerText = "Date of Visit: " + petVisits[y].date;

    const reason = document.getElementById("visitReason");
    reason.innerText = "Reason for Visit: " + petVisits[y].description;
}

function getPetVisits() {
    makeRequest('GET', 'http://localhost:9966/petclinic/api/visits/')
        .then((value) => {
            console.log("Visit details retrieved successfully!!", value);
            const petVisits = value;
            sessionStorage.setItem('petVisits', petVisits);
        }).catch((error) => {
            console.warn("It definitely didnt work... :(", error);
            console.log("It definitely didnt work... :(", error);
        });
    return;
}