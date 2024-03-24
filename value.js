//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2: get the deposit from the deposit input field
    //For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositField.value);
    //console.log(depositAmount);

    //step-3: get the current deposit total
    //for non input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    //step-4: add numbers to set the total deposit
    const depositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = depositTotal;
    //step-5: get balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    //step-6: calculate total balance 
    const balanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = balanceTotal;
    //step-7: clear the deposit field
    depositField.value = '';
})