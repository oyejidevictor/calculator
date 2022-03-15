function switchON() {
  document.getElementById("OFF").style.border = "black 2px solid";
  document.getElementById("OFF").style.borderRadius = "10px";
  document.getElementById("OFF").style.display = "block";
  screen.value = "";
}



function switchOFF() {
    document.getElementById("OFF").style.display = "none";
    screen.value = "";
}

function Version() {
    alert(" INACTIVE KEY!!! \n A NEWER VERSION IS COMING SOON.");
}

var screen = document.form.result;
screen.value = "";

//numbers
function Num(value){
    screen.value += value;
}

// Operator
function Operator(value){
    screen.value += value;
}

function Log(){
  screen.value += "Log";
}

function Log10(){
  screen.value += "Log10(";
}

function Exp(){
  screen.value += "exp(";
}

function TenPow(){
  screen.value += "10^";
}

function PI(value){
  screen.value += value;
}

function E(){
  screen.value += "e";
}

function Per(){
  screen.value += "%";
}

function Sqrt(value){
  screen.value += value;
}

//give pow default of 2
function Xsq(){
  screen.value = Math.pow(2, screen.value);
}

//Factorial
factor = function (num){
  if(num === 0 || num === 1)
  return 1;
  for (var i = num -1; i >=1; i--){
    num *= i;
  }
  return num;
}
function factorial(){
  screen.value += factor(screen.value);
}

function Car(){
  screen.value += "^";
}

function Bopen(){
  screen.value += "(";
}

function Bclose(){
  screen.value += ")";
}


//Dot
function Dot(value){
  screen.value += value;
}

//Angles
function Sin(){
  screen.value += "sin(";
}

function Tan(){
  screen.value += "tan(";
}

function Cos(){
  screen.value += "cos(";
}

function Asin(){
  screen.value += "asin(";
}

function Atan(){
  screen.value += "atan(";
}

function Acos(){
  screen.value += "acos(";
}

function Asinh(){
  screen.value += "asinh(";
}

function Atanh(){
  screen.value += "atanh(";
}

function Acosh(){
  screen.value += "acosh(";
}


// DEL
function DEL(){
  if (/(asinh|acosh|atanh)$/.test(screen.value)){
    screen.value = screen.value.slice(0, -5);
  }
  else if (/(asin|acos|atan)$/.test(screen.value)){
    screen.value = screen.value.slice(0, -4);
  }
  else if (/(sin|cos|tan)$/.test(screen.value)){
    screen.value = screen.value.slice(0, -3);
  }
  else{
    screen.value = screen.value.slice(0, -1);
  }
}


//AC
function AC(){
    screen.value = screen.value.slice(0, -screen.value.length);
}

//Equal to
function EqualTo(){
 if(/(sin)$/.test(screen.value)){
  res = screen.value.replace("sin", "");
  screen.value = Math.sin(res);
  console.log(screen.value)
 }
 else if(/(cos)$/.test(screen.value)){
  res = screen.value.replace("cos", "");
  screen.value = Math.cos(res);
 }
 else{
  res = screen.value.replace("tan", "");
  screen.value = Math.tan(res);
 }
  // res = screen.value.replace("cos(", "");
  // screen.value = Math.cos(res);
  // res = screen.value.replace("tan(", "");
  // screen.value = Math.tan(res);
  // res = screen.value.replace("asin(", "");
  // screen.value = Math.asin(res);
  // res = screen.value.replace("acos(", "");
  // screen.value = Math.acos(res);
  // res = screen.value.replace("atan(", "");
  // screen.value = Math.atan(res);
  // res = screen.value.replace("asinh(", "");
  // screen.value = Math.asinh(res);
  // res = screen.value.replace("acosh(", "");
  // screen.value = Math.acosh(res);
  // res = screen.value.replace("atanh(", "");
  // console.log(res);
  // screen.value = Math.atanh(res);
  
  // if(/(sin)$/.test(screen.value) == /(sin)$/){
  //   res = screen.value.replace("sin", "");
  //   screen.value = Math.sin(res);
  // }
  // else{
  //   console.log(screen.value);
  //   screen.value = eval(screen.value);
  //   console.log(screen.value);
  // }
  
  // Ans = screen.value;
}


// function factorial(num){
//   if(num === 0 || num === 1)
//   return 1;
//   for (var i = num -1; i >=1; i--){
//     num *= i;
//   }
//   return num;
// }
// console.log(factorial(6));

// if (screen.value || /sin /.test(screen.value == true)){
//   screen.value = eval(screen.value);
// }
// else {
//   var res = screen.value.slice(4);
//   screen.value = Math.sin(res * Math.PI / 180);

//   var res = screen.value.slice(4);
//   screen.value = Math.cos(res * Math.PI / 180);

//   var res = screen.value.slice(4);
//   screen.value = Math.tan(res * Math.PI / 180);

//   Math.sqrt(64);

//   Math.LN10();
// }

//Round
function Rnd(){
  screen.value = Math.round(screen.value);
}

//Ans
function Answer(){
  screen.value = Ans;
}
