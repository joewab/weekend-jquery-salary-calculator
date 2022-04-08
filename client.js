console.log('js');

$(document).ready(begin);

let employees = [];
let monthlyCost = 0;
function begin(){
    console.log('jq');
    $('#submitButton').on ('click', addEmployee);
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

   if (monthlyCost > 20000){
    $('#tableFooter').css("background-color", "red");
   }

    $('#employeeInformation').append(
        `<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button id="deleteButton">delete</button></td>
        </tr>`

    )

    $('#firstNameInput').val('')
    $('#lastNameInput').val('')
    $('#idInput').val('')
    $('#titleInput').val('')
    $('#annualSalaryInput').val('')

    $('#deleteButton').on ('click', deleteEmployee);
}

function deleteEmployee(){
    console.log('deleted');
}