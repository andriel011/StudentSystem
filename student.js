class Student {
    constructor(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

let students =
    JSON.parse(localStorage.getItem("students")) || [];

function loadStudents() {

    const tableBody =
        document.querySelector("#studentTable tbody");

    tableBody.innerHTML = "";

    students.forEach(student => {

        tableBody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.email}</td>
            </tr>
        `;
    });
}

function addStudent() {

    const firstName =
        document.getElementById("firstName").value;

    const lastName =
        document.getElementById("lastName").value;

    const email =
        document.getElementById("email").value;

    if (
        firstName === "" ||
        lastName === "" ||
        email === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    const student = new Student(
        students.length + 1,
        firstName,
        lastName,
        email
    );

    students.push(student);

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

    loadStudents();

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
}

document
    .getElementById("addStudentBtn")
    .addEventListener(
        "click",
        addStudent
    );

loadStudents();