class Account {
  // readonly id: number;
  // public owner: string;
  // private _balance: number;
  nickname?: string;

  constructor(
    readonly id: number,
    public owner: string,
    private _balance: number,
    nickname?: string
  ) {
    console.log("nick = ", nickname);
    nickname && (this.nickname = nickname);
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  private calculateTax() {
    console.log("tax");
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }
}

const account = new Account(1, "asad", 0);

account.deposit(100);

account.balance = 99;

console.log(account);

console.log(account instanceof Account);
