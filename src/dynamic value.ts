{
  // index signature property

  class Seats {
    [seat: string]: string;
  }

  const seats = new Seats();
  seats.a1 = "one";
  seats.a2 = "two";
  seats.a3 = "three";

  console.log(seats);
}
