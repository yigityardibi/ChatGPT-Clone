/* 
  ! tarayıcıların depolama alanları
  localStorage ve sessionStorage, tarayıcının sunduğu iki farklı web depolama alanı.
*/

// localStorage'a veri ekleme.
localStorage.setItem("kullaniciAdi", "yigit");
// localStoragedan veri çekme
const kullaniciAdi = localStorage.getItem("kullaniciAdi");
console.log(kullaniciAdi);
