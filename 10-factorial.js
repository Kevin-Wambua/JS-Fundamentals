function factorial(n) {
    if (isNaN(n) || n < 0 ) {
        return 1; // Factorial of NaN or negative number is 1
    } else if (n === 0 || n === 1) {
        return 1; // Base case: factorial of 0 or 1 is 1 
    } else {
        return n * factorial(n-1); //Recursive call for factorial calculation
    } 
    }
    const num = parseInt(process.argv[2]);
    console.log(factorial(num)); // Output the factorial of the number
