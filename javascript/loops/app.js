var myGymExercise = "Dumbler uthao aur neechey le kar jao"


// initialization  condition  increment
// for (let a = 1; a < 13; a++) {
//     console.log(myGymExercise + " " + a)
// }
var bakeryItems = ["pastry", "bread", "jam", "colddrinks", "cake", "jelly", "juices"]

var productToBuy = prompt("Which product you want to buy")


//7

var flag;

var boxNumber;


for (let a = 0; a < bakeryItems.length; a++) {
    if (productToBuy === bakeryItems[a]) {
        flag = true
        boxNumber = a
    }
}

if (flag) {
    console.log(`Yes this product ${productToBuy} is available at box number ${boxNumber}`)
} else {
    alert("aagey chaley jao")
}

