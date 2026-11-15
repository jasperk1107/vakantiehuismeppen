/*
  Instellingen van de boekingskalender.
  Pas dit bestand aan en zet het online, dan verandert de kalender mee.
*/
window.BOEKING = {
  // Standaardprijs per nacht, in euro's.
  prijsPerNacht: 119,

  // Afwijkende prijs voor een losse nacht. De datum is de dag van de avond waarop je slaapt.
  // Voorbeeld: { "2026-12-24": 149, "2026-12-25": 149 }
  prijsPerDatum: {},

  // Bezette periodes: [aankomstdag, vertrekdag]. De vertrekdag zelf blijft boekbaar als nieuwe aankomst.
  // Voorbeeld: [["2026-12-01", "2026-12-05"], ["2027-01-10", "2027-01-12"]]
  bezet: [],

  // Kleinste aantal nachten dat iemand kan kiezen.
  minNachten: 1,

  // Hoe ver vooruit de kalender open staat, in maanden.
  maandenVooruit: 12,

  // Waar een aanvraag heen gaat.
  // Leeg endpoint = de aanvraag opent als kant-en-klaar bericht in WhatsApp naar onderstaand nummer.
  // Met endpoint (een formulierdienst die JSON aanneemt) wordt de aanvraag op de pagina zelf verstuurd.
  endpoint: "",
  whatsapp: "31622561676",
  telefoon: "06 22561676"
};
