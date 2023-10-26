{
  interface IProduct {
    name: string;
    price: number;
  }
  interface IUser {
    username: string;
    age: number;
  }

  // generic class
  class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
      this._objects.push(obj);
    }
  }

  class CompressibleStore<T> extends Store<T> {
    compress(): void {}
  }

  class SearchableStore<T extends IUser | IProduct> extends Store<T> {
    find(): T | undefined {
      return this._objects.find((obj) => obj);
    }
  }

  const store = new SearchableStore();
  store.add({
    username: "abc",
    age: 8,
  });
}
