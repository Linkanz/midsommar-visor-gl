export interface Song {
  title: string;
  lyrics: string[];
  difficulty: "Lätt" | "Medel" | "Svår";
  melody?: string;
  audioUrl?: string;
  wordTimings?: number[]; // Timing for each word in seconds
  duration?: number; // Total song duration in seconds
}

export const midsummerSongs: Song[] = [
  {
    title: "Helan Går",
    lyrics: [
      "Helan går",
      "Sjung hopp faderallan lallan lej",
      "Helan går",
      "Sjung hopp faderallan lej",
      "Och den som inte helan tar",
      "Han heller inte halvan får",
      "Helan går",
      "Sjung hopp faderallan lej"
    ],
    difficulty: "Lätt",
    melody: "Traditionell",
    duration: 20,
    wordTimings: [
      0.5, 1.5, // Helan går
      2.5, 3.0, 3.5, 4.0, 4.5, 5.5, // Sjung hopp faderallan lallan lej
      6.5, 7.5, // Helan går
      8.5, 9.0, 9.5, 10.0, 10.5, // Sjung hopp faderallan lej
      11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 14.5, // Och den som inte helan tar
      15.0, 15.5, 16.0, 16.5, 17.0, 17.5, // Han heller inte halvan får
      18.0, 18.5, // Helan går
      19.0, 19.5, 20.0, 20.5, 21.0 // Sjung hopp faderallan lej
    ]
  },
  {
    title: "Halvan Går",
    lyrics: [
      "Halvan går",
      "Sjung hopp faderallan lallan lej",
      "Halvan går",
      "Sjung hopp faderallan lej",
      "Och den som inte halvan tar",
      "Han heller inte tersen får",
      "Halvan går",
      "Sjung hopp faderallan lej"
    ],
    difficulty: "Lätt",
    melody: "Traditionell"
  },
  {
    title: "Tersen Går",
    lyrics: [
      "Tersen går",
      "Sjung hopp faderallan lallan lej",
      "Tersen går",
      "Sjung hopp faderallan lej",
      "Och den som inte tersen tar",
      "Han får gå till sängs utan mat",
      "Tersen går",
      "Sjung hopp faderallan lej"
    ],
    difficulty: "Lätt",
    melody: "Traditionell"
  },
  {
    title: "Aquavit",
    lyrics: [
      "Aquavit är bra för mig",
      "Aquavit är bra för dig",
      "Aquavit är bra för alla",
      "Låt oss därför sjunga",
      "Aquavit, aquavit",
      "Vi ska sjunga för dig",
      "Aquavit, aquavit",
      "Skål för Sverige!"
    ],
    difficulty: "Medel",
    melody: "O Tannenbaum"
  },
  {
    title: "Snapsvisan",
    lyrics: [
      "Nu ska vi sjunga snapsvisan",
      "Hej hej hej, hej hej hej",
      "Den allra bästa snapsvisan",
      "Som man kan få höra",
      "Skål för vänskap, skål för kärlek",
      "Skål för Sverige, vårt land",
      "Låt oss fira tillsammans",
      "Med snapsen i hand"
    ],
    difficulty: "Medel"
  },
  {
    title: "Lilla Karin",
    lyrics: [
      "Lilla Karin satt i trädgården",
      "Och sydde pärlor på band",
      "Så kom där en riddare ridande",
      "Från främmande land",
      "Vill du följa mig till dans?",
      "Vill du följa mig till dans?",
      "Lilla Karin satt i trädgården",
      "Med pärlorna i hand"
    ],
    difficulty: "Svår",
    melody: "Traditionell folkmelodi"
  },
  {
    title: "Sjung Hopp-Faderallan",
    lyrics: [
      "Sjung hopp-faderallan lej",
      "Så gå vi runt med glatt humör",
      "Sjung hopp-faderallan lej",
      "Och snapsen i vårt bröst det glöder",
      "Sjung hopp-faderallan lej",
      "Vi sjunger för vår svenska jord",
      "Sjung hopp-faderallan lej",
      "Och midsommarens alla fröjder"
    ],
    difficulty: "Medel"
  },
  {
    title: "Den Blomstertid Nu Kommer",
    lyrics: [
      "Den blomstertid nu kommer",
      "Med lust och fägring stor",
      "Du nalkas ljuva sommar",
      "Då gräs och gröda gror",
      "Hur härligt över jorden",
      "Sig himmelens blå grund",
      "Med ljusa molnens spegel",
      "I sjöns kristallklara rund"
    ],
    difficulty: "Svår",
    melody: "Traditionell psalm"
  },
  {
    title: "Skål för Midsommar",
    lyrics: [
      "Skål för midsommar, skål för sol",
      "Skål för blommor i full knol",
      "Skål för dansen kring stången",
      "Skål för sången",
      "Skål för alla som är här",
      "Skål för vänskap, kärleken så kär",
      "Midsommar vi firar tillsammans",
      "Skål för lyckan vi har!"
    ],
    difficulty: "Lätt"
  },
  {
    title: "Små Grodorna",
    lyrics: [
      "Små grodorna, små grodorna",
      "Är lustiga att se",
      "Små grodorna, små grodorna",
      "Är lustiga att se",
      "Ej öron, ej öron",
      "Ej svansar hava de",
      "Ej öron, ej öron",
      "Ej svansar hava de",
      "Kou ack ack ack",
      "Kou ack ack ack",
      "Kva kva kva!"
    ],
    difficulty: "Lätt",
    melody: "Traditionell dansmelodi"
  }
];