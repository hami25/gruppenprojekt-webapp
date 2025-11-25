
  function flipCard(element) {
    element.classList.toggle('flipped');
  }


// Diese Variablen speichern den Zustand des aktuellen Quiz
let currentQuizId = null;
let currentQuestionIndex = 0;
let score = 0;
let aktuellesQuiz = null;



// ===================================
  // GRUNDFUNKTIONEN (Wie bisher)
  // ===================================

  function flipCard(element) {
    element.classList.toggle('flipped');
  }

  // Holt sich die Haupt-Elemente des Modals
  const quizModal = document.getElementById('quiz-modal');
  const quizInhalt = document.getElementById('quiz-inhalt');


  // ===================================
  // NEUE QUIZ-LOGIK
  // ===================================

  // 1. STARTET DAS QUIZ (wird vom Button aufgerufen)
  function openQuizModal(quizId, event) {
    if (event) event.stopPropagation(); 

    // Setzt alles auf Anfang
    currentQuizId = quizId;
    aktuellesQuiz = quizDaten[quizId] || quizDaten['nicht_gefunden']; // Holt Quiz oder "nicht gefunden"
    currentQuestionIndex = 0;
    score = 0;

    // Leert das Modal und baut die Quiz-Struktur auf
    quizInhalt.innerHTML = `
      <h2>${aktuellesQuiz.titel}</h2>
      <div id="quiz-frage-container"></div>
      <div id="quiz-feedback"></div>
      <div id="quiz-navigation"></div>
    `;

    // Zeigt die erste Frage
    if (aktuellesQuiz.error) {
      document.getElementById('quiz-frage-container').innerHTML = `<p>${aktuellesQuiz.error}</p>`;
    } else {
      showQuestion();
    }
    
    quizModal.style.display = "flex"; // Macht das Modal sichtbar
  }

  // 2. ZEIGT DIE AKTUELLE FRAGE AN
  function showQuestion() {
    const frageData = aktuellesQuiz.fragen[currentQuestionIndex];

    // Baut die Frage und die Optionen
    let html = `<p class="quiz-frage">${currentQuestionIndex + 1}. ${frageData.frage}</p>`;
    frageData.optionen.forEach((option, index) => {
      // Wichtig: Jede Option ruft selectAnswer() mit ihrem eigenen Index (0, 1, 2, ...) auf
      html += `<div class="quiz-option" onclick="selectAnswer(${index})">${option}</div>`;
    });

    // Setzt das HTML
    document.getElementById('quiz-frage-container').innerHTML = html;
    
    // Leert das Feedback und versteckt den "Weiter"-Knopf
    document.getElementById('quiz-feedback').innerHTML = "";
    document.getElementById('quiz-navigation').innerHTML = "";
  }

  // 3. WERTET DIE ANTWORT AUS (wird von der Option aufgerufen)
  function selectAnswer(selectedIndex) {
    const frageData = aktuellesQuiz.fragen[currentQuestionIndex];
    const richtigeAntwortIndex = frageData.antwort;
    const feedbackEl = document.getElementById('quiz-feedback');
    
    // Alle Optionen holen, um sie zu färben
    const optionenElements = quizInhalt.querySelectorAll('.quiz-option');
    
    // Alle Optionen "deaktivieren", damit man nicht nochmal klickt
    optionenElements.forEach(opt => {
      opt.style.pointerEvents = "none"; // Deaktiviert Klicks
      opt.style.opacity = "0.7";
    });

    if (selectedIndex === richtigeAntwortIndex) {
      // Richtig!
      score++;
      optionenElements[selectedIndex].style.backgroundColor = "#a5d6a7"; // Hellgrün
      optionenElements[selectedIndex].style.borderColor = "#4caf50"; // Grün
      feedbackEl.innerHTML = "<p style='color:green; font-weight:bold;'>Richtig!</p>";
    } else {
      // Falsch!
      optionenElements[selectedIndex].style.backgroundColor = "#ef9a9a"; // Hellrot
      optionenElements[selectedIndex].style.borderColor = "#f44336"; // Rot
      
      // Die korrekte Antwort grün hervorheben
      optionenElements[richtigeAntwortIndex].style.backgroundColor = "#a5d6a7";
      optionenElements[richtigeAntwortIndex].style.opacity = "1";

      feedbackEl.innerHTML = "<p style='color:red; font-weight:bold;'>Falsch.</p>";
    }

    // Zeige "Weiter" oder "Ergebnis" Button
    const navEl = document.getElementById('quiz-navigation');
    if (currentQuestionIndex < aktuellesQuiz.fragen.length - 1) {
      // Es gibt noch mehr Fragen
      navEl.innerHTML = `<button class="quiz-btn" onclick="nextQuestion()">Nächste Frage</button>`;
    } else {
      // Letzte Frage
      navEl.innerHTML = `<button class="quiz-btn" onclick="showResult()">Ergebnis anzeigen</button>`;
    }
  }

  // 4. LÄDT DIE NÄCHSTE FRAGE (wird vom "Weiter"-Button aufgerufen)
  function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
  }

  // 5. ZEIGT DAS ENDERGEBNIS
  function showResult() {
    const anzahlFragen = aktuellesQuiz.fragen.length;
    const prozent = Math.round((score / anzahlFragen) * 100);

    document.getElementById('quiz-frage-container').innerHTML = `
      <h2>Quiz beendet!</h2>
      <p style="font-size: 1.2rem;">Du hast <strong>${score} von ${anzahlFragen}</strong> Fragen richtig beantwortet (${prozent}%).</p>
    `;
    document.getElementById('quiz-feedback').innerHTML = "";
    document.getElementById('quiz-navigation').innerHTML = `<button class="quiz-btn" onclick="closeQuizModal()">Schließen</button>`;
  }

  // 6. SCHLIESST DAS MODAL (wird vom X-Button oder "Schließen" aufgerufen)
  function closeQuizModal() {
    quizModal.style.display = "none"; 
    quizInhalt.innerHTML = ""; // Setzt das Modal komplett zurück
  }
