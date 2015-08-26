//Ryan Atkinson - Coder
/**
 * Part 1
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */


//creates an array of letters and then refeeds them last to first
function reverse(str){
    var fwdArray = String(str).split('');
    output = '';
    for(var i = 0; i < str.length; i++){
      output += fwdArray[(str.length - 1) - i];
    }
    return output;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 2
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

//creates an array of words and then returns the largest
function findLongestWord(sentence){
    var wordArray = String(sentence).split(' ');
    var output = wordArray[0];                  //initialize for comparison"ability"

    for(i = 0; i < wordArray.length; i++){
      if(wordArray[i].length > output.length){  //checks for a longer word than last
        output = wordArray[i];                  //output updates for any longer words
      }
    }
    return output;
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Florida") === "Florida")

/**
 * Part 3
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr){
    var sum = 0;
    for(i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

/**
 * Part 4
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
    return a + b;
}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * Part 5
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD(a, b){
  var big = 0;
  var small = 0;
  var solution = 0;

  if (a >= b ) {                  //organize the relative variable sizes
    big = a;
    small = b;
  } else {
    big = b;
    small = a;
  }

  var bigFactors = [];
  var smallFactors = [];
  var commonFactors = [];

  if (big % small === 0) {                   //check for a clean division
    return small;
  } else {                                   //beginning of "else" condition

    for (i = 1; i < small; i++){             //create an array of the factors of small
      if (small % i === 0){
        smallFactors.push(i);
      }
    }

    for (i = 1; i < big; i++){                //create an array of the factors of big
      if (big % i === 0){
        bigFactors.push(i);
      }
    }

   for (i = 0; i < smallFactors.length; i++) {  //check for intersecting array values
     for (j = 0; j < bigFactors.length; j++) {  //and push into common array
       if (smallFactors[i] === bigFactors[j]){
         commonFactors.push(smallFactors[i]);
       }
     }
   }
  solution = commonFactors[commonFactors.length - 1]; //solution is largest common
  return solution;
  }                                           // end of "else" condition
}


console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

/**
 * Part 6
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

function LCM(a, b){
    var product = a * b;
    var solutions = [];

    if(product === 0){                      //check for either value zero
      if(a === 0){
        return b;                           //solution is then nonzero input
      }else{
        return a;
      }
    }else{                                  //find all values less than product
      for(i = 1; i <= product; i++){        //...that both are divisible by
        if( i % a === 0 && i % b === 0 ){
          solutions.push(i);
        }
      }
      return solutions[0];                  //return smallest value in array
    }
}

console.assert(LCM(10,10) === 10)
console.assert(LCM(2,5) === 10)
console.assert(LCM(3,6) === 6)
console.assert(LCM(0,1) === 1)
