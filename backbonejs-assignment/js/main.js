
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//Create Vehicle model

var Vehicle = Backbone.Model.extend({
    idAttribute: "registrationNumber",
    default:{
        registrationNumber: "0000"
    },

    urlRoot: "api/vehicles",

    validate: function(attrs){
        if(!attrs.registrationNumber){
            return "registrationNumber is required.";
        }
    },

    start: function(){
        console.log("Vehical started.");
    }
});

var vehicle = new Vehicle();

// Create Car model

var Car = Vehicle.extend({

    start: function(){

        // Vehicle.prototype.start.apply(this); // To call method of extended model
        console.log("Car with registration number "+ this.get("registrationNumber") +" Started.");
    }
});

var car = new Car({
    registrationNumber: "XLI887",
    color: "Blue"
});

car.unset("registrationNumber");

if(!car.isValid()){
    console.log(car.validationError);
}

car.set("registrationNumber","XLI887");

if(!car.isValid()){
console.log(car.validationError);
}

car.start();

