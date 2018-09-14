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
  
  
  let command = '' ;
  let rightStuff ='';
  
  let render = function (rightStuff) {
    $('#job-board').html(rightStuff);
  }
  
  let renderSecond = function (rightStuff) {
    $('.print').html(rightStuff);
  }
  
  
  
  ///////////////Test loop
  
  
  
  //command check display content
  
  const commandCheck = function () {
   
  
   if (command === 'print') {
  
    
    for (i = 0; i < employeeList.length; i++) {
    
      rightStuff += `<p>${employeeList[i].name}</p>`;
      rightStuff +=`<p>${employeeList[i].officeNum}</p>`;
      rightStuff +=`<p>${employeeList[i].phoneNum}</p>`;
    }
  
    render(rightStuff);
  
  }
  
  else if  (command === 'verify')  {
   
    let nameEntry = $('#verifyName').val();
    console.log('name', nameEntry) ;
    let str = 'false'
     for (i = 0; i < employeeList.length; i++) {
      let nameMatch = employeeList[i].name;
            
      if (nameMatch === nameEntry) {
        str ='true';
      }
  
      
    }
      render(str);
  
   
  }
  
  
  else if (command === 'lookup') {
    let nameEntry = $('#checkLookup').val();
    let nameMatch = function () {
    for (i = 0; i < employeeList.length; i++) {
      let nameContains = employeeList[i].name;
            
      if (nameContains === nameEntry) {
        render(employeeList[i].name +`<br />`+ employeeList[i].officeNum +`<br />`+ employeeList[i].phoneNum);
      }
      }
  }
  $('#submitLookup').on('click', nameMatch);
  }
  
  
  else if (command === 'contains') {
    let nameEntry = $('#checkContains').val();
      let nameMatch = function () {
        for (i = 0; i < employeeList.length; i++) {
          let nameContains = employeeList[i].name;
                
          if (nameContains.includes(nameEntry)) {
            render(employeeList[i].name +`<br />`+ employeeList[i].officeNum +`<br />`+ employeeList[i].phoneNum);
           
          }
          }
      }
      $('#submitContains').on('click', nameMatch);
  
  }
  
  else if (command === 'update')  {
   
    const namePrompt = $('#nameUpdate').val();
    const fieldPrompt = $('#numberUpdate').val();
    const valuePrompt = $('#phoneUpdate').val();
    
    let updatePerson = function () {
  
      for (i = 0; i < employeeList.length; i++) {
        let nameContains = employeeList[i].name;
              
        if (nameContains === namePrompt) {
          employeeList[i].name = namePrompt;
          employeeList[i].officeNum = fieldPrompt;
          employeeList[i].phoneNum = valuePrompt;
        }
        render(employeeList[i].name +`<br />`+ employeeList[i].officeNum +`<br />`+ employeeList[i].phoneNum);
      }
      
    }
    $('#submitUpdate').on('click', updatePerson);
  }
  
  
   else if (command === 'add') {
    const namePrompt = $('#nameAdd').val();
    const fieldPrompt = $('#numberAdd').val();
    const valuePrompt = $('#phoneAdd').val();
  
    let newEmployee = new Object();
  
      newEmployee.name = namePrompt;
      newEmployee.officeNum = fieldPrompt;
      newEmployee.phoneNum = valuePrompt;
      employeeList.push(newEmployee);
   
     for (i = 0; i < employeeList.length; i++) {
      console.log(employeeList[i].name);
      console.log(employeeList[i].officeNum);
      console.log(employeeList[i].phoneNum);
    }
    
    $('#submitAdd').on('click', newEmployee);
  }
  else if (command === 'delete') {
    const namePrompt = $('#employeeDelete').val();
  
    let findIndexEmployee = function () { 
      
      return employeeList.findIndex(namePrompt); }
    const removeEmployee = function () {
      employeeList.splice(findIndexEmployee, 1);
    }
  
  $('#deleteSubmit').on('click', removeEmployee);
  
  for (i = 0; i < employeeList.length; i++) {
    console.log(employeeList[i].name);
    console.log(employeeList[i].officeNum);
    console.log(employeeList[i].phoneNum);
  } 
  }
  
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
    $('#homeheader').style.display = 'none';
    $('#homesubheader').addClass('twoTarget');
    
  
  
    
    commandCheck();
    
  
  }
  
  ////////
  
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
   
    
    //Show verify
  
  
  
    
  
   
  }
  
  
  ////////////
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
  
  }
  
  
  ////////////
  
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
  
  }
  
  ///////////
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
    
  }
  /////////
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
   
  }
    
  ////////////
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
  
  