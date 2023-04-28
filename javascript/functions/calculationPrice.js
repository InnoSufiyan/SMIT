function calculationOfPrice(pp) {
    let chargesFromCustomer;
    if (pp > 100) {
        chargesFromCustomer = pp
    } else if (pp > 50 && pp < 100) {
        chargesFromCustomer = pp + 5 + (pp * .3)
    } else {
        chargesFromCustomer = pp + 5
    }
    console.log(chargesFromCustomer)
}

export default calculationOfPrice