function myFunction() {
    myVar = setInterval(changeColor, 1000);
  }

  function changeColor() {
    var x = document.getElementById("a");
    if (x.style.color == "yellow") {
      x.style.color = "red";
    } else if (x.style.color == "red") {
      x.style.color = "green";
    } else {
      x.style.color = "yellow";
    }

    var y = document.getElementById("b");
    if (y.style.color == "green") {
      y.style.color = "yellow";
    } else if (y.style.color == "yellow") {
      y.style.color = "red";
    } else {
      y.style.color = "green";
    }

    var z = document.getElementById("c");
    if (z.style.color == "red") {
      z.style.color = "green";
    } else if (z.style.color == "green") {
      z.style.color = "yellow";
    } else {
      z.style.color = "red";
    }
  }