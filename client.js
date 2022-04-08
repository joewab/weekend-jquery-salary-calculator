console.log('js');

$(document).ready(begin);

let employees = [];
let monthlyCost = 0;
function begin(){
    console.log('jq');
    $('#submitButton').on ('click', addEmployee);
    // $('#deleteButton').on ('click', deleteEmployee);
}

function addEmployee(){
    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    };

   employees.push(employee);

   monthlyCost += Number(employee.annualSalary);

$('#monthlyTotal').text(monthlyCost);

   console.log(Number(monthlyCost));

    $('#employeeInformation').append(
        `<tr>
            <td>${employee.firstname}</td>
            <td>${employee.lastname}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button id="deleteButton">delete</button></td>
        </tr>`

    )
}






        // <tr>
        //     <td>firstName</td>
        //     <td>lastName</td>
        //     <td>id</td>
        //     <td>title</td>
        //     <td>annualSalary</td>
        //     <td><button id="deleteButton">delete</button></td>
        // </tr>