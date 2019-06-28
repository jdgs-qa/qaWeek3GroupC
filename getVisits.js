window.onload = getVisits(1);

function getVisits(petId) {
    getPetVisits()
    const petVisits = sessionStorage.getItem("petVisits");
    for (let i in petVisits) {
        if (petVisits[i].pet.id == petId) {
            return false;
        }
    }

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