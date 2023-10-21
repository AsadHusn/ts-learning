{
  // classes are blueprints for creating objects
  // interfaces are used to define the shape of objects
  // in-short both are the same, just interface is little concise

  interface ICalendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
  }

  // extend
  interface IGoogleCalendar extends ICalendar {
    sync(): void;
  }

  // implement
  class GoogleCalendar implements IGoogleCalendar {
    constructor(public name: string) {}
    addEvent(): void {
      console.log("Add event");
    }
    removeEvent(): void {
      console.log("remove event");
    }
    sync(): void {
      console.log("syncing");
    }
  }
}
