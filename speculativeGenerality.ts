// Useless abstract classes
class Employee {
  name: string;
  height: string;
  numberOfTimesLateForWork: number;
}

class Contractor extends Employee {
  employeeStartDate: string;
  employeeEndDate: string;
}

class Manager extends Employee {
  FullName: string;
  salary: number;
}

class Customer {
  name: string;
  location: string;
}

// Inline function
function employeeRating(employee: Employee) {
  return moreThanFiveLateDays(employee) ? 2 : 1;
}

function moreThanFiveLateDays(employee: Employee) {
  return employee.numberOfTimesLateForWork > 5;
}

// another example

function reportLines(customer: Customer) {
  const lines = [];
  gatherCustomerData(lines, customer);
  return lines;
}

function gatherCustomerData(out: any[], customer: Customer) {
  out.push(["name", customer.name]);
  out.push(["location", customer.location]);
}

// inline class

class TranckingInformation {
  private _shippingCompany: any;
  private _trackingNumber: any;

  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}

class Shipment {
  private _trackingInformation: TranckingInformation;

  get trackingInfo() {
    return this._trackingInformation.display;
  }
  get trackingInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}

// Change function Declaration
function circum(r: number) {
  return 2 * Math.PI * r;
}

class Book {
  private _reservations: any[];
  private _capacity = 20;

  // need to add a way to indicate if reservation should go in usual queue or high priority queue
  addReservation(
    customer: Customer,
    isPriority: boolean,
    needsAssistance: boolean
  ) {
    if (!this.areFullyBooked) {
      this._reservations.push(customer);
    } else {
      throw new Error("we are fully booked");
    }
  }

  areFullyBooked() {
    return this._reservations.length === this._capacity;
  }
}

// example of a test
it("should only make reservation if reservations is not full", () => {
  const book = new Book();
  expect(book.areFullyBooked).toBeTruthy();
  expect(book.addReservation).toThrow();
});
