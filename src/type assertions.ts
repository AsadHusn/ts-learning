// type assertion is telling the compiler to pick the type

// type HTMLElement is a base class that have many child classes

// type assertion have two type of syntax

const btn = document.getElementById("btn") as HTMLButtonElement;

const phone = <HTMLInputElement>document.getElementById("phone");
