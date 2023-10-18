{
  type Customer = {
    birthday: Date;
    greet: () => void;
  };

  function getCustomer(id: number): Customer | null {
    return !id
      ? null
      : { birthday: new Date(), greet: () => console.log("Holla") };
  }

  const customer = getCustomer(1);

  // optional property access operator
  console.log(customer?.birthday);

  // optional call to function
  customer?.greet();

  // optional array element access
  // const arr = undefined;
  const arr = null;
  console.log(arr?.[1]);
}
