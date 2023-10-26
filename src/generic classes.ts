{
  class KeyValue<T, U> {
    constructor(public key: T, public value: U) {}
  }

  const obj = new KeyValue<Number, String>(1, "one");

  // compiler can infer type automatically
  const obj2 = new KeyValue(2, "two");

  obj.key.toFixed();
  obj2.value.charAt(1);
}
