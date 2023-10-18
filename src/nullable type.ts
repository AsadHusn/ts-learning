{
  type Falsy = null | false | undefined;

  function greet(name?: string | Falsy) {
    if (name) console.log(name);
    else console.log("Hola");
  }

  greet(null);
}
