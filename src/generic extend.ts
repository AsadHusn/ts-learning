{
  // extend keyword
  // generic constraints

  interface Person {
    username: string;
  }

  class Customer {
    constructor(public mobile: number) {}
  }

  function echo<
    T extends
      | number //
      | string //
      | { name: string } // object literal
      | Person // interface
      | Customer // class
  >(value: T): T {
    return value;
  }

  const ans = echo<Customer>(new Customer(300));
}
