const outputElement = document.getElementById("numero");

for (let i = 1; i <= 100; i++) {
    let numero = "";

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        numero = "FizzBuzz";
    } else if (i % 3 === 0) {
        console.log("Fizz");
        numero = "Fizz";
    } else if (i % 5 === 0) {
        console.log("Buzz");
        numero = "Buzz";
    } else {
        console.log(i);
        numero = i.toString();
    }

    const span = document.createElement("span");
    span.textContent = numero;
    outputElement.appendChild(span);

  
    if (numero === "FizzBuzz") {
        span.classList.add("fizz");
        span.classList.add("buzz");
    } else if (numero === "Fizz") {
        span.classList.add("fizz");
    } else if (numero === "Buzz") {
        span.classList.add("buzz");
    } else {
        span.classList.add("numero");
    }
}
    

/*const outputElement = document.getElementById("numero");

for (let i = 1; i <= 100; i++) {
    let numero = "";

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        numero = "Fizz Buzz";
        

    } else if (i % 3 === 0) {
        console.log("Fizz");
        numero = "Fizz";
       
        

    } else if (i % 5 === 0) {
        console.log("Buzz");
        
    
        
    } else {
        console.log(i);
        numero = i.toString(); 
      
    }

    const span = document.createElement("span");
    span.textContent = numero;
    outputElement.appendChild(span);


    // classi

    if(numero == "Fizz Buzz"){
        span.classList.add("fizz1");
        
    }

    else if(numero == "Fizz"){
        span.classList.add("fizz");
    }

    else if (numero == "Buzz")
    span.classList.add("buzz");

    else {
        span.classList.add("numero");
    }

}*/



    

   
