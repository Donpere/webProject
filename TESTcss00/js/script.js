


  // Fonction pour générer et télécharger le PDF
  function generatePDF() {
    // Code pour générer le contenu du PDF

    // Exemple simple : Création d'un document PDF vide
    const doc = new jsPDF();

    // Ajoute du texte au PDF
    doc.text('Ceci est un exemple de PDF', 10, 10);

    // Téléchargement du PDF
    doc.save('exemple.pdf');
  }

  // Écouteur d'événement pour le bouton de téléchargement
  const downloadButton = document.getElementById('downloadBtn');
  downloadButton.addEventListener('click', generatePDF);



// Créer un bouton pour télécharger un PDF à partir d'un site web en utilisant JavaScript, 
// voici un exemple de code qui peut vous aider :

  
// nous utilisons la bibliothèque jsPDF pour générer et télécharger le PDF. 
// Le bouton de téléchargement est identifié par son `id` et 
// un écouteur d'événement est ajouté pour déclencher la fonction `generatePDF()` lorsque le bouton est cliqué.
  
// Notez que vous devez inclure la bibliothèque jsPDF dans votre page HTML pour que cela fonctionne. 
//Vous pouvez la télécharger et l'inclure dans votre projet en ajoutant la balise `<script>` suivante avant votre code JavaScript :
  
//  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.3/jspdf.umd.min.js"></script>
  
// Assurez-vous également de vérifier la documentation de jsPDF pour comprendre 
// toutes les fonctionnalités et options disponibles pour générer le contenu de votre PDF selon vos besoins.