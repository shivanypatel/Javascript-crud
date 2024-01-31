const employee ="employeeData";

function get(){
   return localStorage.getItem(employee) !== null ? JSON.parse(localStorage.getItem(employee)) : [];
}

function getAllEmployee(){
    return get();
}

function add(addEmployee){
debugger;
    localStorage.setItem(employee,JSON.stringify(addEmployee));
}

function addEmployee(employee){
    debugger;
    employee.id = getMaxId();
    const employees = getAllEmployee();
    employees.push(employee);
    add(employees);
}

function getMaxId(){
    const employee = getAllEmployee();
    if(employee.length > 0){
        const ids = employee.map(x=> x.id);
        const max = Math.max.apply(null,ids);
        return max + 1 ;
    }
    else{
        return 1;
    }
}

function getEmployeeById(employeeId){
    debugger;
    const employees = getAllEmployee();
    const employee = employees.find(x=> x.id === parseInt(employeeId)) ;
    return employee ;
}

function deleteDataFromLocal(id){
    debugger;
    const employee =localStorage.getItem('employeeData');
    let localArray = JSON.parse(employee);
    let Employee =localArray.find(x=> x.id === parseInt(id));
    let index = localArray.indexOf(Employee);
    localArray.splice(index,1);
    localStorage.setItem('employeeData', JSON.stringify(localArray));
    showEmployee();
}

function updateDataFromLocal(newEmployeeDetails){
    debugger;
    const employees = getAllEmployee();
    let employee = employees.find(x => x.id == $("#txtId").val());
    newEmployeeDetails.id = employee.id;
    let index = employees.indexOf(employee);
    employees.splice(index, 1 ,newEmployeeDetails);
   add(employees);
    showEmployee();   
} 