{
  // type alias
  type Employee = {
    readonly id: number;
    name?: string;
    retire: (date: Date) => void;
  };

  const employee: Employee = {
    id: 1,
    retire: function (date: Date) {
      console.log("date = ", this, date);
    },
  };

  employee.retire(new Date());
}
