// Cette fonction affiche la carte pour la conversion de la parole en texte et cache la carte pour la conversion du texte en parole
function showSpeechToText() {
  document.getElementById('speechToTextCard').style.display = 'block';
  document.getElementById('textToSpeechCard').style.display = 'none';
}

// Cette fonction affiche la carte pour la conversion du texte en parole et cache la carte pour la conversion de la parole en texte
function showTextToSpeech() {
  document.getElementById('textToSpeechCard').style.display = 'block';
  document.getElementById('speechToTextCard').style.display = 'none';
}

// Récupère le bouton de démarrage de la conversion de la parole en texte
const startSpeechToTextButton = document.getElementById('startSpeechToText');
// Récupère la zone de texte où la parole sera affichée (résultat de la conversion)
const speechToTextInput = document.getElementById('speechToTextInput');

// Ajoute un événement "click" au bouton de démarrage de la conversion de la parole en texte
startSpeechToTextButton.addEventListener('click', () => {
  // Initialise le service de reconnaissance vocale
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'fr-FR'; // Langue française

  // Lorsqu'il y a un résultat (la reconnaissance vocale a réussi)
  recognition.onresult = function(event) {
    // Récupère le texte transcrit à partir du résultat
    const transcript = event.results[0][0].transcript;
    // Affiche le texte transcrit dans la zone de texte
    speechToTextInput.value = transcript;
  };

  // Démarre la reconnaissance vocale
  recognition.start();
});

// Récupère le bouton de démarrage de la conversion du texte en parole
const startTextToSpeechButton = document.getElementById('startTextToSpeech');
// Récupère la zone de texte contenant le texte à convertir en parole
const textToSpeechInput = document.getElementById('textToSpeechInput');

// Ajoute un événement "click" au bouton de démarrage de la conversion du texte en parole
startTextToSpeechButton.addEventListener('click', () => {
  // Crée un nouvel objet d'utterance (élément qui sera lu à haute voix)
  const utterance = new SpeechSynthesisUtterance(textToSpeechInput.value);
  utterance.lang = 'fr-FR'; // Langue française

  // Lance la synthèse vocale pour lire le texte
  speechSynthesis.speak(utterance);
});
