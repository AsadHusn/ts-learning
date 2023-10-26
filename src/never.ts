{
  // it is used to prevent unreachable code
  // sometimes unreachable code is not detectable, so use never type

  // it states that this function never return anything
  function processEvents(): never {
    while (true) {}
  }

  function reject(msg: string): never {
    throw new Error(msg);
  }

  reject("help!");
  // processEvents();

  // console.log("help!!");
}
