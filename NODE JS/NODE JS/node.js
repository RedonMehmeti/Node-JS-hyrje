// class Dog{
//     constructor(name,color){
//         this.name = name;
//         this.color = color;
//     }

//     information (){
// console.log("Name of this dog is" + this.name);
//     }
// }

// var obj1 = new Dog("Husky", "White");


// obj1.information();


// class BankAccount {
//     constructor(accountName, initialBalance) {
//         this.accountName = accountName; // Emri i llogarisë
//         this.balance = initialBalance;  // Bilanci fillestar
//     }

//     // Metoda për depozitim të parave në llogari
//     deposit(amount) {
//         if (amount > 0) {
            
//             this.balance += amount; // Shtohet shuma në bilanc
//             this.displayMessage(`Depozituat ${amount} Euro. Bilanci i ri është: ${this.balance} Euro.`);
//         } else {
//             this.displayMessage('Shuma e depozitës duhet të jetë më e madhe se zero.');
//         }
//     }

//     // Metoda për tërheqje të parave nga llogaria
//     withdraw(amount) {
//         {
//             if (amount > 0) {
                
//                 this.balance += amount; // Shtohet shuma në bilanc
//                 this.displayMessage(`Depozituat ${amount} Euro. Bilanci i ri është: ${this.balance} Euro.`);
//             } else {
//                 this.displayMessage('Shuma e depozitës duhet të jetë më e madhe se zero.');
//             }
//         }
    
//     }
//     displayMessage(massage){
//         const massageDiv = document.getElementById("massage");
//         massageDiv.textContent = this.balance;
//     }
//     getBalance(){
//         return this.balance;
//     }
//     updateBalanceDisplay(){
//         const balanceSpan = document.getElementById("balance");
//         balanceSpan.textContent = this.balance;
//     }

// }

// const account = new BankAccount("Redon Mehmeti", 1000);

// function deposit(){
//    const amount = parseFloat(document.getElementById("amount" ).value);
//    if(!isNaN(amount)){
//     account.deposit(amount)
//     account.updateBalanceDisplay()
//    }
//    else{
//     account.displayMessage("Ju lutem shkruani nje shume te vlevshem")
//    }
// }

// function withdraw(){
//     const amount = parseFloat(document.getElementById("amount" ).value);
//    if(!isNaN(amount)){
//     account.withdraw(amount)
//     account.updateBalanceDisplay()
//    }
//    else{
//     account.displayMessage("Ju lutem shkruani nje shume te vlevshem")
//    }
// }

class BankAccount { 
    constructor(accountName, initialBalance) {
        this.accountName = accountName; // Emri i llogarisë
        this.balance = initialBalance;  // Bilanci fillestar
    }

    // Metoda për depozitim të parave në llogari
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount; // Shtohet shuma në bilanc
            this.displayMessage(`Depozituat ${amount} Euro. Bilanci i ri është: ${this.balance} Euro.`);
        } else {
            this.displayMessage('Shuma e depozitës duhet të jetë më e madhe se zero.');
        }
    }

    // Metoda për tërheqje të parave nga llogaria
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount; // Tërhiqet shuma nga bilanci
                this.displayMessage(`Tërhiqet ${amount} Euro. Bilanci i ri është: ${this.balance} Euro.`);
            } else {
                this.displayMessage('Nuk ka mjaftueshëm balanc për tërheqje.');
            }
        } else {
            this.displayMessage('Shuma e tërheqjes duhet të jetë më e madhe se zero.');
        }
    }

    // Metoda për të shfaqur mesazhe
    displayMessage(message) {
        const messageDiv = document.getElementById("message");
        if (messageDiv) {
            messageDiv.textContent = message;
        }
    }

    // Metoda për të marrë balancën aktuale
    getBalance() {
        return this.balance;
    }

    // Metoda për të përditësuar shfaqjen e balancës
    updateBalanceDisplay() {
        const balanceSpan = document.getElementById("balance");
        if (balanceSpan) {
            balanceSpan.textContent = `Bilanci aktual është: ${this.balance} Euro.`;
        }
    }
}

const account = new BankAccount("Redon Mehmeti", 1000);

function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount)) {
        account.deposit(amount);
        account.updateBalanceDisplay();
    } else {
        account.displayMessage("Ju lutem shkruani një shumë të vlefshme");
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount)) {
        account.withdraw(amount);
        account.updateBalanceDisplay();
    } else {
        account.displayMessage("Ju lutem shkruani një shumë të vlefshme");
    }
}