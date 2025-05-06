function ConversãoDeTemperatura(){
    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
        }
        
       
        function toCelsius(fahrenheit) {
        return (fahrenheit)
        (32) * 5 / 9;
        }
       
        console.log("25°C em Fahrenheit é:", toFahrenheit(25));
        console.log("77°F em Celsius é:", toCelsius(77)); 
    }