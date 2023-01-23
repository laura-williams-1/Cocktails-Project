const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
const button = document.getElementById("lucky");
button.addEventListener("click", async () =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let drinkName = document.createElement("h3");
      let drinkImage = document.createElement("img");
      drinkName.innerHTML = data.drinks[0].strDrink;
      drinkImage.src = data.drinks[0].strDrinkThumb;

      // console.log(data.p);
      let randomSection = document.getElementById("random-drink-result");

      randomSection.append(drinkName, drinkImage);
      randomSection.prepend(button);

      for (let i = 1; i < 16; i++) {
        let drinkIng = document.createElement("p");
        drinkIng.innerHTML = data.drinks[0][`strIngredient${[i]}`];
        drinkIng.classList.add("ing");
        console.log(drinkIng);

        let drinkMes = document.createElement("p");
        drinkMes.innerHTML = data.drinks[0][`strMeasure${[i]}`];
        drinkMes.classList.add("mes");
        drinkIngAndMes = document.createElement("p");
        drinkIngAndMes.innerHTML = `${drinkMes.innerHTML}  ${drinkIng.innerHTML}`;
        randomSection.append(drinkIngAndMes);
        // randomSection.append(drinkIng);
      }
      let drinkIns = document.createElement("p");
      drinkIns.innerHTML = data.drinks[0].strInstructions;
      randomSection.append(drinkIns);
    })
);

// function luckyCocktail() {
//   fetch(url)
//     .then(function (response) {
//       response.json().then(function (data) {
//         console.log(data);
//         displayLuckDrink(data);
//       });
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }
// luckyCocktail();

// function displayLuckDrink(drink) {
//   console.log(drink.drinks[0].strDrink);

//   let randomSearch = document.querySelector("#test");
//   let drinkName = document.createElement("h3");
//   drinkName.innerHTML = drink.drinks[0].strDrink;
//   randomSearch.append(drinkName);
//   let drinkImage = document.createElement("img");
//   drinkImage.src = drink.drinks[0].strDrinkThumb;
//   randomSearch.append(drinkImage);
// // }
