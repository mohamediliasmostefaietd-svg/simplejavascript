// Initializing employees array object
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Software Engineer' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'HR Specialist' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Financial Analyst' },
    //... More employee records can be added here
  ];

// Create a function to display each employee detail

function displayEmployees() {
    const totalEmployees = employees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.salary} - ${employee.department} - ${employee.specialization}</p>`)
    .join("");
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
};

function CalculatingSalaries() {
    const totalSalaries = employees
    .reduce((acc,employee) => acc + employee.salary,0);
    alert(`Employees total salary: $${totalSalaries}`);
};

function displayHREmployees() {
    const findingHR = employees
    .filter(employee => employee.department === "HR");
    const hrEmployeesDisplay = findingHR
    .map((employee,index) => `<p>${employee.id} - ${employee.name} - ${employee.age} - ${employee.department} - ${employee.salary} - ${employee.specialization}</p>`)
    .join("");
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeesById() {
    const employeeID = prompt("Enter Employee ID:");
    if (employeeID === null) return;
    
    const idSearch = employees
    .find(employee => employee.id === parseInt(employeeID));
    if (idSearch) {
        document.getElementById("employeesDetails").innerHTML =`<p>${idSearch.id}: ${idSearch.name} - ${idSearch.age} - ${idSearch.department} - ${idSearch.salary} - ${idSearch.specialization}</p>`;
    }
    else{
        document.getElementById("employeesDetails").innerHTML ="<p>No employee found with the given ID</p>";
    }
}

function displayEmployeeSpecialization() {
    const specializationSearch = employees
    .filter(employee => employee.specialization === "Software Engineer");
    const specializationDisplay = specializationSearch
    .map(employee => `<p>${employee.id} - ${employee.name} - ${employee.age} - ${employee.department} - ${employee.salary} - ${employee.specialization}</p>`)
    .join("");
    if (specializationSearch) {
        document.getElementById("employeesDetails").innerHTML = specializationDisplay;
    }
    else{
        document.getElementById("employeesDetails").innerHTML = "<p>No employee found with the specialization of Software Engineer</p>";
    }
}
