function pizzaCut (slices){
    return function sharePizza (people){
        return "Each person gets " + (slices/people).toFixed(2) + " slices of pizza"
    }
}

var sharePizza = pizzaCut(10);
console.log(sharePizza(3));
console.log(sharePizza(4));