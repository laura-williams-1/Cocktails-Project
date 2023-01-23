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
      let drinkInsuctions = document.createElement("p");
      let drinkIng = document.createElement("p");
      let drinkMes = document.createElement("p");

      // let currentDrink = data.dinks[0];

      // for (let i of currentDrink) {
      // }

      let randomSection = document.getElementById("random-drink-result");

      randomSection.append(drinkName, drinkImage);
      randomSection.prepend(button);
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
