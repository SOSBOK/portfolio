const form = document.getElementById("emailForm");
const emailOutput = document.getElementById("emailOutput");
const outputContainer = document.getElementById("emailOutputContainer");
const copyBtn = document.getElementById("copyBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const prenom = document.getElementById("prenom").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const poste = document.getElementById("poste").value.trim();
  const objet = document.getElementById("objet").value.trim();

  const emailText = `
Objet : ${objet}

Madame, Monsieur,

Je me permets de vous adresser ma candidature pour le poste de ${poste}. Je suis convaincu(e) que mon profil et mes compétences pourraient être un atout pour votre entreprise.

Je reste à votre disposition pour un entretien afin d’échanger sur cette opportunité.

Cordialement,

${prenom} ${nom}
  `.trim();

  emailOutput.value = emailText;
  outputContainer.style.display = "flex";
});

copyBtn.addEventListener("click", function () {
  emailOutput.select();
  document.execCommand("copy");
  alert("Email copié dans le presse-papier !");
});
