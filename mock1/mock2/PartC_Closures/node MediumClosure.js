function createWallet(){
    let balance=0;
    return{
        addMoney(amount){
            balance+=amount;
            console.log(`Added ${amount}`);
        },
        withdrawMoney(amount){
            if(amount>balance){
                console.log("Insufficient balance!");
            }else{
                balance-=amount;
                console.log(`Withdraw ${amount}`);
            }
        },
        checkBalance(){
            console.log(`Current Balance: ${balance}`);
        }
    };
}
const myWallet=createWallet();
myWallet.addMoney(500);
myWallet.addMoney(300);
myWallet.withdrawMoney(200);
myWallet.checkBalance();