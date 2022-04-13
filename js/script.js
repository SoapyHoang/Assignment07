// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0 
const $ = (id) => document.getElementById(id)


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value
    let name = $('name').value
    let ext = $('extension').value
    let email = $('email').value
    let dept = $('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell(0)
    let cellName = row.insertCell(1)
    let cellExt = row.insertCell(2)
    let cellEmail = row.insertCell(3)
    let cellDept = row.insertCell(4)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let text = document.createTextNode(id)
    cellID.appendChild(text)
    text = document.createTextNode(name)
    cellName.appendChild(text)
    text = document.createTextNode(ext)
    cellExt.appendChild(text)
    text = document.createTextNode(email)
    cellEmail.appendChild(text)
    text = document.createTextNode(dept)
    cellDept.appendChild(text)


    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-left mt-2'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    row.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteEmployee)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    $('empCount').value = '(' + count + ')'

});

// DELETE EMPLOYEE
const deleteEmployee = (e) => {
    if (confirm(`Are you sure you want to delete employee ${e.target.parentElement.children[1].innerText}?`)) {
        table.deleteRow(e.target.parentElement.rowIndex);
        count--;
        $('empCount').value = '(' + count + ')'
    }
}