// let str = "eshwar\"";
// console.log(str.length);
// // let word =Number.parseInt(str.slice(2))
// console.log(typeof word);

// const name ='Eshwar';
// let word ='hi'
// console.log( `i am "${word}" hello`);
let a=Math.random()*100;
a=Number.parseInt(a)
let inp;
score=100;
while(inp!=a){
    score=score-1;
    inp=prompt("Enter the number:");
    if(inp==a){
        console.log("congratulations")
        console.log(`you guess the actual number in ${100-score} chances`)
    }
    else if(inp>a && inp<100){
     console.log("your number is greater than the actual number.")
    }
    else if(inp<a && inp>0){
     console.log("your number is smaller than the actual number.")
    }
    else {
     console.log("Enter number between 1 to 100.")
    }

}
