class car {
    brand;
    model;
    year;
    
    constructor(brand,model, year){
        this.brand  = brand; 
        this.model = model;
        this.year   =  year;
    
    }
    displaydetails(){
        console.log(`This car is a ${this.brand} ${this.model} ${this.year}.`);
    
     }
    }
    const mycar = new car("bmw","x5","2015");
    mycar.displaydetails();
    