{
  // unknown is used to display type errors if type is unknown
  function render(document: unknown) {
    // we can use it with narrowing
    if (typeof document === "string") {
      document.toUpperCase();
    }
  }
  render(23);
}
