{
  interface IProduct {
    name: string;
    price: number;
  }

  // generic class
  class Store<T> {
    private _objects: T[] = [];

    add(obj: T): void {
      this._objects.push(obj);
    }

    find(key: keyof T, value: unknown): T | undefined {
      return this._objects.find((obj) => obj[key] === value);
    }
  }

  const store = new Store<IProduct>();

  store.add({ name: "mouse", price: 50 });

  // only name and price key will be accepted
  store.find("name", "hello");
}
