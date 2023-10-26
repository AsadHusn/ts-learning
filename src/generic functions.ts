{
  function wrapInArray<T>(value: T): [T] {
    return [value];
  }
  const ans = wrapInArray(1);

  class ArrayUtils {
    static wrapInArray<T>(v: T): T[] {
      return [v];
    }
  }
  const ans2 = ArrayUtils.wrapInArray("ok");
  console.log(ans2[0].length);
}
