const check = document.querySelector("#check");
const input = document.querySelector("#input");

const weather = {
    temperature: 0, 
    humidity: null, 
    windSpeed: null, 


    isTemperatureBelowZero: function() {
        return this.temperature < 0;
    }
};


function checkTemperature() {
    weather.temperature = parseFloat(input.value);

    if (weather.isTemperatureBelowZero()) {
        console.log("Температура нижче 0 градусів Цельсія");
    } else {
        console.log("Температура вище або рівна 0 градусів Цельсія");
    }
}

check.addEventListener("click", checkTemperature);