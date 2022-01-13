function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
} // gerando numero aleatorio

// Funcao calback

function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, 500);
}
function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, 1000);
}
function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, 800);
}

f1(function () {
  f2(function () {
    f3(function () {
      console.log("Ola mundo");
    });
  });
});
