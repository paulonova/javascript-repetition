// JavaScript

/*
  Array
*/

// En array är...
// Ett ställe där man lagrar...
// En samling med saker
// En lista

// Exempel 1
// En första array (metod 1)
// Vi initierar en array (berättar vad som finns i den samtidigt som den skapas)
var weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

// Hämta ur vår array på följande sätt
// Skriva ut första veckodagen
console.log("Exempel 1. Första veckodagen " + weekdays[0]);

// Spara i en variabel
var favoriteDay = weekdays[4];

// Spara i en variabel
var favoriteDay = weekdays[4];
console.log("Exempel 1. Favoritdagen är " + favoriteDay);

// Exempel 2
// Skapa en array (metod 2)
var months = [];
months[0] = "Januari";
months[1] = "Februari";
months[2] = "Mars";
months[3] = "April";
months[4] = "Maj";
months[5] = "Juni";
months[6] = "Juli";
months[7] = "Augusti";
months[8] = "September";
months[9] = "Oktober";
months[10] = "November";
months[11] = "December";


// Exempel 3
// En array kan innehålla flera olika typer (till skillnad från Java)
var favoriteThings = [1997, "Lylat Wars 64", true, "IT", 3.141592651798]; // innehåller en int, String, boolean, double

// Exempel 4
// Hur mycket finns det i en array?
console.log("Exempel 4: Jag har " + favoriteThings.length + " favoritsaker!");

// Exempel 5
// Lägg något på slutet av en array
favoriteThings.push("Teaching");

// Exempel 6
// Visa en array
console.log(favoriteThings);


