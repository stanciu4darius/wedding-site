const base = import.meta.env.BASE_URL

export const weddingData = {
  couple: {
    groom: "Darius",
    bride: "Iazmina"
  },

  eventDate: "2026-06-27T12:00:00",

  hero: {
    subtitle: "Cronica iubirii",
    title: "Darius & Iazmina",
    dateLabel: "27 Iunie 2026",
    locationLabel: "Beclean, Bistrița-Năsăud",
    heroImages: [
      `${base}images/hero1.jpeg`,
      "public/images/hero2.jpeg",
      "public/images/hero3.jpeg",
      "public/images/hero4.jpeg",
      "public/images/hero5.jpeg",
    ]
  },

  intro: {
    verse: "„Așa că nu mai sunt doi, ci sunt un singur trup”",
    verseRef: "",
    invitationText:
      "Vă invităm cu drag să fiți alături de noi la celebrarea căsătoriei noastre, într-o zi pe care ne-o dorim elegantă, luminoasă și plină de bucurie."
  },

  schedule: [
    {
      time: "07:00",
      title: "Plecarea de la casa mirelui",
      place: "",
      icon: "public/images/mirele_acasa_la_el.png"
    },
    {
      time: "09:00",
      title: "Mirele ajunge la mireasă",
      place: "",
      icon: "public/images/mireasa_singura.png"
    },
    {
      time: "09:30",
      title: "Plecarea în Beclean",
      place: "",
      icon: "public/images/Drum_spre_Beclean.png"
    },
    {
      time: "11:30",
      title: "Starea civilă",
      place: "",
      icon: "public/images/starea_civila.png"
    },
    {
      time: "12:00",
      title: "Cununia religioasă",
      place: "Biserica Creștină Penticostală „Sfânta Treime”",
      icon: "public/images/biserica.png"
    },
    {
      time: "15:00",
      title: "Masa festivă",
      place: "Villa Franca",
      icon: "public/images/masa_festiva.png"
    }
  ],

  story: {
    title: "Povestea lor de dragoste",
    mainText:
      "Totul a început într-o zi de duminică, în clipa în care Darius a hotărât să îi scrie Iazminei. O poveste începută modern, printr-un răspuns la un story, dar care a continuat într-un mod clasic, cu o primă întâlnire la doar câteva zile distanță. Dragostea dintre cei doi a fost instantanee. Amândoi au simțit că ceea ce se năștea între ei era exact ceea ce căutau de multă vreme: binecuvântarea pe care o cereau amândoi de la Dumnezeu. Pentru Darius, această binecuvântare poartă numele Iazmina, iar pentru Iazmina, numele Darius. Iubirea lor s-a construit frumos și a crescut repede, iar după doar trei luni și câteva zile, într-un cadru minunat, s-au logodit. Iazmina ar spune despre acel moment că nici măcar tot ce și-a imaginat din copilărie nu putea atinge perfecțiunea clipei trăite, iar Darius ar spune că zâmbetul ei, fericirea ei și vremea binecuvântată de Dumnezeu au făcut totul desăvârșit. Așa au ajuns aici, la ziua nunții lor, în care dragostea dintre ei își va găsi împlinirea. Și toate acestea I se datorează Celui pe care Îl iubesc și Îl slujesc: Dumnezeu.",
    funnyFacts: [
      "Darius i-a scris Iazminei de două ori, nu din prea multă insistență, ci pentru că primul mesaj s-a pierdut, în mod misterios, pe drum.",
      "Prima lor întâlnire a avut un farmec aparte: romantică într-un stil modern, cu o priveliște frumoasă, în mașină, cu o înghețată de la McDonald’s.",
      "După doar 12 zile, Darius a știut că nu mai are rost să aștepte și a cerut-o pe Iazmina să îi fie iubită.",
      "Darius a rămas fără baterie la mașină de două ori în timp ce ieșea cu Iazmina — semn clar că dragostea consumă multă energie.",
      "În ziua cererii în căsătorie, Darius a rugat-o pe Iazmina să afle ce mărime poartă la degetul inelar, fără ca ea să bănuiască faptul că inelul fusese deja cumpărat."
    ],
    timeline: [
      {
        date: "7 Iulie 2025",
        title: "Prima întâlnire",
        description: "O întâlnire cu farmec aparte, romantică într-un stil modern."
      },
      {
        date: "15 Iulie 2025",
        title: "Într-o relație",
        description: "După doar 12 zile, Darius a știut că nu mai are rost să aștepte."
      },
      {
        date: "6 Noiembrie 2025",
        title: "Logodna",
        description: "Un moment pregătit cu multă emoție, trăit exact așa cum trebuia să fie."
      }
    ],
    numbers: [
      {
        value: "346",
        label: "Zile de când suntem împreună"
      },
      {
        value: "233",
        label: "Zile de când suntem logodiți"
      },
      {
        value: "6",
        label: "Rochii probate"
      },
      {
        value: "∞",
        label: "Seturi de verighete mai târziu..."
      }
    ]
  },

  locations: {
    ceremony: {
      title: "Cununia religioasă",
      time: "12:00",
      place: "Biserica Creștină Penticostală „Sfânta Treime”",
      address: "Str. Șieului, nr. 9A, Beclean",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=Biserica+Penticostala+Sfanta+Treime+Beclean"
    },
    reception: {
      title: "Masa festivă",
      time: "15:00",
      place: "Villa Franca",
      address: "Str. Calea Dejului, nr. 18, Beclean",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=Villa+Franca+Beclean"
    }
  },

  dressCode: {
    title: "Dress Code sugerat",
    text: "Mirii s-ar bucura dacă ați alege ținute în paleta cromatică a nunții. Este un dress code sugerat, nu obligatoriu.",
    image: "public/images/Dresscode_sugestie.png"
  },

  gallery: [
    "public/images/couple-1.jpeg",
    "public/images/couple-2.jpeg",
    "public/images/couple-3.jpeg",
    "public/images/couple-4.jpeg",
    "public/images/gallery-1.jpeg",
    "public/images/couple-5.jpeg"
  ],

  uploadPhotos: {
    title: "Albumul invitaților",
    text: "Mirii au pregătit un album unde puteți încărca fotografii și clipuri surprinse la nunta noastră. Ne-am bucura enorm să păstrăm și perspectiva voastră asupra acestei zile.",
    link: "https://photos.app.goo.gl/fdzhFX3KF1XPdTob9",
    buttonText: "Încarcă poze și video"
  },

  rsvp: {
    groomName: "Stanciu Darius",
    groomPhone: "40752112898",
    brideName: "Iazmina Lăuran",
    bridePhone: "40753524966",
    deadline: "Vă rugăm să confirmați prezența cât mai curând."
  }
}