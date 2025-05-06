function MáximoEmArray(){
    
    function getMax(arr) {
        let max = -Infinity; 
        for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
        max = arr[i]; 
        }
        }
        return max;
        }   
       
    const numeros = [3, 7, 2, 8, 5];
    console.log("O maior valor é:", getMax(numeros)); // Deve retornar 8
    
    }