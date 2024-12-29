document.getElementById("add-subject").addEventListener("click", function () {
    const container = document.getElementById("subject-container");

    const newSubject = document.createElement("div");
    newSubject.classList.add("subject");

    newSubject.innerHTML = `
        <input type="number" placeholder="Enter grade" class="grade">
        <input type="number" placeholder="Enter units" class="unit">
        <button class="remove-subject">Remove</button>
    `;

    container.appendChild(newSubject);

    newSubject.querySelector(".remove-subject").addEventListener("click", function () {
        container.removeChild(newSubject);
    });
});

document.getElementById("calculate-gwa").addEventListener("click", function () {
    const grades = document.querySelectorAll(".grade");
    const units = document.querySelectorAll(".unit");

    let totalWeightedGrades = 0;
    let totalUnits = 0;

    grades.forEach((gradeInput, index) => {
        const grade = parseFloat(gradeInput.value);
        const unit = parseFloat(units[index].value);

        if (!isNaN(grade) && !isNaN(unit)) {
            totalWeightedGrades += grade * unit;
            totalUnits += unit;
        }
    });

    const gwa = totalUnits > 0 ? (totalWeightedGrades / totalUnits).toFixed(2) : 0;

    document.getElementById("result").innerText = totalUnits > 0 
        ? `Your GWA is: ${gwa}` 
        : "Please enter valid grades and units.";
    
    if (totalUnits > 0) {
        if (gwa >= 1.25 && gwa <= 1.00) {
            resultMessage = " - College Scholar";
        }
        else if (gwa >= 1.26 && gwa <= 1.50) {
            resultMessage = " - President's Lister";
        }
        else if (gwa >= 1.51 && gwa <= 1.75) {
            resultMessage = " - Dean's Lister";
        }
        else {
            resultMessage = " - Bawi nalang next sem!";
        }
    }
    document.getElementById("result").innerText += resultMessage;
});
