let store = { drivers: [{}], passengers: [{}], trips: [{}] };
let driverId = 0;
class Driver {
    constructor(name) {
        this.name = name;
        this.id = ++driverId;
        store.drivers.push(this);
    }
    trips() {
        return store.trips.filter(trip => {
            return trip.driverId === this.id;
        });
    }
    passengers() {
        const tripsArray = this.trips().map(trip => trip.passengerId);
        return store.passengers.map(passenger => {
            for (const value of tripsArray) {
                if (passenger.id === value) {
                    return passenger;
                }
            }
        });
    }
}
let passengerId = 0;
class Passenger {
    constructor(name) {
        this.name = name;
        this.id = ++passengerId;
        store.passengers.push(this);
    }
    trips() {
        return store.trips.filter(trip => {
            return trip.passengerId === this.id;
        });
    }
    drivers() {
        const tripsArray = this.trips().map(trip => trip.driverId);
        return store.drivers.map(driver => {
            for (const value of tripsArray) {
                if (driver.id === value) {
                    return driver;
                }
            }
        });
    }
}
let tripId = 0;
class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;
        if (driver) {
            this.driverId = driver.id;
        }
        if (passenger) {
            this.passengerId = passenger.id;
        }
        store.trips.push(this);
    }
    trips() {
        return store.trips.filter(trip => {
            return trip.id === this.id;
        });
    }
    passenger() {
        const trip = this.trips().map(trip => trip.passengerId);
        return store.passengers.find(passenger => {
            for (const value of trip) {
                if (passenger.id === value) {
                    return passenger;
                }
            }
        });
    }
    driver() {
        const trip = this.trips().map(trip => trip.driverId);
        return store.drivers.find(driver => {
            for (const value of trip) {
                if (driver.id === value) {
                    return driver;
                }
            }
        });
    }
}
//# sourceMappingURL=index.js.map