const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumber = document.querySelector('#check-number');
const disArea = document.querySelector('#dis-area');

function checkValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        disArea.innerHTML = "Hurray! Your Birthday is lucky🥳";
    } else {
        disArea.innerHTML = "Your Birthday isn't that lucky..🙃";
    }
}

function checkDobIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && dob) {
        checkValues(sum, luckyNumber.value);
    } else
        disArea.innerHTML = "Please Enter Both the values😕";
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}


checkNumber.addEventListener('click', checkDobIsLucky)