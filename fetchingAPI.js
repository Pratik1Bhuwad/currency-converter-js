const convert=document.getElementById("convert");
const result=document.getElementById("result");
const from=document.getElementById("from");
const to=document.getElementById("to");
const amount=document.getElementById("amount")

convert.addEventListener("click",function(){
    console.log(`The button is clicked`);
    let fromCurrency=from.value;
    let toCurrency=to.value;
    let amountValue=amount.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((response)=>{
        // in fetch api a response.json() can only be read once
        // console.log(response.json());
        return response.json();
    })
    .then((data)=>{
        let rate=data.rates[toCurrency];
        let total=rate*Number(amountValue);
        result.innerHTML=`${amountValue} ${fromCurrency}= ${total} ${toCurrency}`;
    });
});