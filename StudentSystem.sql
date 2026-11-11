SELECT
    s.firstName,
    s.lastName,
    c.course_name
FROM Enrollments e
JOIN Students s
    ON e.student_id = s.id
JOIN Courses c
    ON e.course_id = c.course_id;