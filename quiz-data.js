// ===================================
  // QUIZ-DATENBANK
  // ===================================
  const quizDaten = {
    'info1': {
        titel: "Info-Grundlagen Check",
        fragen: [
        { 
            frage: "Woraus besteht ein 'Bit', die kleinste digitale Information?",
            optionen: ["Aus einer 1 oder einer 0", "Aus Buchstaben", "Aus einem Pixel", "Aus Strom"],
            antwort: 0 // Die erste Option (Index 0) ist richtig
        },
        { 
            frage: "Was ist der Unterschied zwischen Hardware & Software?",
            optionen: ["Hardware ist schnell, Software ist langsam", "Hardware kann man anfassen (z.B. Monitor), Software nicht (z.B. App)", "Hardware ist der Code, Software ist das Programm"],
            antwort: 1 
        },
        { 
            frage: "Was macht ein 'Algorithmus'?",
            optionen: ["Er speichert Daten", "Er verschlüsselt Passwörter", "Er ist eine Schritt-für-Schritt-Anleitung, um ein Problem zu lösen"],
            antwort: 2
        }
        ]
    },
    'oose': {
      titel: "OOSE Einsteiger-Check",
      fragen: [
        { 
          frage: "Was ist eine 'Klasse' in der OOSE am besten beschrieben?",
          optionen: ["Ein spezifisches Objekt (z.B. dein Fahrrad)", "Ein Bauplan oder eine Schablone (z.B. der Bauplan eines Fahrrads)", "Eine Funktion im Code", "Eine Variable"],
          antwort: 1 // Das zweite Element (Index 1) ist richtig
        },
        { 
          frage: "Was ist ein 'Objekt'?",
          optionen: ["Ein Synonym für 'Variable'", "Der Code in der Klassendatei", "Eine konkrete Ausprägung einer Klasse (z.B. 'Mein Hund Bello')", "Der Oberbegriff für alle Lebewesen"],
          antwort: 2
        },
        { 
          frage: "Die Klasse 'Auto' hat die Fähigkeit 'hupen()'. Wie nennt man diese Fähigkeit?",
          optionen: ["Attribut", "Methode", "Vererbung", "Instanz"],
          antwort: 1
        },
        { 
          frage: "Was versteht man unter 'Vererbung'?",
          optionen: ["Eine Klasse gibt ihre Eigenschaften an eine Unterklasse weiter", "Ein Objekt schickt Daten an ein anderes", "Das Erstellen eines neuen Objekts", "Das Kapseln von Daten"],
          antwort: 0
        }
      ]
    },

    'einfWI': {
        titel: "Check: Einführung WI",
        fragen: [
            { 
            frage: "Was ist die Hauptaufgabe der Wirtschaftsinformatik?",
            optionen: ["Nur Programmieren", "Die Brücke zwischen BWL und Informatik zu bilden", "Nur BWL-Theorien lernen"],
            antwort: 1
            },
            { 
            frage: "Was ist ein 'Informationssystem'?",
            optionen: ["Ein Computer-Netzwerk", "Ein System, das Daten sammelt, speichert und verarbeitet, um Menschen zu unterstützen", "Eine Datenbank"],
            antwort: 1
            },
            { 
            frage: "Wofür steht 'ERP'?",
            optionen: ["Enterprise Resource Planning (z.B. SAP)", "Enhanced-Routing-Protocol", "Effective-Response-Programming"],
            antwort: 0
            }
        ]
    },
    
    // Platzhalter für das Mathe-Quiz
    'ds': {
    titel: "Check: Diskrete Strukturen",
    fragen: [
        { 
        frage: "Womit beschäftigt sich die 'Mengenlehre'?",
        optionen: ["Mit sehr viel Geld", "Mit der Unendlichkeit", "Mit der Zusammenfassung von Objekten (z.B. A ∪ B)"],
        antwort: 2
        },
        { 
        frage: "Was ist 'Aussagenlogik'?",
        optionen: ["Die Kunst, gut zu argumentieren", "Das Rechnen mit 'wahr' und 'falsch' (z.B. AND, OR, NOT)", "Eine Programmiersprache"],
        antwort: 1
        },
        { 
        frage: "Was ist ein 'Graph' in der Graphentheorie?",
        optionen: ["Ein Diagramm (z.B. Balkendiagramm)", "Ein Netzwerk aus Knoten und Kanten (z.B. wie Straßenkarten)", "Eine komplizierte Zeichnung"],
        antwort: 1
        }
    ]
    },

    
    //==================================
// SEMESTER 2
//==================================
'pmt': {
  titel: "Check: Programmiermethoden",
  fragen: [
    { 
      frage: "Was ist 'Clean Code'?",
      optionen: ["Code, der Viren entfernt", "Ein Programmierstil, der Code lesbar und wartbar macht", "Code ohne Kommentare"],
      antwort: 1
    },
    { 
      frage: "Was ist ein 'Design Pattern' (Entwurfsmuster)?",
      optionen: ["Ein schönes Layout für eine App", "Eine wiederverwendbare Lösung für ein bekanntes Software-Problem", "Ein Fehler im Code"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Refactoring'?",
      optionen: ["Code neu schreiben, ohne seine Funktion zu ändern, um ihn zu verbessern", "Eine neue Funktion hinzufügen", "Den Code löschen"],
      antwort: 0
    }
  ]
},

'db': {
  titel: "Check: Datenbanken",
  fragen: [
    { 
      frage: "Wofür steht 'SQL'?",
      optionen: ["Simple Query Logic", "Structured Query Language (Sprache zur Abfrage von Datenbanken)", "Software Quality Language"],
      antwort: 1
    },
    { 
      frage: "Was ist ein 'Primary Key' (Primärschlüssel)?",
      optionen: ["Ein Passwort für die Datenbank", "Ein Feld, das einen Datensatz eindeutig identifiziert (z.B. Matrikelnummer)", "Der erste Eintrag in einer Tabelle"],
      antwort: 1
    },
    { 
      frage: "Was macht ein 'JOIN'-Befehl in SQL?",
      optionen: ["Er fügt neue Daten hinzu", "Er löscht Daten", "Er kombiniert Daten aus zwei oder mehr Tabellen"],
      antwort: 2
    }
  ]
},

'gpm': {
  titel: "Check: Geschäftsprozesse",
  fragen: [
    { 
      frage: "Was ist ein 'Geschäftsprozess'?",
      optionen: ["Ein Gespräch mit dem Chef", "Eine Abfolge von Schritten, um ein Ziel zu erreichen (z.B. 'Bestellung bearbeiten')", "Die Bilanz-Pressekonferenz"],
      antwort: 1
    },
    { 
      frage: "Womit visualisiert man Prozesse oft?",
      optionen: ["Mit Texten", "Mit EPKs (Ereignisgesteuerte Prozessketten) oder BPMN", "Mit Excel-Tabellen"],
      antwort: 1
    },
    { 
      frage: "Was ist das Ziel von 'Prozessoptimierung'?",
      optionen: ["Prozesse komplizierter machen", "Prozesse schneller, günstiger oder besser zu machen", "Mitarbeiter zu entlassen"],
      antwort: 1
    }
  ]
},

'rewe': {
  titel: "Check: Rechnungswesen",
  fragen: [
    { 
      frage: "Was ist der wichtigste Buchungssatz?",
      optionen: ["Soll an Haben", "Mehr ist besser", "Immer im Plus bleiben"],
      antwort: 0
    },
    { 
      frage: "Was gehört auf die 'Aktivseite' einer Bilanz?",
      optionen: ["Das Kapital (woher das Geld kommt)", "Das Vermögen (wofür das Geld verwendet wurde, z.B. LKW, Gebäude)", "Die Schulden"],
      antwort: 1
    },
    { 
      frage: "Was ist die 'GuV' (Gewinn- und Verlustrechnung)?",
      optionen: ["Eine Bilanz", "Eine Rechnung, die Aufwand und Ertrag eines Jahres gegenüberstellt", "Eine Steuererklärung"],
      antwort: 1
    }
  ]
},

'mathe': {
  titel: "Check: Wirtschaftsmathematik",
  fragen: [
    { 
      frage: "Wofür braucht man 'Lineare Optimierung'?",
      optionen: ["Um Geraden zu zeichnen", "Um das Maximum oder Minimum zu finden (z.B. 'Maximiere den Gewinn')", "Um Zinsen zu berechnen"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Zinseszins'?",
      optionen: ["Eine Steuer auf Zinsen", "Zinsen, die man auf bereits erhaltene Zinsen bekommt", "Eine Strafe der Bank"],
      antwort: 1
    },
    { 
      frage: "Womit beschäftigt sich die 'Finanzmathematik'?",
      optionen: ["Nur mit Addition", "Mit der Berechnung von Renten, Krediten und Investitionen", "Mit Geometrie"],
      antwort: 2
    }
  ]
},

//==================================
// SEMESTER 3
//==================================
'ads': {
  titel: "Check: Algorithmen & Datenstrukturen",
  fragen: [
    { 
      frage: "Was ist eine 'Datenstruktur'?",
      optionen: ["Eine Datenbank", "Eine Art, Daten zu speichern und zu organisieren (z.B. Liste, Baum, Stack)", "Ein Algorithmus"],
      antwort: 1
    },
    { 
      frage: "Was misst die 'O-Notation' (z.B. O(n))?",
      optionen: ["Wie schnell ein Computer ist", "Die Komplexität/Laufzeit eines Algorithmus, wenn die Datenmenge (n) wächst", "Wie viel Speicher ein Programm braucht"],
      antwort: 1
    },
    { 
      frage: "Was ist ein 'Sortieralgorithmus' (z.B. Bubble Sort)?",
      optionen: ["Ein Programm, das aufräumt", "Ein Algorithmus, der eine unsortierte Liste in eine sortierte Reihenfolge bringt", "Ein Virus"],
      antwort: 1
    }
  ]
},

'swt': {
  titel: "Check: Softwaretechnik",
  fragen: [
    { 
      frage: "Was ist das 'Wasserfallmodell'?",
      optionen: ["Ein agiles Modell", "Ein starres Phasenmodell (Planung -> Design -> Code -> Test)", "Ein Werkzeug zum Testen"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Agile Entwicklung' (z.B. Scrum)?",
      optionen: ["Entwickeln ohne Plan", "Ein flexibles Vorgehen in kurzen Zyklen ('Sprints') mit viel Feedback", "Ein Programmierstil"],
      antwort: 1
    },
    { 
      frage: "Wofür steht 'UML'?",
      optionen: ["Unified Modeling Language (Standard zur Visualisierung von Software)", "Universal Main Loop", "User-Mode-Linux"],
      antwort: 0
    }
  ]
},

'bis': {
  titel: "Check: Betriebl. Informationssysteme",
  fragen: [
    { 
      frage: "Was ist ein 'ERP-System' (z.B. SAP)?",
      optionen: ["Ein Textverarbeitungsprogramm", "Eine zentrale Software, die alle Bereiche eines Unternehmens (Lager, HR, Finanzen) steuert", "Eine Webseite"],
      antwort: 1
    },
    { 
      frage: "Wofür steht 'CRM'?",
      optionen: ["Customer Relationship Management (Kundenbeziehungs-Software)", "Code-Revision-Management", "Company-Resource-Module"],
      antwort: 0
    },
    { 
      frage: "Was ist ein 'Data Warehouse'?",
      optionen: ["Ein Lager für Festplatten", "Eine große Datenbank, die Daten aus vielen Quellen für Analysen sammelt", "Ein Cloud-Speicher für Fotos"],
      antwort: 1
    }
  ]
},

'inno': {
  titel: "Check: Innovationsmanagement",
  fragen: [
    { 
      frage: "Was ist eine 'Innovation' (im Ggs. zur 'Erfindung')?",
      optionen: ["Eine Idee, die es noch nie gab", "Eine Erfindung, die erfolgreich am Markt eingeführt wurde", "Ein Patent"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Design Thinking'?",
      optionen: ["Nur das Design von Produkten", "Eine Methode zur kreativen Problemlösung, die sich stark am Nutzer orientiert", "Eine Software"],
      antwort: 1
    },
    { 
      frage: "Was ist eine 'Disruptive Innovation'?",
      optionen: ["Eine kleine Verbesserung", "Eine Innovation, die einen bestehenden Markt komplett umkrempelt (z.B. Smartphone statt Tastenhandy)", "Eine fehlerhafte Idee"],
      antwort: 1
    }
  ]
},

'statistik': {
  titel: "Check: Statistik",
  fragen: [
    { 
      frage: "Was ist der 'Median'?",
      optionen: ["Der Durchschnittswert (Mittelwert)", "Der Wert, der in der Mitte einer sortierten Liste steht", "Der häufigste Wert (Modalwert)"],
      antwort: 1
    },
    { 
      frage: "Was ist eine 'Korrelation'?",
      optionen: ["Ein statistischer Zusammenhang zwischen zwei Dingen", "Der Beweis, dass A die Ursache für B ist", "Ein Fehler in den Daten"],
      antwort: 0
    },
    { 
      frage: "Was ist 'Deskriptive Statistik'?",
      optionen: ["Statistik, die Daten beschreibt (z.B. Mittelwert, Diagramme)", "Statistik, die Vorhersagen trifft (Inferenzstatistik)", "Eine Fälschung von Daten"],
      antwort: 0
    }
  ]
},

//==================================
// SEMESTER 4
//==================================
'wba': {
    titel: "Web-Grundlagen Check",
    fragen: [
      { 
        frage: "Wofür steht HTML?",
        optionen: ["HyperText Markup Language", "Home Tool Management Logic", "High Tech Multi Language"],
        antwort: 0 // Die erste Option
      },
      { 
        frage: "Welche Sprache wird für das Styling (Farben, Layout) einer Webseite verwendet?",
        optionen: ["JavaScript", "HTML", "CSS (Cascading Style Sheets)"],
        antwort: 2 
      },
      { 
        frage: "Welche Sprache macht eine Webseite interaktiv (z.B. Klick-Events, Popups)?",
        optionen: ["HTML", "JavaScript", "CSS"],
        antwort: 1
      }
    ]
    },

'bi': {
  titel: "Check: Business Intelligence",
  fragen: [
    { 
      frage: "Was ist das Ziel von 'Business Intelligence' (BI)?",
      optionen: ["Daten zu sammeln, um bessere Geschäftsentscheidungen zu treffen", "Konkurrenten auszuspionieren", "Nur schöne Diagramme zu malen"],
      antwort: 0
    },
    { 
      frage: "Was ist ein 'Dashboard'?",
      optionen: ["Eine Datenbank", "Eine visuelle Aufbereitung von wichtigen Kennzahlen (KPIs) auf einen Blick", "Ein Server-Raum"],
      antwort: 1
    },
    { 
      frage: "Wofür steht 'ETL'?",
      optionen: ["Easy-To-Learn", "Extract, Transform, Load (Der Prozess, Daten in ein Data Warehouse zu laden)", "Electronic-Transaction-List"],
      antwort: 1
    }
  ]
},

'agl': {
  titel: "Check: Agiles Projektmanagement",
  fragen: [
    { 
      frage: "Was ist 'Scrum'?",
      optionen: ["Ein starres Projektmanagement-Tool", "Ein Framework (Regelwerk) für agiles Arbeiten in 'Sprints'", "Ein Befehl in SQL"],
      antwort: 1
    },
    { 
      frage: "Welche Rolle gibt es in Scrum NICHT?",
      optionen: ["Product Owner", "Scrum Master", "Klassischer Projektmanager (Chef)"],
      antwort: 2
    },
    { 
      frage: "Was ist ein 'Sprint'?",
      optionen: ["Ein schnelles Meeting", "Ein kurzer, festgelegter Zeitraum (z.B. 2 Wochen), in dem ein fertiges Produkt-Teil entsteht", "Die Testphase"],
      antwort: 1
    }
  ]
},

//==================================
// SEMESTER 5
//==================================
'cybersec': {
  titel: "Check: Cybersecurity",
  fragen: [
    { 
      frage: "Was ist eine 'Phishing'-Attacke?",
      optionen: ["Ein Virus, der die Festplatte löscht", "Der Versuch, über gefälschte E-Mails an Passwörter zu gelangen", "Ein Angriff auf einen Server"],
      antwort: 1
    },
    { 
      frage: "Wofür stehen 'CIA' in der IT-Sicherheit?",
      optionen: ["Central Intelligence Agency", "Confidentiality, Integrity, Availability (Vertraulichkeit, Integrität, Verfügbarkeit)", "Cyber-Integrity-Act"],
      antwort: 1
    },
    { 
      frage: "Was macht eine 'Firewall'?",
      optionen: ["Sie scannt nach Viren", "Sie kontrolliert den ein- und ausgehenden Netzwerkverkehr", "Sie verschlüsselt E-Mails"],
      antwort: 1
    }
  ]
},

'dt': {
  titel: "Check: Digitale Transformation",
  fragen: [
    { 
      frage: "Was ist 'Digitale Transformation'?",
      optionen: ["Nur die Anschaffung neuer Computer", "Die grundlegende Veränderung von Geschäftsmodellen und Prozessen durch digitale Technologien", "Eine Webseite zu haben"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Industrie 4.0'?",
      optionen: ["Die vierte Version einer Software", "Die Vernetzung der (Industrie-)Produktion (z.B. 'Internet of Things')", "Ein neues Smartphone"],
      antwort: 1
    },
    { 
      frage: "Was ist 'Big Data'?",
      optionen: ["Eine sehr große Excel-Tabelle", "Riesige Datenmengen, die zu groß für traditionelle Datenbanken sind", "Ein Cloud-Speicher"],
      antwort: 1
    }
  ]
},

'wa': {
  titel: "Check: Wissenschaftl. Arbeiten",
  fragen: [
    { 
      frage: "Was ist ein 'Plagiat'?",
      optionen: ["Ein Schreibfehler", "Das 'Abschreiben' oder Übernehmen fremder Ideen, ohne die Quelle anzugeben", "Ein Zitat"],
      antwort: 1
    },
    { 
      frage: "Was ist der Unterschied zwischen 'Zitat' und 'Paraphrase'?",
      optionen: ["Es gibt keinen", "Zitat = wörtlich übernommen (in ...), Paraphrase = sinngemäß wiedergegeben", "Zitat = kurz, Paraphrase = lang"],
      antwort: 1
    },
    { 
      frage: "Was ist eine 'Hypothese'?",
      optionen: ["Eine bewiesene Tatsache", "Eine Vermutung oder Annahme, die man in der Arbeit testen will", "Das Inhaltsverzeichnis"],
      antwort: 1
    }
  ]
},

'itr': {
  titel: "Check: IT-Recht",
  fragen: [
    { 
      frage: "Wofür steht 'DSGVO' (oder 'GDPR')?",
      optionen: ["Deutscher Software-Gerichts-Verbund", "Datenschutz-Grundverordnung", "Digitale-Service-Gesamt-Verordnung"],
      antwort: 1
    },
    { 
      frage: "Was schützt das 'Urheberrecht'?",
      optionen: ["Nur Erfindungen (Patente)", "Persönliche, geistige Schöpfungen (z.B. Code, Musik, Texte)", "Nur den Namen einer Firma (Markenrecht)"],
      antwort: 1
    },
    { 
      frage: "Was ist ein 'Impressum'?",
      optionen: ["Eine freiwillige Angabe", "Eine gesetzlich vorgeschriebene Anbieter-Kennzeichnung auf Webseiten", "Die Datenschutzerklärung"],
      antwort: 1
    }
  ]
},

//==================================
// SONDERMODULE (Platzhalter)
//==================================
'praxis': {
  titel: "Berufspraktische Tätigkeit",
  fragen: [],
  error: "Für dieses Modul gibt es kein Quiz. Hier geht es um deine Praxiserfahrung! Bist du bereit, die Theorie anzuwenden?"
},

'wi1': {
  titel: "Wahlmodul WI",
  fragen: [],
  error: "Dies ist ein Wahlmodul. Hier entscheidest DU, worauf du Lust hast! (Noch kein spezifisches Quiz verfügbar)"
},

'pdt': {
  titel: "Projekt Digitalisierung",
  fragen: [],
  error: "Im Projekt ist Teamarbeit gefragt! Hier gibt es kein 'richtig' oder 'falsch' auf Knopfdruck, sondern nur das gemeinsame Ziel."
},

'international': {
  titel: "Wahlmodul Internationalisierung",
  fragen: [],
  error: "Hier geht es um den Blick über den Tellerrand! Für dieses Modul ist (noch) kein Quiz hinterlegt."
},

'portfolio': {
  titel: "Portfolio WI",
  fragen: [],
  error: "Im Portfolio zeigst du, was DU gelernt hast. Das ist deine persönliche Zusammenfassung – dafür gibt es kein Standard-Quiz!"
},

'thesis': {
  titel: "Bachelor-Thesis",
  fragen: [],
  error: "Jetzt wird es ernst! Das Thema deiner Thesis ist so individuell wie du. Viel Erfolg beim Forschen!"
},

    // Platzhalter für nicht gefundene Quiz
    'nicht_gefunden': {
      titel: "Quiz nicht gefunden",
      fragen: [],
      error: "Für dieses Modul wurde noch kein Quiz erstellt."
    }
  };