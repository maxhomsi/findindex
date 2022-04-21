const find = function (arr, callback){
    for(let i=0 ; i<arr.length ; i++){
        let x = arr[i];
        let pass = callback(x);
        if(pass){
            return x;
        }

    }
    return undefined
}


const findIndex = function (arr, callback){
    for(let i=0 ; i<arr.length ; i++){
        let x = arr[i];
        let pass = callback(x);
        if(pass){
            return i;
        }

    }
    return undefined
}
let carros = ["Belina", "Gol Bolinha", "Caveirao", "Kombi" ];
let melhorCarro = findIndex(carros, function(el){
    if(el === "Belina"){
    return true;
    }
})
console.log(`The best worst car is ${melhorCarro}`)


let valor = find(carros, function(el){
    if(el.length === 5){
        return true;
    }
})

console.log(`The cheapest worst car is ${valor}`)