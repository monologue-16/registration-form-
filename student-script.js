// Get DOM elements
const resultForm = document.getElementById('resultForm');
const resultContainer = document.getElementById('resultContainer');
const displayName = document.getElementById('displayName');
const displayMarks = document.getElementById('displayMarks');
const displayGrade = document.getElementById('displayGrade');
const displayRemarks = document.getElementById('displayRemarks');
const displayStatus = document.getElementById('displayStatus');

// Form submission event listener
resultForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const studentName = document.getElementById('studentName').value.trim();
    const studentMarks = parseInt(document.getElementById('studentMarks').value);

    // Validate marks input
    if (isNaN(studentMarks) || studentMarks < 0 || studentMarks > 100) {
        alert('Please enter marks between 0 and 100');
        return;
    }

    // Calculate grade based on marks
    let grade = '';
    if (studentMarks >= 80) {
        grade = 'A';
    } else if (studentMarks >= 70) {
        grade = 'B';
    } else if (studentMarks >= 60) {
        grade = 'C';
    } else if (studentMarks >= 50) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Get remarks using switch statement
    let remarks = '';
    switch(grade) {
        case 'A':
            remarks = 'Excellent';
            break;
        case 'B':
            remarks = 'Very Good';
            break;
        case 'C':
            remarks = 'Good';
            break;
        case 'D':
            remarks = 'Fair';
            break;
        case 'E':
            remarks = 'Needs Improvement';
            break;
        default:
            remarks = 'Unknown';
    }

    // Determine pass/fail status
    const status = studentMarks >= 50 ? 'PASS' : 'FAIL';

    // Display results
    displayResults(studentName, studentMarks, grade, remarks, status);
});

// Function to display results
function displayResults(name, marks, grade, remarks, status) {
    // Update display values
    displayName.textContent = name;
    displayMarks.textContent = marks;
    displayGrade.textContent = grade;
    displayRemarks.textContent = remarks;
    displayStatus.textContent = status;

    // Update grade styling based on grade value
    displayGrade.className = 'value grade grade-' + grade.toLowerCase();

    // Update status styling based on pass/fail
    displayStatus.className = 'value status ' + (status === 'PASS' ? 'pass' : 'fail');

    // Show result container
    resultContainer.classList.remove('hidden');

    // Scroll to results
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Reset form and results
resultForm.addEventListener('reset', function() {
    setTimeout(function() {
        resultContainer.classList.add('hidden');
    }, 100);
});
