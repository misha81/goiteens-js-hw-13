const depos = document.querySelector('#depos');
const add = document.querySelector('#add');
const withdr = document.querySelector('#withdr');
const minus = document.querySelector('#minus');

const bankAccaunt = {
    ownerName: "Misha",
    accountNumber: "555444",
    balance: 0,  
    deposit: function () {
        add.addEventListener("click", () => {
            newBalance = this.balance + parseInt(depos.value)
            console.log(newBalance);
            this.balance = newBalance;

            depos.value = '';
        });
    },
    withdraw: function () {
        minus.addEventListener("click", () => {
            if (this.balance >= withdr.value) {
                newBalance = this.balance - withdr.value;
                console.log(newBalance);
                this.balance = newBalance;

                withdr.value = '';
            } else {
                console.log('Недостаньо грошей на рахунку!');
            }
        });
    }
};

bankAccaunt.deposit();
bankAccaunt.withdraw();
