class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }
    exchange(){
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
            .then(res => res.json())
            .then(data => {
                const sec = data["rates"][this.secondCurrency];
                const tempAmount = Number(this.amount);
                const total = tempAmount * sec;
                resolve(total);
            })
            .catch(err => reject(err))
        });
    }
    changeAmount(newAmount){
        this.amount = newAmount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}