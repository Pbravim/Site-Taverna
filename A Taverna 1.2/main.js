function openLoginForm(){
  document.body.classList.add("showLoginForm");
}
function closeLoginForm(){
  document.body.classList.remove("showLoginForm");
}

/*FUNÇÃO POPUP*/

/* DEIXA O TAMANHO DA SIDEBAR EM 250px E A MARGEM ESQUERDA DO CONTEUDO DA PAGINA PARA 250px */
function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

/* DEIXA A LARGURA DA SIDEBAR EM 0 E A MARGEM ESQUERDA DO CONTEUDO DA PAGINA PARA to 0 */
function closeNav(){
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}


const ratings = {
  budweiser: 1,
  heineken: 3,
  corona: 5,
}

const starsTotal = 5;



// Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

// Form Elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Init product
let product;

// Product select change
productSelect.addEventListener('change', (e) => {
  product = e.target.value;
  // Enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

let lista = []
for (let rating in ratings){
  lista.push(ratings[rating])
}

// Rating control change
ratingControl.addEventListener('blur', (e) => {
  const rating = e.target.value;

  // Make sure 5 or under
  if (rating > 5) {
    alert('Please rate 1 - 5');
    return;
  }

  // Change rating
  ratings[product] = rating;

  getRatings();

  for (let rating in ratings){
    lista.push(ratings[rating])
  }
  
});


//Classificar Bom ou Ruim
// PROGRAMAÇÃO FUNCIONAL -- FILTER
function classificar(){
  function bom(valor){
    return valor > 3
  }

  function ruim(valor){
    return valor <= 3
  }
  var listaboa = lista.filter(bom) 
  var listaruim = lista.filter(ruim)
  document.getElementById("lista").innerHTML =(listaboa +" "+ listaruim)
}
classificar()

// Get ratings
function getRatings() {
  for (let rating in ratings) {
    // Get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

    // Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  }
}


function mtotal(){
  var somatotal = 0;
  for (let rating in ratings) {
    var soma = parseInt(ratings[rating]);
    somatotal = somatotal + soma;
  }

  function media(sum){
    return sum/3;
  
  }
  document.getElementById("ola").innerHTML = "Média total das cervejas: " + Math.round(media(somatotal)*10)/10;
}


document.getElementById("ola").onclick = function(){mtotal()}

/*PROGRAMAÇÃO FUNCIONAL*/ 

function classificar() {

  function bom(valor){
    return valor > 3
  }
  function ruim(valor){
    return valor <= 3
  }


  var listaboa = lista.filter(bom)
  var listaruim = lista.filter(ruim)

  document.getElementById("positiva").innerHTML = ("Avaliações positivas: "+ listaboa)
  document.getElementById("negativa").innerHTML = ("Avaliações negativas: " + listaruim)

}

document.getElementById("ola").onclick = function(){classificar();}

