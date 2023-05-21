class NumberList {
    constructor(array) {
        this.array = array;
    }

    mean() {
        let sum = this.array.reduce((a, b) => a + b, 0);
        return sum / this.array.length;
    }

    variance() {
        let avg = this.mean();
        let squaredDiffs = this.array.map(value => (value - avg) ** 2);
        return squaredDiffs.reduce((a, b) => a + b, 0) / this.array.length;
    }

    stdDeviation() {
        return Math.sqrt(this.variance());
    }
}

function getNumberArray() {
    let input = document.getElementById("numbers-input").value;
    let array = input.split(/\s+/).map(Number);
    return new NumberList(array);
}

function calculateMean() {
    let numberList = getNumberArray();
    document.getElementById("output").innerHTML = "Mean: " + numberList.mean().toFixed(2);
    validateInput();
}

function calculateVariance() {
    let numberList = getNumberArray();
    document.getElementById("output").innerHTML = "Variance: " + numberList.variance().toFixed(2);
    validateInput();
}

function calculateStdDeviation() {
    let numberList = getNumberArray();
    document.getElementById("output").innerHTML = "Standard Deviation: " + numberList.stdDeviation().toFixed(2);
    validateInput();
}
//This one is crazy!
function validateInput() {
    let input = document.getElementById("numbers-input").value;
    let errorElement = document.getElementById("error");
    let regex = /^(\s*-?\d+(\.\d+)?)(\s+-?\d+(\.\d+)?)*\s*$/;

    if (!regex.test(input)) {
        errorElement.innerHTML = "Invalid input. Please enter numbers separated by spaces.";
    } else {
        errorElement.innerHTML = "";
    }
}