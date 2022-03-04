// Problem #6

/*
let a = -1;
let b = 4.5;
let c = 0;

if(a >= b && a >= c){
  console.log(a);
} else if(b >= a && b >= c){
  console.log(b);
} else{
  console.log(c);
}
*/

// Problem #7

/*
let a = 5;
let b = 5;
let c = 5;

if(a + b > c && a + c > b && b + c > a){
  console.log("Yes");
} else{
  console.log("No");
}
*/

// Problem #8

/*
let a = 5;
let b = 5; 
let c = 5;

if(a == b && a == c && b == c){
  console.log("Teng tomonli");
} else if(a == b || a == c || b == c){
  console.log("Teng yonli");
} else{
  console.log("Turli tomonli");
}
*/

// Problem #9

/*
let a = 3;
let b = 5;
let c = 4;

if((a*a + b*b) == c*c || (a*a + c*c) == b*b || (b*b + c*c) == a*a){
  console.log("Yes");
} else{
  console.log("No");
}
*/

// Problem #10

/*
let a = "abc";

if(a == 1){
  console.log("Bosh barmoq");
} else if(a == 2){
  console.log("Ko'rsatkich barmoq");
} else if(a == 3){
  console.log("O'rta barmoq");
} else if(a == 4){
  console.log("Nomsiz barmoq");
} else if(a == 5){
  console.log("Kichik barmoq");
} else{
  console.log("Noto'g'ri ma'lumot kiritildi");
}
*/

// Problem #11

/*
let a = 4056;
let count = 0;
let b = 0;

while(a > 0){
    b = (a % 10);
    a = a / 10;
    a = Math.floor(a)
    count += b;
}

console.log(count);
*/

// Problem #12

let n = 9;
let count = 0;

for(let i = 1; i <= n; i++){
  count += i;
}

console.log(count);

// Problem #13

/*
let  n = 33;
let count = 0;

for(let i = 1; i <= n; i++){
  if(i % 2 == 0){
    count += i;
  }
}

console.log(count);
*/

// Problem #14

/*
let n = 7;
let a = 0;
let b = 1;
let c = 0;

for(let i = 1; i <= n - 2; i++){
  c = a + b;
  a = b;
  b = c;
}

console.log(c);
*/

// Problem #15

/*
let n = 12121212122;
let plus = 0;
let minus = 0;

for(; n > 0;){
  let a = n % 10;
  if(a == 1){
    plus++;
  } else {
    minus++;
  }
  n /= 10;
  n = Math.floor(n);
}

if(plus < minus){
  console.log(plus);
} else{
  console.log(minus);
}
*/

// Problem #16

/*
let n = 150;
let r = 0;

for(; n > 0;){
  let a = n % 10;
  if(r < a){
    r = a;
  }
  n /= 10;
  Math.floor(n);
}

console.log(Math.floor(r));
*/

// Problem #17

/*
let a = 102;
let k = 2;
let count = 0;

for(; a > 0;){
  let n = a % 10;
  if(n < k){
    count++;
  }
  a /= 10;
  a = Math.floor(a);
}

console.log(count);
*/

// Problem #18

/*
let n = 101;
let s = 0;
let count = 0;

for(let i = 0; n > 0; i++){
  let a = n % 10;
  if(a != 0){
    s = 2**i;
    count += s; 
  }
  n /= 10;
  n = Math.floor(n);
}

console.log(count);
*/

// Problem #19

/*
let x = 5;
let bin = 0;
let rem = 0, i = 1;

for(; x > 0;){
  rem = x % 2;
  bin = bin + rem * i;
  console.log(bin);
  i = i * 10;
  x = Math.floor(x / 2);
}

console.log(bin);
*/


