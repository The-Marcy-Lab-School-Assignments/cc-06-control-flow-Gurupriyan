//1
let sum=0;                                   // var to collect the sum
function sumOfThreeAndFive(){               
  for (let i = 1; i < 1000; i++){           // for loop to iterate through 1000
      if (i % 3 === 0 || i % 5 === 0){      // checking the conditions
          sum += i;                         // adding sum to itslef and i
      }
  }
  return sum;
}

console.log(sumOfThreeAndFive());

function greaterNum(a, b){
  if (a % 1 === 0 && b % 1 === 0){    
      if (a > b){
          return `${a} is greater than ${b}`;
      } else if (a < b){
          return `${b} is greater than ${a}`;
      } else {
          return "Both integers are equal";
      }
    } else {
        return null;
    }
}

console.log(greaterNum(10, 10));

function oddAndEvenInFifteen(){
  for (let i = 0; i < 15; i++){
      if(i % 2 === 0){
          console.log(`${i} is even`);
      } else {
          console.log(`${i} is odd`);
      }
  }
}

oddAndEvenInFifteen();

function sortThreeNums(a, b, c){
  if ( a > b && b > c){
      return `${a}, ${b}, ${c} `;
  } else if (a > b && c > b){
      return `${a}, ${c}, ${b} `;
  } else if ( b > a && a > c){
      return `${b}, ${a}, ${c} `;
  } else if (b > a && c > a && b > c){
      return `${b}, ${c}, ${a} `;
  } else if (c > a && a > b){
      return `${c}, ${a}, ${b} `;
  } else if ( c > a && b > a){
      return `${c}, ${b}, ${a} `;
  }
}

console.log(sortThreeNums(50, 5, 2));


 

