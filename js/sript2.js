const translations = {
  "bonjour": "hello",
  "comment ça va": "how are you",
  "merci": "thank you",
  "au revoir": "goodbye",
  "je t'aime": "i love you",
  "maison": "house",
  "école": "school",
  "chat": "cat",
  "chien": "dog",
  "travail": "work",

  // English → French
  "hello": "bonjour",
  "how are you": "comment ça va",
  "thank you": "merci",
  "goodbye": "au revoir",
  "i love you": "je t'aime",
  "house": "maison",
  "school": "école",
  "cat": "chat",
  "dog": "chien",
  "work": "travail"
};

document.getElementById("translateBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText").value.toLowerCase();
  const language = document.getElementById("language").value;
  const output = translateText(input, language);
  document.getElementById("outputText").textContent = output;
});

function translateText(text, lang) {
  let words = text.split(/\b/); // découper en mots + ponctuation
  return words.map(word => {
    const trimmed = word.trim().toLowerCase();
    if (lang === "en") {
      return translations[trimmed] || word;
    } else {
      // reverse lookup
      const frWord = Object.keys(translations).find(key => translations[key] === trimmed);
      return frWord || word;
    }
  }).join('');
}
