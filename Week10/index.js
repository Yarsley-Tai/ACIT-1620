/*let scoops = 5;
while (scoops > 0) {
  document.write("Another scoop! <br>");
  if (scoops < 3) {
    alert("Ice cream is running low!");
  } else if (scoops >= 5) {
    alert("Eat faster, the ice cream is going to melt!");
  }
  scoops = scoops - 1;
}
document.write("Life without ice cream isn't the same");
*/
let location1 = Math.floor(Math.random() * 5);
let location2 = location1 + 1;
let location3 = location1 + 2;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire!(Enter a number from 0-6:");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("Miss!");
    }
  }
}
let stats =
  "You took " +
  guesses +
  " guesses to sink my battleship, " +
  " which means your shooting accuracy was " +
  (3 / guesses) * 100 +
  "%";
alert(stats);
