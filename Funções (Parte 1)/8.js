function primoSimples(){
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    console.log("Primos:");
    console.log("2:", isPrime(2)); 
    console.log("3:", isPrime(3));    
    console.log("4:", isPrime(4));    
    console.log("17:", isPrime(17));  
    console.log("20:", isPrime(20)); 
}