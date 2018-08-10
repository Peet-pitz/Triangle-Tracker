var sideA = parseInt(prompt("Enter side a"));
var sideB = parseInt(prompt("Enter side b"));
var sideC = parseInt(prompt("Enter side c"));
 
        if (sideA === sideB && sideB === sideC) {
            alert ("Equilateral Triangle. All sides are equal");
      } else if (((sideA + sideB) <= sideC) || ((sideA + sideC) <= sideB) || ((sideB + sideC) <= sideA)) {
        alert("Not a Triangle. Sum of any two sides is less than or equal to the third side");
      } else if (sideA === sideB && sideB !== sideC || sideA !== sideB && sideA === sideC || sideB === sideC && sideB !== sideA) {
        alert("Isosceles Triangle. Exactly two sides are equal");
      }  else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
            alert("Scalene Triangle. No sides are equal");
      };

     