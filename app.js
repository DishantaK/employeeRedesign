const employeeList = [
    {
      name: 'Jan',
      officeNum: 1,
      phoneNum: '222-222-2222'
    },
    {
      name: 'Juan',
      officeNum: 304,
      phoneNum: '489-789-8789'
    },
    {
      name: 'Margie',
      officeNum: 789,
      phoneNum: '789-789-7897'
    },
    {
      name: 'Sara',
      officeNum: 32,
      phoneNum: '222-789-4654'
    },
    {
      name: 'Tyrell',
      officeNum: 3,
      phoneNum: '566-621-0452'
    },
    {
      name: 'Tasha',
      officeNum: 213,
      phoneNum: '789-766-5675'
    },
    {
      name: 'Ty',
      officeNum: 211,
      phoneNum: '789-766-7865'
    },
    {
      name: 'Sarah',
      officeNum: 345,
      phoneNum: '222-789-5231'
    }
  ];
  
  // Storage 
  let nameEntry ='';
  let nameContains = '';
  let nameMatch ='';
  let command = '' ;
  let rightStuff ='';
  let str = 'Employee Not Found';


  let render = function (rightStuff) {
    $('#job-board').html(rightStuff);
  }
  

  // Callbacks for Click event
  
  const print = function (event) {
    event.preventDefault();
    command = 'print';
    $('.print').addClass('appear');
    //remove other visible
  
    $('.verify').removeClass('appear');
    $('.lookup').removeClass('appear');
    $('.update').removeClass('appear');
    $('.add').removeClass('appear');
    $('.delete').removeClass('appear');
    $('.contains').removeClass('appear');
    $('#homeheader').addClass('noHeader');
    $('main').addClass('twoTarget');
    commandCheck();
  }
  
  
  const verify = function () {
    event.preventDefault();
    command = 'verify';
    $('.verify').addClass('appear');
    //remove other visible
    
    $('.print').removeClass('appear');
    $('.lookup').removeClass('appear');
    $('.update').removeClass('appear');
    $('.add').removeClass('appear');
    $('.delete').removeClass('appear');
    $('.contains').removeClass('appear');
    $('.print').html('');
    $('#homeheader').addClass('noHeader');
    $('main').addClass('twoTarget');
    

  }
  
  
  const lookup = function () {
    command = 'lookup';
    $('.lookup').addClass('appear');
  
    //remove other visible
    $('.print').removeClass('appear');
    $('.verify').removeClass('appear');
    $('.update').removeClass('appear');
    $('.add').removeClass('appear');
    $('.delete').removeClass('appear');
    $('.contains').removeClass('appear');
    $('#homeheader').addClass('noHeader');
    $('main').addClass('twoTarget');
    
  }
  

  
  const contains = function () {
    command = 'contains';
    $('.contains').addClass('appear');
  
    //remove other visible
    $('.print').removeClass('appear');
    $('.lookup').removeClass('appear');
    $('.update').removeClass('appear');
    $('.add').removeClass('appear');
    $('.delete').removeClass('appear');
    $('.verify').removeClass('appear');
    $('#homeheader').addClass('noHeader');
    $('main').addClass('twoTarget');
    
  }
  
  const add = function () {
    command = 'add';
    $('.add').addClass('appear');
    
    //remove other visible
    $('.print').removeClass('appear');
    $('.verify').removeClass('appear');
    $('.update').removeClass('appear');
    $('.lookup').removeClass('appear');
    $('.delete').removeClass('appear');
    $('.contains').removeClass('appear');
    $('#homeheader').addClass('noHeader');
    $('main').addClass('twoTarget');
    
  }
  /////////update
  const update = function () {
    command = 'update';
    $('.update').addClass('appear');
    
    //remove other visible + added JS
    $('.print').removeClass('appear');
    $('.verify').removeClass('appear');
    $('.lookup').removeClass('appear');
    $('.add').removeClass('appear');
    $('.delete').removeClass('appear');
    $('.contains').removeClass('appear');
    $('#homeheader').addClass('noHeader');
    $('main').addClass('twoTarget');
    
  }
    
  const deleteStuff = function () {
    command = 'delete';
    $('.delete').addClass('appear');
  
    //remove other visible
    $('.print').removeClass('appear');
    $('.verify').removeClass('appear');
    $('.update').removeClass('appear');
    $('.add').removeClass('appear');
    $('.lookup').removeClass('appear');
    $('.contains').removeClass('appear');
    $('#homeheader').addClass('noHeader');
    $('main').addClass('twoTarget');
    
  }
  

  //////////////////  Commands

const commandCheck = function () {
  switch (command) {
    case 'print':
        employeeList.forEach(employee => 
          {( rightStuff += employee.name +`<br/>`+ employee.officeNum +`<br/>`+employee.phoneNum +`<br/>`) });
        render(rightStuff);

        break;
        case 'verify':
        nameEntry = $('#verifyName').val();
        nameMatch = employeeList.find(function(name) {if (name.name === nameEntry) str ='Employee Found';});
        render(str);
        $('#verifySubmit').on('click', nameMatch);
    
  
    break;
    case 'lookup':
        nameEntry = $('#checkLookup').val();
        nameMatch = employeeList.find(function(employee) {if (employee.name === nameEntry) {str = employee.name +`<br/>`+ employee.officeNum +`<br/>`+employee.phoneNum +`<br/>`}
        else {
          str = 'Employee Not Found';
        }
        });
        render(str);
        $('#submitLookup').on('click', nameMatch);
    
    break;
    case 'contains':
        nameEntry = $('#checkContains').val();
        str = '';
        nameContains = employeeList.filter(employee => employee.name.includes(nameEntry)); 
        if (nameContains.length >= 1) {
          nameContains.forEach(employee => {str += employee.name +`<br/>`+ employee.officeNum +`<br/>`+ employee.phoneNum +`<br/>` });
        }
        else {
          str = 'Employee not found';
        }
        render(str);
   
    $('#submitContains').on('click', nameContains);
    break;
    case 'add':
         let nameCatch = $('#nameAdd').val();
         let fieldPrompt = $('#numberAdd').val();
         let valuePrompt = $('#phoneAdd').val();
         let newEmployee = new Object();
        newEmployee.name = nameCatch;
        newEmployee.officeNum = fieldPrompt;
        newEmployee.phoneNum = valuePrompt;
        employeeList.push(newEmployee);
    
        $('#submitAdd').on('click', newEmployee);
        employeeList.forEach(employee => {render(employee.name +`<br/>`+ employee.officeNum +`<br/>`+ employee.phoneNum +`<br/>` )}); //Since it replaces each time it will only display last

    
    break;
    case 'update':
          nameSwitch = $('#nameUpdate').val();
          fieldSwitch = $('#numberUpdate').val();
          valueSwitch = $('#phoneUpdate').val();
          
          let updatePerson = employeeList.find(function(employee) {if (employee.name === nameSwitch) 
            { employee.name = nameSwitch;
              employee.officeNum = fieldSwitch;
              employee.phoneNum = valueSwitch;}
          else {str = 'Employee Not Found';}
          render(employee.name +`<br />`+ employee.officeNum +`<br />`+ employee.phoneNum);
          });

    $('#submitUpdate').on('click', updatePerson);
    
     
    break;
    case 'delete':
    console.log('delete works');
    str = '';
    let nameStore = $('#employeeDelete').val();
    let findIndexEmployee = function () {return employeeList.findIndex(nameStore); }
    const removeEmployee = function () {employeeList.splice(findIndexEmployee, 1) }
    $('#deleteSubmit').on('click', removeEmployee);
      
   if (employeeList.name === nameStore) 
   {str = employee.name +`<br/>`+ employee.officeNum +`<br/>`+employee.phoneNum +`<br/>`}
    else { str = 'Employee Deleted';}
    render(str);
    break;
    };


}

  
  //Events
  
  $('#print').on('click', print);
  $('#verify').on('click', verify);
  $('#contains').on('click', contains);
  $('#lookup').on('click', lookup);
  $('#add').on('click', add);
  $('#update').on('click', update);
  $('#delete').on('click', deleteStuff);
  
  
  $('.submit').on('click', commandCheck);
  
 

    
