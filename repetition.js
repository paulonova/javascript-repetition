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

// Ändra på ett värde
weekdays[2] = "Lillördag";

// Hämta ur vår array på följande sätt
// Skriva ut första veckodagen
console.log("Exempel 1. Första veckodagen " + weekdays[0]);

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
console.log("Exempel 6: " + favoriteThings);

// Hur loopar man igenom en array?

// Exempel 7: Klassisk for-loop
console.log("Exempel 7");
for (var i = 0; i < weekdays.length; i++) {
    console.log("Index " + i + ": " + weekdays[i]);
}

 
// Exempel 9: For-each i Java motsvaras av for-of i JavaScript
console.log("Exempel 9");
var txt = "";
for(var day of weekdays) {
    txt += day + ", ";
}
console.log(txt);
 
// Exempel 10
// for-in hämtar indexen i en array
// ...men inte index som motsvarar värdet undefined
console.log("Exempel 10");
for(var monthIndex in months) {
    console.log("Index i array months: " + monthIndex);
}

// Sammanfattning: En samling saker (kan vara av olika typer) som vi kommer åt genom ett index (sakens position, ett heltal)

/*
  Object
*/

// En sak med egenskaper

// Exempel 7
// Skapa ett objekt i JavaScript (metod 1)
var car = {color: "ful", hasAWheel: true, numberOfSeats: 4};
// Ett objekt består av egenskaper, varje egenskap består av ett attribut (key) och ett värde (value)
// color är attribut/key
// "ful" är värdet

// Annat exempel
var computer = {color: "gray", brand: "Mac"};

// Metod 2
var student = {};
student.name = "Anton";
student.favoriteTeam = "AIK";

// Metod 3
var anotherStudent = {};
anotherStudent["name"] = "Oskar";
anotherStudent["favoriteTeam"] = "HIF";

// Hur hämtar vi något från ett objekt?
console.log("Den första studenten heter " + student.name); // Punktnotation (dot syntax)
console.log("Den andra studenten heter " + anotherStudent["name"]);


// Objekt i arrayer
var students = [student, anotherStudent];
// Hämta namnet på första studenten i arrayen
console.log("Första studenten i array: " + students[0].name);
console.log("Andra studenten i array: " + students[1]["name"]);

// Array i array
var favoriteGames = [["Super Mario Bros 1", "Duck Hunt"], ["Wii Sports Resort", "Zelda Twilight Princess"]];
// Skriva ut första spelet i första listan
console.log("Andra spelet i första listan: " + favoriteGames[0][1]);

// Array i objekt
var superMario64 = {title: "Super Mario 64", countries: ["Sverige", "USA"], characters: ["Mario", "Toad", "Peach"]};
// Hämta första karaktären
console.log("Första karaktären är " + superMario64.characters[0]);
console.log("Andra landet är " + superMario64["countries"][1]);

// Objekt i objekt
var psg = {name: "PSG", playedInChampionsLeague: true, founded: "1951"};

var soccerPlayer = {name: "Zlatan", originalClub: {name: "Malmö FF", playedInChampionsLeague: true, founded: 1901}, currentClub: psg};
console.log("Året då Zlatans originalklubb startades " + soccerPlayer.originalClub.founded);
console.log("Zlatans originalklubb heter  " + soccerPlayer["originalClub"]["name"]);


