{
  function calculateTax(income: number, year: number = 2020): number {
    // narrowing
    if (year < 2023) {
      return income * 1.2;
    }
    return income * 1.3;
  }

  const tax = calculateTax(50, 2023);

  console.log(tax);
}
