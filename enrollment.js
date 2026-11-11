class Enrollment {

    constructor(studentId, courseId) {
        this.studentId = studentId;
        this.courseId = courseId;
    }
}

let enrollments =
    JSON.parse(localStorage.getItem("enrollments")) || [];

function loadEnrollments() {

    const students =
        JSON.parse(localStorage.getItem("students")) || [];

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    const tableBody =
        document.querySelector("#enrollmentTable tbody");

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
                    ${
                        student
                        ? student.firstName + " " + student.lastName
                        : "Unknown Student"
                    }
                </td>

                <td>
                    ${
                        course
                        ? course.courseName
                        : "Unknown Course"
                    }
                </td>
            </tr>
        `;
    });
}

function enrollStudent() {

    const studentId =
        document.getElementById("studentId").value;

    const courseId =
        document.getElementById("courseId").value;

    const students =
        JSON.parse(localStorage.getItem("students")) || [];

    const courses =
        JSON.parse(localStorage.getItem("courses")) || [];

    if (
        studentId === "" ||
        courseId === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    const studentExists =
        students.find(
            student => student.id == studentId
        );

    const courseExists =
        courses.find(
            course => course.id == courseId
        );

    if (!studentExists) {
        alert("Student ID not found");
        return;
    }

    if (!courseExists) {
        alert("Course ID not found");
        return;
    }

    const duplicateEnrollment =
        enrollments.find(
            enrollment =>
                enrollment.studentId == studentId &&
                enrollment.courseId == courseId
        );

    if (duplicateEnrollment) {
        alert("Student is already enrolled in this course");
        return;
    }

    const enrollment = new Enrollment(
        studentId,
        courseId
    );

    enrollments.push(enrollment);

    localStorage.setItem(
        "enrollments",
        JSON.stringify(enrollments)
    );

    loadEnrollments();

    document.getElementById("studentId").value = "";
    document.getElementById("courseId").value = "";

    alert("Enrollment successful!");
}
document
    .getElementById("enrollBtn")
    .addEventListener(
        "click",
        enrollStudent
    );

loadEnrollments();