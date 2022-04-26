"use strict";

var path = window.location.pathname;
var mobile_nav = document.getElementById("mobile-nav");
var mobile_nav_link = document.querySelector("#hamburgher");
var curtain_nav = document.querySelector(".curtain-nav");
var mobile_a = document.querySelectorAll(".curtain-nav ul li a");
var mode_icon = document.querySelectorAll("#mode_icon, #mode_icon_mobile");
var impact = document.getElementById("impact");
var header = document.getElementById("header");
var body = document.body;
var logo = document.getElementById("site_logo");
var our_services_box = document.querySelectorAll(".our-services_box");
var our_services_title = document.getElementById("our_services_title");
var our_services_p = document.querySelectorAll(".our-services_box p");
var our_serviceshsubTitle = document.querySelectorAll(".our-services_box h4");
var our_services_icon = document.querySelectorAll(".our-services_box i");
var cryptopedia_text = document.getElementById("cryptopedia-text");
var pathfinder_24hAvgPrice = document.getElementById("24hAvgPrice");
var pathfinder_24hTransactionsCount = document.getElementById("24hTransactionsCount");
var pathfinder_market_cap = document.getElementById("market_cap");
var services_title = document.querySelectorAll(".service_title");
var service = document.querySelectorAll(".service");
var pathfinder_box = document.querySelectorAll(".service_container-box, .inspector_container-box");
var pathfinder_p = document.querySelectorAll(".service_container-box-body p, .inspector_container-box-body p");
var pathfinder_h4 = document.querySelectorAll(".service_container-box-title-sub h4");
var final_balance_address = document.getElementById("final-balance-address");
var n_transactions_address = document.getElementById("n-transactions-address");
var bitcoin_in_address = document.getElementById("bitcoin-in-address");
var bitcoin_out_address = document.getElementById("bitcoin-out-address");
var inspector_input = document.querySelector(".inspector input");
var inspector_label = document.querySelector(".inspector label");
var footer = document.getElementById("footer");
var lang_icon = document.getElementById("lang_icon");
var lang_icon_mobile = document.getElementById("lang_icon_mobile");
var random_addresses = ["bc1q78x7yazvpvdt430jkyla9px0utfwk3r89n5c0k", "381DJouqNj1q7NWSVZaVNhAhmvoJjDF8Po", "bc1qgefpcyzlxstn7yq0apf70f934z45x3lqgkk9s5", "1763CAcXuUdteeSBYTHcTeWGuP2jw5UMTL", "bc1qdsvy53qyl0shxctu2wvq74tq5e70hrur88l8pc", "13UVCajHLSc1bZsM8chCqCeSKh41DuYbzh", "bc1qm34lsc65zpw79lxes69zkqmk6ee3ewf0j77s3h"];
var impact_title = document.getElementById("impact_title");
var impact_sub_title = document.getElementById("impact_sub-title");
var impact_text = document.getElementById("impact_text");
var impact_cta = document.getElementById("impact_cta");
var pathfinder_text = document.getElementById("pathfinder_text");
var inspector_text = document.getElementById("inspector_text");
var pathfinder_info_1 = document.getElementById("pathfinder_info_1");
var pathfinder_info_2 = document.getElementById("pathfinder_info_2");
var pathfinder_info_3 = document.getElementById("pathfinder_info_3");
var inspector_info_1 = document.getElementById("inspector_info_1");
var inspector_info_2 = document.getElementById("inspector_info_2");
var inspector_info_3 = document.getElementById("inspector_info_3");
var inspector_info_4 = document.getElementById("inspector_info_4");
var cryptopedia_box = document.querySelectorAll(".cryptopedia_container-box");
var cryptopedia_title = document.querySelectorAll(".cryptopedia_container-box h4");
var cryptopedia_description = document.querySelectorAll(".cryptopedia_container-box p");
var cryptopedia_link = document.querySelectorAll(".cryptopedia_container-box a");
var ripple_img = document.getElementById("ripple-img");
var eos_img = document.getElementById("eos-img");
var bitcoin_text = document.getElementById("bitcoin-text");
var ethereum_text = document.getElementById("ethereum-text");
var tether_text = document.getElementById("tether-text");
var cardano_text = document.getElementById("cardano-text");
var ripple_text = document.getElementById("ripple-text");
var eos_text = document.getElementById("eos-text");

if (localStorage.getItem("mode") === null) {
  localStorage.setItem("mode", 0);
}

if (localStorage.getItem("mode") == 0) {
  lightMode();
} else {
  darkMode();
}

if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", 0);
}

if (localStorage.getItem("lang") == 0) {
  enLang();
} else {
  itLang();
}

function openmobilenav() {
  mobile_nav_link.href = "javascript:closemobilenav()";
  curtain_nav.style.display = "block";
  mobile_nav_link.style.transform = "rotate(90deg)";
}

function closemobilenav() {
  mobile_nav_link.href = "javascript:openmobilenav()";
  curtain_nav.style.display = "none";
  mobile_nav_link.style.transform = "rotate(0deg)";
}

function changeLang() {
  if (localStorage.getItem("lang") == 0) {
    itLang();
  } else {
    enLang();
  }
}

function changeMode() {
  if (localStorage.getItem("mode") == 0) {
    darkMode();
  } else {
    lightMode();
  }
}

function itLang() {
  localStorage.setItem("lang", 1);
  lang_icon.src = "assets/img/en.png";
  lang_icon_mobile.src = "assets/img/en.png";
  impact_title.innerHTML = "CRIPTOVALUTE";
  impact_sub_title.innerHTML = "IL FUTURO DELLA MONETA VIRTUALE";
  impact_text.innerHTML = "unisciti al mondo delle criptovalute con i migliori strumenti per scavare in profondità nel mercato delle criptovalute. Scopri la nostra vasta gamma di prodotti e scegli in piena libertà quelli che fanno per te.";
  impact_cta.innerHTML = "scopri";
  our_services_title.innerHTML = "I nostri servizi";
  pathfinder_text.innerHTML = "scopri le statistiche più curiose sulle principali blockchain";
  inspector_text.innerHTML = "analizza qualsiasi indirizzo bitcoin ottenendo le informazioni in tempo reale";
  pathfinder_info_1.innerHTML = "Prezzo medio 24h";
  pathfinder_info_2.innerHTML = "Numero di transazioni";
  pathfinder_info_3.innerHTML = "Cap. di mercato";
  inspector_input.placeholder = "cerca indirizzo";
  inspector_label.innerHTML = "<i class='fa-solid fa-circle-info'></i> premi / per generare un indirizzo causale";
  inspector_info_1.innerHTML = "Saldo finale";
  inspector_info_2.innerHTML = "N. transazioni";
  inspector_info_3.innerHTML = "Entrate (₿)";
  inspector_info_4.innerHTML = "Uscite (₿)";
  bitcoin_text.innerHTML = "una versione puramente peer-to-peer del denaro digitale.";
  ethereum_text.innerHTML = "una blockchain decentralizzata e open source con funzionalità di contratto intelligente.";
  tether_text.innerHTML = "blockchain-as-a-service che mira a fornire una soluzione per il monitoraggio del prodotto.";
  cardano_text.innerHTML = "piattaforma per l'esecuzione di smart contract, concettualmente simile a Ethereum.";
  eos_text.innerHTML = "ecosistema basato su blockchain per lo sviluppo di applicazioni decentralizzate.";
  ripple_text.innerHTML = "è un protocollo peer-to-peer creato per il trasferimento globale di fondi in modo sicuro, istantaneo ea basso costo.";
  cryptopedia_link.forEach(function (element) {
    element.innerHTML = "scopri";
  });
}

function enLang() {
  localStorage.setItem("lang", 0);
  lang_icon.src = "assets/img/it.png";
  lang_icon_mobile.src = "assets/img/it.png";
  impact_title.innerHTML = "CRYPTOCURRENCY";
  impact_sub_title.innerHTML = "THE FUTURE OF VIRTUAL COIN";
  impact_text.innerHTML = "join the world of cryptocurrencies with the best tools to dig deep into the crypto market. Discover our wide range of products and choose the ones that are right for you in full freedom.";
  impact_cta.innerHTML = "discover";
  our_services_title.innerHTML = "Our services";
  pathfinder_text.innerHTML = "discover the most curious statistics on the main blockchains";
  inspector_text.innerHTML = "analyzes any bitcoin address obtaining the information in real time";
  pathfinder_info_1.innerHTML = "24h avg price";
  pathfinder_info_2.innerHTML = "Number of transactions";
  pathfinder_info_3.innerHTML = "Market cap.";
  inspector_input.placeholder = "search address";
  inspector_label.innerHTML = "<i class='fa-solid fa-circle-info'></i> type / to generate random address";
  inspector_info_1.innerHTML = "Final balance";
  inspector_info_2.innerHTML = "N. transactions";
  inspector_info_3.innerHTML = "Bitcoin in";
  inspector_info_4.innerHTML = "Bitcoin out";
  bitcoin_text.innerHTML = "a purely peer-to-peer version of digital money.";
  ethereum_text.innerHTML = "a decentralized, open-source blockchain with smart contract functionality.";
  tether_text.innerHTML = "blockchain-as-a-service which aims to provide a solution for product monitoring.";
  ripple_text.innerHTML = "is a peer-to-peer protocol created for the global transfer of funds in a secure and low-cost manner.";
  cardano_text.innerHTML = "platform for the execution of smart contracts, conceptually similar to ethereum.";
  eos_text.innerHTML = "blockchain-based ecosystem for developing decentralized applications";
  cryptopedia_link.forEach(function (element) {
    element.innerHTML = "Go to";
  });
}

function lightMode() {
  localStorage.setItem("mode", 0);
  impact.classList.remove("impact-dark");
  header.style.backgroundColor = "#FFFFFF";
  header.style.boxShadow = "rgb(99 99 99 / 20%) 0px 2px 8px 0px";
  body.style.backgroundColor = "rgb(255, 255, 255)";
  logo.src = "assets/img/logo.png";
  our_services_title.style.color = "#343352";
  our_services_p.forEach(function (element) {
    element.style.color = "#343352";
  });
  our_serviceshsubTitle.forEach(function (element) {
    element.style.color = "#343352";
  });
  pathfinder_box.forEach(function (element) {
    element.style.backgroundColor = "#FFFFFF";
    element.style.boxShadow = "0";
  });
  services_title.forEach(function (element) {
    element.style.color = "#343352";
    element.style.backgroundColor = "#FFFFFF";
  });
  our_services_icon.forEach(function (element) {
    element.style.color = "#636A6F";
  });
  our_services_box.forEach(function (element) {
    element.style.backgroundColor = "#FFFFFF";
  });
  pathfinder_h4.forEach(function (element) {
    element.style.color = "#343352";
  });
  service.forEach(function (element) {
    element.style.backgroundColor = "#EBEFF3";
  });
  pathfinder_p.forEach(function (element) {
    element.style.color = "black";
  });
  cryptopedia_box.forEach(function (element) {
    element.style.backgroundColor = "#ffffff";
    element.style.boxShadow = "0 0 24px rgb(196 196 196 / 24%)";
  });
  cryptopedia_title.forEach(function (element) {
    element.style.color = "#343352";
  });
  cryptopedia_link.forEach(function (element) {
    element.style.color = "#551a8b";
  });
  eos_img.src = "assets/img/crypto/eos.png";
  ripple_img.src = "assets/img/crypto/ripple.png";
  cryptopedia_description.forEach(function (element) {
    element.style.color = "#000000";
  });
  curtain_nav.style.backgroundColor = "#FFFFFF";
  inspector_input.classList.remove("inspector_input-dark");
  inspector_label.style.color = "#343352";
  footer.style.backgroundColor = "#171924";
  mode_icon.forEach(function (element) {
    element.innerHTML = '<i class="fa-solid fa-moon"></i>';
  });
}

function darkMode() {
  localStorage.setItem("mode", 1);
  impact.classList.add("impact-dark");
  logo.src = "assets/img/logo-white.png";
  header.style.backgroundColor = "#292C33";
  header.style.boxShadow = "none";
  body.style.backgroundColor = "rgb(23, 23, 26)";
  our_services_title.style.color = "#F2F2F2";
  our_services_p.forEach(function (element) {
    element.style.color = "#F2F2F2";
  });
  our_serviceshsubTitle.forEach(function (element) {
    element.style.color = "#F2F2F2";
  });
  pathfinder_h4.forEach(function (element) {
    element.style.color = "#F2F2F2";
  });
  our_services_icon.forEach(function (element) {
    element.style.color = "#F2F2F2";
  });
  services_title.forEach(function (element) {
    element.style.color = "#F2F2F2";
    element.style.backgroundColor = "#17171A";
  });
  pathfinder_box.forEach(function (element) {
    element.style.backgroundColor = "#292c33";
    element.style.boxShadow = "none";
  });
  pathfinder_p.forEach(function (element) {
    element.style.color = "#F2F2F2";
  });
  eos_img.src = "assets/img/crypto/eos-dark.png";
  ripple_img.src = "assets/img/crypto/ripple-dark.png";
  our_services_box.forEach(function (element) {
    element.style.backgroundColor = "#292C33";
  });
  cryptopedia_box.forEach(function (element) {
    element.style.backgroundColor = "#292C33";
    element.style.boxShadow = "none";
  });
  cryptopedia_description.forEach(function (element) {
    element.style.color = "#ffffff";
  });
  cryptopedia_title.forEach(function (element) {
    element.style.color = "#f2f2f2";
  });
  service.forEach(function (element) {
    element.style.backgroundColor = "#171924";
  });
  cryptopedia_link.forEach(function (element) {
    element.style.color = "#e0dfda";
  });
  curtain_nav.style.backgroundColor = "#292C33";
  inspector_input.classList.add("inspector_input-dark");
  inspector_label.style.color = "#F2F2F2";
  footer.style.backgroundColor = "#17171A";
  mode_icon.forEach(function (element) {
    element.innerHTML = '<i class="fa-solid fa-sun"></i>';
  });
}

function get24hPrice() {
  $.ajax({
    url: "https://blockchain.info/q/24hrprice"
  }).done(function (data) {
    animateValue(pathfinder_24hAvgPrice, 0, data, 800, " $");
  });
}

function get24hTransactionsCount() {
  $.ajax({
    url: "https://blockchain.info/q/24hrtransactioncount"
  }).done(function (data) {
    pathfinder_24hTransactionsCount.innerHTML = data;
    animateValue(pathfinder_24hTransactionsCount, 0, data, 800, "");
  });
}

function getMarketCap() {
  $.ajax({
    url: "https://blockchain.info/q/marketcap"
  }).done(function (data) {
    pathfinder_market_cap.innerHTML = parseInt(parseFloat(data).toFixed() / 1000000000) + "M $";
    animateValue(pathfinder_market_cap, 0, parseInt(parseFloat(data).toFixed() / 1000000000), 800, "M $");
  });
}

function randomAddress(el, event) {
  if (event.key === "/") {
    el.value = random_addresses[Math.floor(Math.random() * random_addresses.length)];
    el.value = el.value.replace("/", "");
  }
}

function searchAddress(el) {
  $.ajax({
    url: "https://blockchain.info/rawaddr/" + el.value
  }).done(function (data) {
    setFinalBalance(data["final_balance"]);
    setNTransactions(data["n_tx"]);
    setBitcoinIn(data["total_received"]);
    setBitcoinOut(data["total_sent"]);
  });
}

function setFinalBalance(data) {
  final_balance_address.innerHTML = data / 100000000 + " ₿";
}

function setNTransactions(data) {
  n_transactions_address.innerHTML = data;
}

function setBitcoinIn(data) {
  bitcoin_in_address.innerHTML = data / 100000000 + " ₿";
}

function setBitcoinOut(data) {
  bitcoin_out_address.innerHTML = data / 100000000 + " ₿";
}

get24hPrice();
get24hTransactionsCount();
getMarketCap();

function animateValue(obj, start, end, duration, statiContent) {
  var startTimestamp = null;

  var step = function step(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    var progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + statiContent;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  /* or $(window).height() */
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  /* or $(window).width() */
  ;
}

var animationPathfinder = 0;
document.addEventListener('scroll', function (e) {
  if (isElementInViewport($("#24hAvgPrice")) && animationPathfinder == 0) {
    animationPathfinder = 1;
    get24hPrice();
    get24hTransactionsCount();
    getMarketCap();
  }
});