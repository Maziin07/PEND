    function average(scores) {
        if (scores.length === 0) {
        return 0; 
        }
        const sum = scores.reduce((acc, current) => acc + current, 0);
        return sum / scores.length; 
    }
    
    const notas = [8, 7.5, 9, 10];
    const media = average(notas);
    console.log(media); 