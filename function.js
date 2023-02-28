function loadHTML() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("todo").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "sam.html");
    xhttp.send();
}

function loadMarco() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("todo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "Marco.html");
  xhttp.send();
}

function loadAkbar() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("todo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "Akbar.html");
  xhttp.send();
}

function loadJohan() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("todo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "Mainpage.html");
  xhttp.send();
}

$('#mc4header').css('background-color', 'blue').css('color', 'white');
