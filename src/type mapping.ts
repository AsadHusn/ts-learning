{
  // type mapping is to create duplicate type
  // using index signature property & keyof operator

  interface IProduct {
    name: string;
    age: number;
  }

  // type will be used to create mapping
  type ReadOnly<T> = {
    readonly [k in keyof T]: T[k];
  };

  type Optional<T> = {
    [k in keyof T]?: T[k];
  };
  // and so on utility classes available

  const product: ReadOnly<IProduct> = {
    name: "Asad",
    age: 15,
  };
  // product is readonly now
  product; //.age = 32;
}
