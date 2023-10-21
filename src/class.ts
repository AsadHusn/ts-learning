class Account {
  // readonly id: number;
  // public owner: string;
  // private _balance: number;
  nickname?: string;
  private static _activeAccounts: number = 0;

  // parameter properties
  constructor(
    readonly id: number,
    public owner: string,
    private _balance: number,
    nickname?: string
  ) {
    nickname && (this.nickname = nickname);
    Account._activeAccounts++;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  private calculateTax() {
    console.log("calculate tax");
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }

  static get activeAccounts(): number {
    return Account._activeAccounts;
  }
}

const account = new Account(1, "asad", 0);

account.deposit(100);

account.balance = 99;

console.log(account);

console.log(account instanceof Account);

console.log("Count = ", Account.activeAccounts);
