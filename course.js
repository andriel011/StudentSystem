class Course {
    constructor(id, courseName) {
        this.id = id;
        this.courseName = courseName;
    }
}

let courses =
    JSON.parse(localStorage.getItem("courses")) || [];

function loadCourses() {

    const tableBody =
        document.querySelector("#courseTable tbody");

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

function addCourse() {

    const courseName =
        document.getElementById("courseName").value;

    if (courseName === "") {
        alert("Enter a course name");
        return;
    }

    const course = new Course(
        courses.length + 1,
        courseName
    );

    courses.push(course);

    localStorage.setItem(
        "courses",
        JSON.stringify(courses)
    );

    loadCourses();

    document.getElementById("courseName").value = "";
}

document
    .getElementById("addCourseBtn")
    .addEventListener(
        "click",
        addCourse
    );

loadCourses();