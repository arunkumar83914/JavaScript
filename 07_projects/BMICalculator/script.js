function calcBMI() {
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;

    if (h === "" || w === "") {
        document.getElementById("result").innerText = "Please enter height & weight";
        return;
    }

    let meter = h / 100;
    let bmi = (w / (meter * meter)).toFixed(2);

    document.getElementById("result").innerText = "Your BMI: " + bmi;
}