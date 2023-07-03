class uberprice{
    constructor(baseprice,kilometre,tax){
        this.baseprice=baseprice;
        this.kilometre=kilometre;
        this.tax=tax;
    }
}

const price = new uberprice(100,10,200); 

console.log(price);
