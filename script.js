// Your code here.
let h = '#';
let s = ' ';
let result = ' ';
let counter = 0;
 

// Rows
rows = 7
// Columns 
columns = 7 

while (counter <= 7) {
  for (let length = 0; length <= 7; length ++) {
    if (length % 2 == 0) {
      result += h;
    }
    else {result +=s};
    }
    
  result += '\n';
  counter ++; 
  if (counter % 2 == 0) {
    result += s
  }
  
};

console.log(result)






