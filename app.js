var cars = {
    toyota: {
        camry: {
            images: "images/camry.jpg",
            name: "Camry",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$33.267",

        },
        Corolla: {
            images: "images/corolla.png",
            name: "Corolla",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$23.160",

        },
        Prius: {
            images: "images/prius.jpg",
            name: "Prius",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$34.563",
        },
        Tundra: {
            images: "images/tundra.jpg",
            name: "Tundra",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$52.065",
        },
    },
    honda: {
        Civic: {
            images: "images/civic.jpg",
            name: "Civic",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$32.065",
        },
        City: {
            images: "images/city.jpg",
            name: "City",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$12.065",
        },
        Accord: {
            images: "images/accord.jpg",
            name: "Accord",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$23.065",
        },

    },
    suzuki: {
        Swift: {
            images: "images/swift.jpg",
            name: "Swift",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$9.065",
        },
        Alto: {
            images: "images/alto.png",
            name: "Alto",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$5.050",
        },
        Mehran: {
            images: "images/mehran.jpg",
            name: "Mehran",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$2.045",
        },

    },
    kia: {
        Sorento: {
            images: "images/sorento.jpg",
            name: "Sorento",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$2.045",
        },
        Sportage: {
            images: "images/sportage.jpg",
            name: "Sportage",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$2.045",
        },
        Stonic: {
            images: "images/stonic.jpg",
            name: "Stonic",
            engine: "Smart Stream 2.5 MPi",
            fuelTank: "60 Ltr",
            maxPower: "132 (180)/6200",
            color: ["Black", "White", "Red"],
            price: "$2.045",
        },
    },
};


var company = document.getElementById("company");
var model = document.getElementById("model");
var allCars = document.getElementById("allCars");

for (var key in cars) {
    company.innerHTML += `<option value="${key}">${key.toUpperCase()} </option>`;

    for (var key1 in cars[key]) {
        var carskey = cars[key][key1]
        console.log(cars[key][key1])
        allCars.innerHTML += `
    <div class ="row">
    <div class = "col">
    <div><img class="grow" src="${carskey.images}"/></div>
    <h3 class="heading">${key.toLocaleUpperCase()}</h3>
    <h4>${carskey.name || "unknown"}</h4>
    <h5>${carskey.color}</h5>
    <h5>${carskey.price}</h5>
    <h5>${carskey.engine}</h5>
    <h5>${carskey.fuelTank}</h5>
    <h5>${carskey.maxPower}</h5>
    </div></div>`;
    }
}
function onChangeCompnay() {
    model.innerHTML = "";

    for (var key in cars[company.value]) {
        model.innerHTML += `
        <option value="${key}"> ${key.toUpperCase()}</option>`;
    }
}
function filtersCars() {
    var carData = cars[company.value][model.value];
    var selectedCompany = company.value;
    var selectedModel = model.value;
    var allCars = document.getElementById('allCars');

    if (selectedCompany && selectedModel) {
        allCars.innerHTML = `
        <div class="row row2">
        <div class="col col2">
        <div><img class="grow" src="${carData.images}" style="width:200px;height:200px;" /></div>
          <h3 class="heading">${carData.name.toUpperCase() || "CarName"}</h3>
          <h5>${carData.color}</h5>
          <h5>${carData.price}</h5>
          <h5>${carData.engine}</h5>
          <h5>${carData.fuelTank}</h5>
          <h5>${carData.MaxPower}</h5>
        </div>
      </div>`;
    }
}