'use strict';

let sales = document.getElementById("sales");

let hours = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];

const seattle = {
    locationName: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    getCustomers: function (min, max) {
        let customers = Math.floor(Math.random() * (max - min + 1) + min);
        return customers;
    },
    getCookiesPerHour: function (customers, avg) {
        let cookiesPerHour = Math.round(customers * avg);
        return cookiesPerHour;
    },
    cookiesResult: [],
    cookiesTotal: 0,
    getCookiesResult: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesResult.push(this.getCookiesPerHour(this.getCustomers(this.min, this.max), this.avg));
            this.cookiesTotal += this.cookiesResult[i];
        }
        return this.cookiesResult;
    },
    render: function () {
        let h3Element = document.createElement('h3');

        h3Element.textContent = this.locationName;
        sales.appendChild(h3Element);

        let ulElement = document.createElement('ul');
        sales.appendChild(ulElement);

        for (let i = 0; i < this.cookiesResult.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = hours[i] + " : " + this.cookiesResult[i] + " Cookies";
            ulElement.appendChild(liElement);
        }
        let liElement = document.createElement('li');
        liElement.textContent = "The Total for the Today is : " + this.cookiesTotal + " Cookies";
        ulElement.appendChild(liElement);
    }
}

const tokyo = {
    locationName: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    getCustomers: function (min, max) {
        let customers = Math.floor(Math.random() * (max - min + 1) + min);
        return customers;
    },
    getCookiesPerHour: function (customers, avg) {
        let cookiesPerHour = Math.round(customers * avg);
        return cookiesPerHour;
    },
    cookiesResult: [],
    cookiesTotal: 0,
    getCookiesResult: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesResult.push(this.getCookiesPerHour(this.getCustomers(this.min, this.max), this.avg));
            this.cookiesTotal += this.cookiesResult[i];
        }
        return this.cookiesResult;
    },
    render: function () {
        let h3Element = document.createElement('h3');

        h3Element.textContent = this.locationName;
        sales.appendChild(h3Element);

        let ulElement = document.createElement('ul');
        sales.appendChild(ulElement);

        for (let i = 0; i < this.cookiesResult.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = hours[i] + " : " + this.cookiesResult[i] + " Cookies";
            ulElement.appendChild(liElement);
        }
        let liElement = document.createElement('li');
        liElement.textContent = "The Total for the Today is : " + this.cookiesTotal + " Cookies";
        ulElement.appendChild(liElement);
    }
}

const dubai = {
    locationName: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    getCustomers: function (min, max) {
        let customers = Math.floor(Math.random() * (max - min + 1) + min);
        return customers;
    },
    getCookiesPerHour: function (customers, avg) {
        let cookiesPerHour = Math.round(customers * avg);
        return cookiesPerHour;
    },
    cookiesResult: [],
    cookiesTotal: 0,
    getCookiesResult: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesResult.push(this.getCookiesPerHour(this.getCustomers(this.min, this.max), this.avg));
            this.cookiesTotal += this.cookiesResult[i];
        }
        return this.cookiesResult;
    },
    render: function () {
        let h3Element = document.createElement('h3');

        h3Element.textContent = this.locationName;
        sales.appendChild(h3Element);

        let ulElement = document.createElement('ul');
        sales.appendChild(ulElement);

        for (let i = 0; i < this.cookiesResult.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = hours[i] + " : " + this.cookiesResult[i] + " Cookies";
            ulElement.appendChild(liElement);
        }
        let liElement = document.createElement('li');
        liElement.textContent = "The Total for the Today is : " + this.cookiesTotal + " Cookies";
        ulElement.appendChild(liElement);
    }
}

const paris = {
    locationName: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    getCustomers: function (min, max) {
        let customers = Math.floor(Math.random() * (max - min + 1) + min);
        return customers;
    },
    getCookiesPerHour: function (customers, avg) {
        let cookiesPerHour = Math.round(customers * avg);
        return cookiesPerHour;
    },
    cookiesResult: [],
    cookiesTotal: 0,
    getCookiesResult: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesResult.push(this.getCookiesPerHour(this.getCustomers(this.min, this.max), this.avg));
            this.cookiesTotal += this.cookiesResult[i];
        }
        return this.cookiesResult;
    },
    render: function () {
        let h3Element = document.createElement('h3');

        h3Element.textContent = this.locationName;
        sales.appendChild(h3Element);

        let ulElement = document.createElement('ul');
        sales.appendChild(ulElement);

        for (let i = 0; i < this.cookiesResult.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = hours[i] + " : " + this.cookiesResult[i] + " Cookies";
            ulElement.appendChild(liElement);
        }
        let liElement = document.createElement('li');
        liElement.textContent = "The Total for the Today is : " + this.cookiesTotal + " Cookies";
        ulElement.appendChild(liElement);
    }
}

const lima = {
    locationName: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    getCustomers: function (min, max) {
        let customers = Math.floor(Math.random() * (max - min + 1) + min);
        return customers;
    },
    getCookiesPerHour: function (customers, avg) {
        let cookiesPerHour = Math.round(customers * avg);
        return cookiesPerHour;
    },
    cookiesResult: [],
    cookiesTotal: 0,
    getCookiesResult: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesResult.push(this.getCookiesPerHour(this.getCustomers(this.min, this.max), this.avg));
            this.cookiesTotal += this.cookiesResult[i];
        }
        return this.cookiesResult;
    },
    render: function () {
        let h3Element = document.createElement('h3');

        h3Element.textContent = this.locationName;
        sales.appendChild(h3Element);

        let ulElement = document.createElement('ul');
        sales.appendChild(ulElement);

        for (let i = 0; i < this.cookiesResult.length; i++) {
            let liElement = document.createElement('li');
            liElement.textContent = hours[i] + " : " + this.cookiesResult[i] + " Cookies";
            ulElement.appendChild(liElement);
        }
        let liElement = document.createElement('li');
        liElement.textContent = "The Total for the Today is : " + this.cookiesTotal + " Cookies";
        ulElement.appendChild(liElement);
    }
}


seattle.getCookiesResult();
seattle.render();

tokyo.getCookiesResult();
tokyo.render();

dubai.getCookiesResult();
dubai.render();

paris.getCookiesResult();
paris.render();

lima.getCookiesResult();
lima.render();
