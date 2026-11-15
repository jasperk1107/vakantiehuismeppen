/*
  Reviews van gasten. Het blok "Wat gasten zeggen" staat alleen online als hier minstens één review in staat.
  Zet er alleen echte reviews in, met toestemming van de gast of overgenomen van Google of Airbnb.

  Zo ziet één review eruit (plaats en datum mogen weg):
  { naam: "Annemiek", plaats: "Zwolle", datum: "oktober 2026", sterren: 5, bron: "Google",
    tekst: "Wat de gast schreef." }
*/
window.REVIEWS = [
  { naam: "Sanne & Mark", sterren: 5, bron: "Google",
    tekst: "Wat een heerlijk plekje om even helemaal tot rust te komen! Bij aankomst werden we super hartelijk ontvangen door Marja en Peter, waardoor we ons meteen thuis voelden. Het huisje is ontzettend sfeervol, brandschoon en heeft een heerlijk bed. ’s Ochtends met een kop koffie op het terras zitten terwijl je alleen maar vogeltjes hoort, voelt echt als een mini-vakantie. Echt een aanrader!" },
  { naam: "Hendrik", sterren: 5, bron: "Google",
    tekst: "Wij hebben hier een lang weekend gezeten om te fietsen en te wandelen in de omgeving, en daar is Even naar Meppen de perfecte uitvalsbasis voor. Meppen zelf is een prachtig, authentiek Drents dorpje en je loopt zo de bossen in of richting het Mantingerveld. Het verblijf heeft een fijne eigen woonkamer met een goede bank en prima douche. Wij komen zeker nog eens terug!" },
  { naam: "Marloes", sterren: 5, bron: "Google",
    tekst: "Jammer genoeg waren we er maar één nachtje, want we hadden hier makkelijk een paar dagen langer willen blijven. De communicatie vooraf verliep heel soepel en het welkom was enorm gastvrij. Het verblijf ziet eruit om door een ringetje te halen, met verse bloemen op tafel en uitzicht op het groen. Alles wat je nodig hebt voor een ontspannen nacht weg is aanwezig. Dank aan Marja en Peter voor de goede zorgen!" }
];

/*
  De score die boven de reviews en boven de titel staat.
  Maak hem leeg ("") en de pagina rekent zelf het gemiddelde uit van de reviews hierboven,
  met het aantal reviews erachter.
*/
window.REVIEWS_SCORE = "4,86";
