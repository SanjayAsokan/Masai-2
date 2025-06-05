let student = [];
let index = null;

document.getElementById("student_form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const batch = document.getElementById("batch").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const score = parseInt(document.getElementById("score").value);

    if (!name || !batch || isNaN(age) || isNaN(score) || score < 0 || score > 100) {
        alert("Please enter valid inputs!");
        return;
    }

    const students = { name, batch, age, score };

    if (index === null) {
        student.push(students);
    } else {
        student[index] = students;
        index = null;
    }

    this.reset();
    displayStudents(student);
    updateSummary(student);
});

function displayStudents(data) {
    const tbody = document.getElementById("student-table");
    tbody.innerHTML = "";

    data.forEach((students, i) => {
        const row = document.createElement("tr");

        if (students.score > 80) row.classList.add("green");

        row.innerHTML = `
            <td>${students.name}</td>
            <td>${students.batch}</td>
            <td>${students.age}</td>
            <td>${students.score}</td>
            <td>
                <button onclick="editStudent(${i})">Edit</button>
                <button onclick="deleteStudent(${i})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editStudent(i) {
    const students = student[i];
    document.getElementById("name").value = students.name;
    document.getElementById("batch").value = students.batch;
    document.getElementById("age").value = students.age;
    document.getElementById("score").value = students.score;
    index = i;
}

function deleteStudent(i) {
    student.splice(i, 1);
    displayStudents(student);
    updateSummary(student);
}

document.getElementById("search").addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filtered = student.filter(s => s.name.toLowerCase().includes(keyword));
    displayStudents(filtered);
    updateSummary(filtered);
});

function sortByAge() {
    student.sort((a, b) => a.age - b.age);
    displayStudents(student);
}

function sortByScore() {
    student.sort((a, b) => b.score - a.score);
    displayStudents(student);
}

function updateSummary(data) {
    const total = data.length;
    const avg = total ? (data.reduce((sum, s) => sum + s.score, 0) / total).toFixed(2) : 0;
    document.getElementById("summary").textContent = `Total Students: ${total}, Average Score: ${avg}`;
}
