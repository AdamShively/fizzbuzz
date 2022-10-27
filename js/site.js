//Get the user input values.
function getValue() {

    //Get val value that the user entered and parse it to an integer.
    let val = document.getElementById("val").value;
    val = parseInt(val);

    console.log(val);
    //Make sure user entered integers.
    let isNumber = Number.isInteger(val);

    //Make sure user entry is valid.
    if (isNumber) {

        let msg = createMessage(val);
        displayMessage(msg);
    }
    else {
        //Show the alert box.
        alert("Please make sure your entry is valid.");
    }
}

//Generate message.
function createMessage(val) {

    let msg = "";

    if (val % 3 == 0) {
        msg += "Fizz";
    }

    if (val % 5 == 0) {
        msg += "Buzz";
    }

    if (msg == "") {
        msg = "Input not divisible by 3 and/or 5"
    }

    return msg;
}

//Display message.
function displayMessage(msg) {
    
    document.getElementById("info").innerHTML = msg;

    //Allow display message to be displayed.
    document.getElementById("alert").classList.remove("invisible");
}