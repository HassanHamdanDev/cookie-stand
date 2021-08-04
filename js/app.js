'use strict';

let sales = document.getElementById("sales");

let hours = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];

let locationArray = [];

let allTotalsPerHours = 0;
let totalsPerHours;

let tableElement = document.createElement('table');
sales.appendChild(tableElement);

let tr1Element = document.createElement('tr');
tableElement.appendChild(tr1Element);


function Location(locationName, min, max, avg, customers, cookiesResult, cookiesTotal) {
    this.locationName = locationName;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customers = customers;
    this.cookiesResult = cookiesResult;
    this.cookiesTotal = cookiesTotal;
    locationArray.push(this);
};

Location.prototype.getCookiesResult = function () {
    for (let i = 0; i < hours.length; i++) {
        let oneCustmer = Math.round(Math.random() * (this.max - this.min + 1) + this.min);
        this.customers.push(oneCustmer);
        this.cookiesResult.push(Math.round(this.customers[i] * this.avg));
        this.cookiesTotal += this.cookiesResult[i];
    }
};

Location.prototype.render = function () {

    let tr2Element = document.createElement('tr');
    tableElement.appendChild(tr2Element);

    let th1Element = document.createElement('th');
    th1Element.textContent = this.locationName;
    tr2Element.appendChild(th1Element);

    for (let j = 0; j < this.cookiesResult.length; j++) {
        let td1Element = document.createElement('td');
        td1Element.textContent = this.cookiesResult[j];
        tr2Element.appendChild(td1Element);
    }

    let td1Element = document.createElement('td');
    td1Element.textContent = this.cookiesTotal;
    tr2Element.appendChild(td1Element);

};

function salesHours() {

    hours.unshift(" ");
    hours.push("Daily Location Total")
    for (let i = 0; i < hours.length; i++) {
        let thHours = document.createElement('th');
        thHours.textContent = hours[i];
        tr1Element.appendChild(thHours);
    }
    hours.shift();
    hours.pop();
};

function totalHours() {

    let tr3Element = document.createElement('tr');
    tableElement.appendChild(tr3Element);

    let th1Element = document.createElement('th');
    th1Element.textContent = "Total";
    tr3Element.appendChild(th1Element);

    for (let k = 0; k < hours.length; k++) {
        totalsPerHours = 0;
        for (let j = 0; j < locationArray.length; j++) {
            totalsPerHours += locationArray[j].cookiesResult[k];
        }
        let tdTotals = document.createElement('td');
        tdTotals.textContent = totalsPerHours;
        tr3Element.appendChild(tdTotals);
    }

    for (let j = 0; j < locationArray.length; j++) {
        allTotalsPerHours += locationArray[j].cookiesTotal;
    }

    let tdallTotal = document.createElement('td');
    tdallTotal.textContent = allTotalsPerHours;
    tr3Element.appendChild(tdallTotal);
};


let seattle = new Location("Seattle", 23, 65, 6.3, [], [], 0);
let tokyo = new Location("Tokyo", 3, 24, 1.2, [], [], 0);
let dubai = new Location("Dubai", 11, 38, 3.7, [], [], 0);
let paris = new Location("Paris", 20, 38, 2.3, [], [], 0);
let lima = new Location("Lima", 2, 16, 4.6, [], [], 0);

salesHours();

for (let i = 0; i < locationArray.length; i++) {
    locationArray[i].getCookiesResult();
    locationArray[i].render();
};

totalHours();

let loctionForm = document.getElementById('newLocation');
loctionForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
    event.preventDefault();

    let newLocationName = event.target.locationName.value;
    let newminNumber = event.target.minNumber.value;
    let newmaxNumber = event.target.maxNumber.value;
    let newavgNumber = event.target.avgNumber.value;

    let newLocation = new Location(newLocationName, newminNumber, newmaxNumber, newavgNumber, [], [], 0);

    newLocation.getCookiesResult();
    newLocation.render();

    tableElement.deleteRow(locationArray.length);
    totalHours();
    
    loctionForm.reset();
};