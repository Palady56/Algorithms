// alert("Спасибо")
//window.addEventListener("load", (Event) => {
//    console.log("page is fully loaded")
//});

//let number = 1
//let string = "1345341"
//let bool = true
//let array = ['efqadf', 'asdggas', 79]
//let obj = {
//    name: "Bob",
//    number: 34,
//    age: 44,
//}

//let product = {
//   price: 45,
//   quantity: 0
//}


//class Cars {
//constructor(color='white', type='sedan', price=15000) {
//this.color = color
//this.type = type
//  this.price = price
//}

//getFullPrice() {
// let fullPrice = this.price * 1.3 
//   return fullPrice
//}

//getColor() {
//  return this.color
//}

// setColor(newColor) {
//     this.color = newColor

//  }
//}

//let Toyota = new Cars()
//let Mitsubishi = new Cars("green", "hechback", 43000)

//Mitsubishi.setColor("grey")

//console.log(Toyota.getFullPrice());
//console.log(Mitsubishi.getColor());
// let array = [1, 2, 3, 4, 5, 132]

//  let number = 1
//  if (number > 2){
//      console.log("Больше 2");
//  } else{
//       console.log("Меньше 2");
//  }



//  console.log(array.length);

//  for (let i=0; i < array.length; i++) {
//      console.log(array[i] + 5);
//  }

//  for (let k = 0; k <= 100 ; k = k + 2) {
//     console.log(k);
//     console.log('+2')
//  }

//  for (let i = 0; i < array.length; i++) {
//     console.log(array[i] * 1.3) ; //30%
//  }
//  arrray.forEach(item => {

//     console.log(item);

// });

// const a = 12;
// const b = -20

// console.log(~a);
// Output: -13
// console.log(~b)
// Output: 19


// function alphabetPosition(text) {

//   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
//   text = text.toLowerCase()
//   let result = ''
//   let separator = ''

//   for (let i = 0; i < text.length; i++) {
//     let res = alphabet.indexOf(text[i])
//     if (res !== -1) {
//       result = result + separator + (res + 1)
//       separator = ' '
//     }
//   }  

//   return result
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock.")); 

// let name = 2356
// var nameVar = "ggg"
// const nameConst = Math.PI


// class Cars{
//   constructor(color, type, price){
//     this.color = color
//     this.type = type
//     this.price = price
//   }

// getFullPrice(){
//   let FullPrice = this.price * 1.5
//   return FullPrice
// }


// }

// let Mercedes = new Cars('green', 'sedan', 36765)
// console.log(Mercedes);

// function highAndLow(numbers) {
// let min = '0'
// let max =
// separator = ' '
// let numArray = ['1', '2', '3', '4', '5']
// for (let i = 0; i < numbers.length; i++) {
//   let res = 
//  if () {

//  }

// return result

//   let min = Number(numbers[0]);
//   let max = Number(numbers[0])
//   numbers = numbers.split(' ')

//   for (let i = 0; i < numbers.length; i++) {
//     if (Number(numbers[i]) < min) {
//       min = Number(numbers[i])
//     }

//     if (Number(numbers[i]) > max) {
//       max = Number(numbers[i])
//     }
//   }

//   return min + ' ' + max
//   // return Math.max(...numbers.split('')) + ' ' + Math.min(...numbers.split(''))
// }

// let result = highAndLow("10 2 -3 4 5");

// console.log(result);

// function fizBaz(numbers) {
//   for (let i = 1; i <= numbers; i++) {
//     if (i % 3 === 0 && i % 5 === 0 ) {
//       console.log('fizbaz');
//     }

//     else if (i % 5 === 0) {
//       console.log('baz');
//     }

//     else if (i % 3 === 0) {
//       console.log('fiz');
//     }

//     else{
//       console.log(i)
//     }

//   }
//   return numbers
// }

// let result = fizBaz(100);

// console.log(result);

// function sumNatural(number) {

//   if (number < 0) {
//     return 0;
//   }

//   let calc = 0
//   for (let i = 3; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       calc += i
//     }

//   }

//   return calc;
// }

// console.log(sumNatural(10))


// function facebook(nameArray) {
//   let nameLength = nameArray.length

//   switch (nameLength) {
//     case 0:
//       return "No one likes it";
//       break;

//     case 1:
//       return nameArray[0] + ' likes this'
//       break;

//     case 2:
//       return nameArray[1] + ' and ' + nameArray[0] + ' like this';
//       break;

//     case 3:
//       return nameArray[0] + ', ' + nameArray[1] + ' and ' + nameArray[2] + ' like this';
//       break;
  
//     default:
//       return nameArray[0] + ', ' + nameArray[1] + ' and ' + (nameArray.length - 2) + ' others like this'
//       break;
//   }
  
// }

// console.log(facebook([]));
// console.log(facebook(["Peter"]));
// console.log(facebook(["Jacob", "Alex"]));
// console.log(facebook(["Peter", "Jacob", "Alex"]));
// console.log(facebook(["Peter", "Jacob", "Alex", "Jacob", "Alex"]));

// function narcissisticNumber(number) {
//   let stringNumber = String(number);
//   let degree = String(number).length;

//   let result = 0

//   for (let i = 0; i < degree; i++) {
//     result += Math.pow(Number(stringNumber[i]), degree)
    
//   }

//   return result === number
// }

// console.log(narcissisticNumber(153));
// console.log(narcissisticNumber(1652));

// let arr = [45, 8, 0, 23, 1, 135]

// console.log(arr.sort((a, b) => { return a - b }));

function redGreenBlue(r, g ,b) {
  // console.log(r.toString(16));
  // console.log(g.toString(16));
  // console.log(b.toString(16));
  if (r > 255) r = 255
  if (r < 0 ) r = 0
  if (g > 255) g = 255
  if (g < 0 ) g = 0
  if (b > 255) b = 255
  if (b < 0 ) b = 0

  let red, green, blue = ''

  if (r < 16) {
    red = '0' + r.toString(16)
  } else{
    red = r.toString(16)
  }

  if (r < 16) {
    green = '0' + g.toString(16)
  } else{
    green = g.toString(16)
  }

  if (r < 16) {
    blue = '0' + b.toString(16)
  } else{
    blue = b.toString(16)
  }

  let result = red + green + blue

  return result.toUpperCase()

}

console.log(redGreenBlue(-7899, 456, 126))

