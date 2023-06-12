// Write a JavaScript function to generate a random integer.

// Input: rand(min,max);

// console.log(rand(20,1)); console.log(rand(1,10)); console.log(rand(6)); console.log(rand());

// Output: 15 5 1 0



function generate(min=0,max=0){
	return (Math.random() * (max - min) + min);
	
}

document.write("Random numbers between 1 to 20 : "+generate(20,1))
document.write("<br>")
document.write("Random numbers between 1 to 10 : "+generate(1,10))
document.write("<br>")
document.write("Random numbers between 0 to 6 : "+generate(6))
document.write("<br>")
document.write(generate())