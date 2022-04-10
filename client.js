console.log('js');

$(document).ready(begin);

let employees = [];
let monthlyCost = 0;
function begin(){
    console.log('jq');
    $('#submitButton').on ('click', addEmployee);
}


function addEmployee(){
    //create an employee object using the input from the DOM as properties
    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    }; //end create employee object

    //append the properites of the employee object into the table formatting on the DOM only if all the fields are filled out
    if(employee.firstName==='' || employee.lastName==='' || employee.id==='' || employee.title==='' || employee.annualSalary===''){
       return false
    }
    $(`#employeeInformation`).append(
        `<tr id="employeesList"/>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td id="salary">${employee.annualSalary}</td>
            <td align="right"><button class="deleteButton" id="${employee.id}">delete employee ${employee.id}</button></td>
        </tr>`
    ); //end append employee object properties
    
    //empty the input fields on the dom
    $('#firstNameInput').val('')
    $('#lastNameInput').val('')
    $('#idInput').val('')
    $('#titleInput').val('')
    $('#annualSalaryInput').val('')
    //end empty input fields

    //push employee object into an array
    employees.push(employee);
    //end push employee object

    //increment a variable that keeps track of the monthly cost based on the annual salaries
    //and put that variable on the DOM
    //if the monthly cost gets above 20000, turn that part of the DOM red
    monthlyCost += (Number(employee.annualSalary)/12);
    $('#monthlyTotal').text(monthlyCost.toFixed(2));
    if (monthlyCost >= 20000){
        $('#tableFooter').css("background-color", "rgb(228, 130, 120)");
        };
    //end update the monthly cost

    //initialize the delete button that is created by this function
    $(`#${employee.id}`).on ('click', deleteEmployee);
    //end button initialization
    
}


//run this when a delete button is hit to delete an entire row from the table
function deleteEmployee(){
    for (employee of employees){
        if (`delete employee ${employee.id}`===$(this).text()){
        monthlyCost -= Number(employee.annualSalary)/12
        };
    $('#monthlyTotal').text(monthlyCost.toFixed(2));
    $(this).closest("tr").remove();
    if (monthlyCost < 20000){
        $('#tableFooter').css("background-color", "rgb(241, 241, 241)");
        };
}
}
//end delete row