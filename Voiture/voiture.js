// Création de la fonction principale
function gestionParc() {
  // Récupération des éléments du DOM
  let choix = document.querySelector(".select");
  let buttonValider = document.querySelector(".buttonValider");
  let form = document.querySelector(".formData");
  let divVoitureChoisies = document.querySelector(".voitureChoisies");

  // Création d'un tableau vide
  let tableau = [];
  let formSelect = document.querySelector(".selectVoiture");

  // Création d'un évènement  sur le formulaire
  form.addEventListener("submit", function (e) {
    // Methode pour éviter le rechargement de la page
    e.preventDefault();

    // Récupération des données du formulaire et affichage de celles-ci
    let data = new FormData(form);
    let formObjet;
    // Affichage des conditions en fonction de la valeur du select
    if (data.get("selectVoiture") == "voiture") {
      formObjet = new Voiture(
        (roue = 4),
        data.get("choixCouleur"),
        data.get("choixPuissance"),
        data.get("selectVoiture"),
        (immatriculation = "85-zy-560"),
        (prix = 10000)
      );
    } else if (data.get("selectVoiture") == "camion") {
      formObjet = new Camion(
        (roue = 4),
        data.get("choixCouleur"),
        data.get("choixPuissance"),
        data.get("selectVoiture"),
        (this.poid = "2 tonnes"),
        (this.prix = 20000)
      );
    } else {
      formObjet = new Commerciale(
        (roue = 4),
        data.get("choixCouleur"),
        data.get("choixPuissance"),
        data.get("selectVoiture"),
        (this.marque = "Mercedes"),
        (this.prix = 15000)
      );
    }

    // Fonction permettant d'ajouter les valeurs au tableau
    tableau.push(formObjet);
    console.log(formObjet);
    // Appel de la fonction permettant d'afficher les données
    showContact();
  });

  // Creation du prototype generale
  class ChoixVehicule {
    constructor(roue, couleur, puissance, select) {
      this.roue = 4;
      this.couleur = couleur;
      this.puissance = puissance;
      this.select = select;
    }
  }

  // Création de classes héritières
  class Voiture extends ChoixVehicule {
    constructor(roue, couleur, puissance, select, immatriculation, prix) {
      super(roue, couleur, puissance, select);
      this.immatriculation = "85-zy-560";
      this.prix = 10000;
    }
  }

  class Camion extends ChoixVehicule {
    constructor(roue, couleur, puissance, select, poid, prix) {
      super(roue, couleur, puissance, select);
      this.poid = "2 tonnes";
      this.prix = 20000;
    }
  }

  class Commerciale extends ChoixVehicule {
    constructor(roue, couleur, puissance, select, marque, prix) {
      super(roue, couleur, puissance, select);
      this.marque = "mercedes";
      this.prix = 15000;
    }
  }

  // Création de la fonction permettant d'afficher les données
  function showContact() {
    let content = "";

    // forEach sur le tableau pour afficher tous les éléments de celui-ci
    tableau.forEach(function (element) {
      // Affichage conditionnel
      if (element.select == "voiture") {
        content +=
          `<p>--------------------------------------</p>` +
          `<p>Nombre de roues : ${element.roue}</p>` +
          `<p>Couleur : ${element.couleur}</p>` +
          `<p>Puissance: ${element.puissance}</p>` +
          `<p>Immatriculation : ${element.immatriculation}</p>` +
          `<p>Prix : ${element.prix}</p>`;

        // Affichage du contenu au sein de la div
        divVoitureChoisies.innerHTML = content;
      } else if (element.select == "camion") {
        content +=
          `<p>--------------------------------------</p>` +
          `<p>Nombre de roues : ${element.roue}</p>` +
          `<p>Couleur : ${element.couleur}</p>` +
          `<p>Puissance: ${element.puissance}</p>` +
          `<p>Poid : ${element.poid}</p>` +
          `<p>Prix : ${element.prix}</p>`;

        divVoitureChoisies.innerHTML = content;
      } else {
        content +=
          `<p>--------------------------------------</p>` +
          `<p>Nombre de roues : ${element.roue}</p>` +
          `<p>Couleur : ${element.couleur}</p>` +
          `<p>Puissance: ${element.puissance}</p>` +
          `<p>Marque : ${element.marque}</p>` +
          `<p>Prix : ${element.prix}</p>`;

        divVoitureChoisies.innerHTML = content;
      }

      console.log(element);
    });
  }
}

// Appel de la fonction
gestionParc();
