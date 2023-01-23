class Telephone {
  constructor() {
    this.observers = [];
    this.phoneNumbers = [];
  }

  addPhoneNumber(number) {
    this.phoneNumbers.push(number);
  }

  removePhoneNumber(number) {
    this.phoneNumbers = this.phoneNumbers.filter((n) => n !== number);
  }

  dialPhoneNumber(number) {
    if (!this.phoneNumbers.includes(number)) {
      console.log(`Phone number ${number} not found.`);
      return;
    }
    this.notifyObservers(number);
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notifyObservers(number) {
    this.observers.forEach((observer) => observer.onDial(number));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  onDial(number) {
    if (this.name === 'printNumber') {
      console.log(`Dialing ${number}`);
    } else if (this.name === 'printMessage') {
      console.log(`Now dialing ${number}`);
    }
  }
}

const phone = new Telephone();
phone.addObserver(new Observer('printNumber'));
phone.addObserver(new Observer('printMessage'));

phone.addPhoneNumber('2347023232');
phone.dialPhoneNumber('2347023232');
