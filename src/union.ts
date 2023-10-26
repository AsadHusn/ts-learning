{
  function inchesToCm(inches: number | string) {
    // narrowing the type
    if (typeof inches === "number") return inches * 2.54;
    else return parseInt(inches) * 2.54;
  }

  const cm = inchesToCm("6 inches");
  console.log(cm + " cm");
}
