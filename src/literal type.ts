{
  // Literal (exact, specific) with union
  type Quantity = 50;
  type Metric = "cm" | "inch";

  const quantity: Quantity = 50;

  const size: Metric = "cm";

  console.log(quantity, size);
}
