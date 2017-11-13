let store = { drivers: [{}], passengers: [{}], trips: [{}] };

let driverId = 0;

class Driver {
    public name: string;
    public id: number;

    constructor(name: string) {
        this.name = name;
        this.id = ++driverId;

        store.drivers.push(this);
    }
    public trips() {
        return store.trips.filter(trip => {
            return trip.driverId === this.id;
        });
    }
    public passengers() {
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
    public name: string;
    public id: number;

    constructor(name: string) {
        this.name = name;
        this.id = ++passengerId;

        store.passengers.push(this);
    }

    public trips() {
        return store.trips.filter(trip => {
            return trip.passengerId === this.id;
        });
    }

    public drivers() {
        const tripsArray = this.trips().map(trip => trip.driverId);
        return store.drivers.map(driver => {
            for (const value of tripsArray) {
                if (driver.id === value) {
                    return driver;
                }
            }
    });
}

let tripId = 0;

class Trip {
    public id: number;
    public driverId: number;
    public passengerId: number;

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

    public trips() {
        return store.trips.filter(trip => {
            return trip.id === this.id;
        });
    }
    public passenger() {
        const trip = this.trips().map(trip => trip.passengerId);
        return store.passengers.find(passenger => {
            for (const value of trip) {
                if (passenger.id === value) {
                    return passenger;
                }
            }
        });
    }
    public driver() {
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
