{
  class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName(): string {
      return this.firstName + " " + this.lastName;
    }

    protected walk() {
      console.log(this.firstName + " is walking");
    }
  }

  class Teacher extends Person {
    // method overriding
    override get fullName(): string {
      return "Professor " + super.fullName;
    }

    // to use protected member of parent
    myWalk() {
      this.walk();
      super.walk();
    }
  }

  class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
      super(firstName, lastName);
    }

    takeTest() {
      console.log("Taking a test");
    }
  }

  const teacher = new Teacher("Asad", "Ali");
  console.log(teacher);

  const student = new Student(1, "Asad", "Ali");
  console.log(student);
}
