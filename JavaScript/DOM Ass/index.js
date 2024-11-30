const form = document.getElementById('registrationForm');
const recordsTable = document.getElementById('recordsTable');

// Retrieve existing students from localStorage or initialize an empty array
let students = JSON.parse(localStorage.getItem('students')) || [];

// Function to render students in the table
function renderStudents() {
    recordsTable.innerHTML = ''; // Clear existing rows

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border p-2">${student.name}</td>
            <td class="border p-2">${student.id}</td>
            <td class="border p-2">${student.email}</td>
            <td class="border p-2">${student.contact}</td>
            <td class="border p-2">
                <button class="text-blue-600 mr-2" onclick="editStudent(${index})">Edit</button>
                <button class="text-red-600" onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        recordsTable.appendChild(row);
    });
}

// Function to add a new student
function addStudent(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentID').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contactNumber').value.trim();

    // Validate fields
    if (!name || !id || !email || !contact) {
        alert('All fields are required.');
        return;
    }

    // Add new student to the list
    students.push({ name, id, email, contact });
    localStorage.setItem('students', JSON.stringify(students)); // Save to localStorage

    form.reset(); // Reset the form
    renderStudents(); // Refresh the table
}

// Function to edit a student
function editStudent(index) {
    const student = students[index];

    // Populate the form with the selected student's data
    document.getElementById('studentName').value = student.name;
    document.getElementById('studentID').value = student.id;
    document.getElementById('email').value = student.email;
    document.getElementById('contactNumber').value = student.contact;

    // Remove the student from the array
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students)); // Save changes
    renderStudents(); // Refresh the table
}

// Function to delete a student
function deleteStudent(index) {
    students.splice(index, 1); // Remove the student from the array
    localStorage.setItem('students', JSON.stringify(students)); // Save changes
    renderStudents(); // Refresh the table
}

// Attach the submit event to the form
form.addEventListener('submit', addStudent);

// Render the initial list of students
renderStudents();

