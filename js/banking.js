document.getElementById("deposit-button").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = parseFloat(depositInput.value);

    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = parseFloat(depositTotal.innerText);
    const depositTotalAmount = depositAmount + depositTotalText;
    depositTotal.innerText = depositTotalAmount;

    // Total Balance
    const balance = document.getElementById("balance-total")
    const balanceAmount = parseFloat(balance.innerText);
    const totalBalance = balanceAmount + depositAmount;
    balance.innerText = totalBalance;
    depositInput.value = " ";
})


document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawValue = parseFloat(withdrawInput.value);

    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = parseFloat(withdrawTotal.innerText);
    const withdraw = withdrawValue + withdrawTotalText;

    withdrawTotal.innerText = withdraw;

    withdrawInput.value = " ";

    // Balance After Withdraw

    const balanceSecond = document.getElementById("balance-total")
    const balanceAmountSecond = parseFloat(balanceSecond.innerText);
    const totalBalanceSecond = balanceAmountSecond - withdraw;
    balanceSecond.innerText = totalBalanceSecond;
})



