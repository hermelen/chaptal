$(document).ready(function() {
    console.log( "ready!" );
    for (let index = 0; index < pupils.length; index++) {
        var totalNotes = 0
        for (let indexBis = 0; indexBis < pupils[index].rates.length; indexBis++) {
            totalNotes += pupils[index].rates[indexBis];
        }
        var average = totalNotes / pupils[index].rates.length;
        var random = pupils[index].picture.toString();
        if (random.length !== 3) {
            console.log('too short');
            for (let indexTer = 0; indexTer < (3 - random.length); indexTer++) {
                random = "0" + random
            }
        }
        $(".pupils").append(
        `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${random}.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${pupils[index].name}</h5>
                    <p class="card-text">Age : ${pupils[index].age}</p>
                    <p class="card-text">Moyenne : ${average}</p>
                    <a target="_blank" href="https://fr-fr.facebook.com/pages/category/High-School/Lyc%C3%A9e-Chaptal-Mende-1957123361195357/" class="btn btn-primary">${pupils[index].name} Profile</a>
                </div>
            </div>
            `
        );
        $(".nav").append(
            `<li>${pupils[index].name}</li>`
        )     
    }
    // console.log(Math.floor(Math.random() * 890) + 1)
});