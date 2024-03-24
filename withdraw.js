/*
1. add event handler with the withdraw button
2.get the withdraw amount from the withdraw input field(also make sure to convert the input into a number by using parseFloat)
3. get old withdraw total
4. set total withdraw amount
5. get the previous balance total
6. calculate balance total
7. clear value
*/
//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2:
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawField = parseFloat(withdrawField.value);
    //step-7
    withdrawField.value = '';
    
    if(isNaN(newWithdrawField)){
        alert('Please Provide a valid Number');
        return;
    }
    //step-3:
    const withdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawElement = parseFloat(withdrawElement.innerText);
    //step-4:
    //if er niche
    //step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalElement = parseFloat(balanceTotalElement.innerText);
    //step-6
    const balanceTotal = previousBalanceTotalElement - newWithdrawField;
    balanceTotalElement.innerText = balanceTotal;
    

    if(newWithdrawField > previousBalanceTotalElement){
        alert('Baap er bank a ato taka nai');
        return;
    }
    const withdrawTotal = previousWithdrawElement + newWithdrawField;
    withdrawElement.innerText = withdrawTotal;
    
})




