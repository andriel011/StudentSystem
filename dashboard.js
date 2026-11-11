const students =
    JSON.parse(localStorage.getItem("students")) || [];

const courses =
    JSON.parse(localStorage.getItem("courses")) || [];

const enrollments =
    JSON.parse(localStorage.getItem("enrollments")) || [];


document.getElementById("studentCount").textContent =
    "Total Students: " + students.length;

document.getElementById("courseCount").textContent =
    "Total Courses: " + courses.length;

document.getElementById("enrollmentCount").textContent =
    "Total Enrollments: " + enrollments.length;

loadStudents();
loadCourses();
loadEnrollments();

function loadStudents() {

    const tableBody =
        document.querySelector("#studentsTable tbody");

    tableBody.innerHTML = "";

    students.forEach(student => {

        tableBody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.firstName} ${student.lastName}</td>
                <td>${student.email}</td>
            </tr>
        `;
    });
}

function loadCourses() {

    const tableBody =
        document.querySelector("#coursesTable tbody");

    tableBody.innerHTML = "";

    courses.forEach(course => {

        tableBody.innerHTML += `
            <tr>
                <td>${course.id}</td>
                <td>${course.courseName}</td>
            </tr>
        `;
    });
}

function loadEnrollments() {

    const tableBody =
        document.querySelector("#enrollmentsTable tbody");

    tableBody.innerHTML = "";

    enrollments.forEach(enrollment => {

        const student =
            students.find(
                s => s.id == enrollment.studentId
            );

        const course =
            courses.find(
                c => c.id == enrollment.courseId
            );

        tableBody.innerHTML += `
            <tr>
                <td>
                    ${student ? student.firstName + " " + student.lastName : "Unknown"}
                </td>
                <td>
                    ${course ? course.courseName : "Unknown"}
                </td>
            </tr>
        `;
    });
}