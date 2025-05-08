
    function countDown(n) {

        if (n <= 0) {
        return n;
        } else {
        console.log(n);
        return countDown(n-1);
        }
    }
    
    console.log(countDown(2));