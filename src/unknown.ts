{
  // unknown is used to display error
  function render(document: unknown) {
    // we can use it with narrowing
    if (typeof document === "string") {
      document.toUpperCase();
    }
  }
  render(23);
}
