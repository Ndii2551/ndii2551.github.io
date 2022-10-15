function sidebarOpen() {
  let sbar = document.getElementById("sidebar");
  sbar.style.right = "0";
  let sbarc = document.getElementById("sbar-content");
  sbarc.style.width = "50%";
}
function sidebarClose() {
  let sbar = document.getElementById("sidebar");
  sbar.style.right = "-100%";
  let sbarc = document.getElementById("sbar-content");
  sbarc.style.width = "0";
}
function scrolltoAbout() {
  let konten = document.getElementById("profile");
  konten.scrollIntoView();
  let sbar = document.getElementById("sidebar");
  sbar.style.right = "-100%";
  let sbarc = document.getElementById("sbar-content");
  sbarc.style.width = "0";
}
function scrolltoMain() {
  let konten = document.getElementById("main");
  konten.scrollIntoView();
}

function scrolltoMore() {
  let konten = document.getElementById("more");
  konten.scrollIntoView();
}
function lookRinjani() {
  let konten = document.getElementById("main");
  konten.scrollIntoView();
  let h = document.getElementById("main-header");
  h.innerHTML = "Gunung Rinjani";
  let p = document.getElementById("main-paragraph");
  p.innerHTML =
    "Gunung Rinjani terletak di kawasan konservasi Taman Nasional Gunung Rinjani yang berada di Nusa Tenggara Barat, Pulau Lombok bagian Lombok Timur. Gunung ini memiliki ketinggian sekitar 3.726 mdpl.<br>Gunung Rinjani adalah salah satu gunung yang menjadi favorit para pendaki karena gunung ini terkenal sangat indah. Bahkan gunung ini disebut-sebut sebagai wisata pendakian gunung terindah di Asia Tenggara.<br> Gunung ini memiliki pemandangan indah yang banyak mulai dari pada sabana yang banyak ditumbuhi bunga edelweis, pemandangan matahari terbit yang sangat indah, lalu ada pemandangan paling indah di gunung ini pada ketinggian 2000 meter, yaitu Danau Segara Anak. Danau ini memiliki keunikan yaitu di tengah-tengah danau tersebut ada sebuah gunung kecil yang dikenal dengan Gunung Barujari.";
  let img = document.getElementById("main-img");
  img.src = "assets/img/img1.png";
}
function lookBromo() {
  let konten = document.getElementById("main");
  konten.scrollIntoView();
  let h = document.getElementById("main-header");
  h.innerHTML = "Gunung Bromo";
  let p = document.getElementById("main-paragraph");
  p.innerHTML =
    "Gunung Bromo terletak di Kabupaten Probolinggo, Pasuruan, Lumajang, dan Malang. Gunung ini memiliki ketinggian 2.329 mdpl dan merupakan gunung yang masih aktif. Gunung ini juga masih satu kawasan dengan Gunung Semeru yaitu kawasan Taman Nasional Bromo Tengger Semeru.<br>Gunung Bromo tidak pernah sepi dengan pengunjung. Bahkan pemerintah Jawa Timur telah menetapkan bahwa Gunung Bromo adalah destinasi wisata unggulan. Hal tersebut sangat pantas karena pesona lama gunung ini yang luar biasa dan juga layak untuk dipromosikan sebagai wisata Jawa Timur.<br>Gunung ini dikenal dengan keindahan sunrise dan sunset-nya. Jika kamu mendaki sampai puncaknya yaitu Pananjakan maka akan disambut dengan pemandangan berupa Gunung Semeru.";
  let img = document.getElementById("main-img");
  img.src = "assets/img/img2.jpg";
}
