function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputPin) {
            if (inputPin !== pin) return "Invalid pin.";
            return `$${amount}`;
        },
        deposit(inputPin, depositAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            amount += depositAmount;
            return `Successfully deposited $${depositAmount}. Current balance: $${amount}.`
        },
        withdraw(inputPin, withdrawlAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            if (withdrawlAmount > amount)
                return "Withdrawl amount exceeds account balance. Transaction cancelled."
            amount -= depositAmount;
            return `Successfully withdrew $${withdrawlAmount}. Current balance: $${amount}`;
        },
        changePin(inputPin, newPin) {
            if (inputPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed.";
        }
    };
}

module.exports = { createAccount };
