class BankAccount{
    #account_holder;
    #account_no;
    #balance;
    constructor(accountHolder,accountNo,initialBalance){
        this.#account_holder = accountHolder
        this.#account_no = accountNo
        this.#balance = initialBalance
    }

    getAccountDetails(){
        return `Account Holder: ${this.#account_holder}\nA/C No: ${this.#account_no}`;
    }
    
    getBalance(){
        return this.#balance
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount
            console.log(`Dear Account Holder,\n ${amount} TK deposit your A/C ${this.#account_no}`)
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance = this.#balance - amount
            console.log(`Dear Account Holder,\n${amount} TK debited from your A/C ${this.#account_no}.`)
        }
    }
}

const city_bank = new BankAccount("MD Mehedi Hasan","1781580039585",500)
console.log(city_bank.getAccountDetails())
console.log(city_bank.getBalance())
city_bank.deposit(45500)
console.log(city_bank.getBalance())
city_bank.withdraw(5320)
console.log(city_bank.getBalance())