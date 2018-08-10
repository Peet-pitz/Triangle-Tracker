var sideA = parseInt(prompt("Enter side a"));
var sideB = parseInt(prompt("Enter side b"));
var sideC = parseInt(prompt("Enter side c"));
        if (sideA === sideB && sideB === sideC) {
            alert ("Equilateral Triangle")
      } else if (sideA === sideB && sideB !== sideC || sideA !== sideB && sideA === sideC || sideB === sideC && sideB !== sideA) {
          alert("Isosceles Triangle")
      } else if (sideA !== sideB && sideB !== sideC) {
          alert("Scalene Triangle");
      };