{
  // poly means many, form means shapes --> many shapes
  // Open Closed principal for class
  // A class should be open for extension and closed for modification

  class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName(): string {
      return this.firstName + " " + this.lastName;
    }
  }

  class Principal extends Person {
    override get fullName(): string {
      return "Principal " + super.fullName;
    }
  }
  class Teacher extends Person {
    override get fullName(): string {
      return "Professor " + super.fullName;
    }
  }

  class Student extends Person {
    override get fullName(): string {
      return "Student " + super.fullName;
    }
  }

  const printName: Person[] = [
    new Principal("unnamed", "principal"),
    new Teacher("unnamed", "teacher"),
    new Student("unnamed", "student"),
  ];

  // many shapes of fullname fn
  printName.forEach((person: Person) => console.log(person.fullName));
}
