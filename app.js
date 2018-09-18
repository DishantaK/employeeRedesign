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

  let command = '' ;
  let rightStuff ='';
  let render = function (rightStuff) {
    $('#job-board').html(rightStuff);
  }



  // Callbacks for Click event
  
  const print = function (event) {
    event.preventDefault();
    command = 'print';
    $('.print').addClass('appear');
  
    console.log('I am working');
  
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
    commandCheck();

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
    commandCheck();
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
    commandCheck();
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
    commandCheck();
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
    commandCheck();
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
    commandCheck();
  }
  

  //////////////////  Commands

const commandCheck = function () {
  switch (command) {
    case 'print':
    console.log('switch works');
    employeeList.forEach(employee => render(employee.name +`<br/>`+ employee.officeNum +`<br/>`+ employee.phoneNum) );
     // fix object render: only printing last elem
    break;
    case 'verify':
    // let nameEntry = $('#verifyName').val();
    // console.log('verify works');
    // const nameMatch = employeeList.filter(employeeList.name === nameEntry).forEach(employee => render(employee.name +`<br/>`+ employee.officeNum +`<br/>`+ employee.phoneNum));

    // $('#verifySubmit').on('click', result);

    // fix object render" [Object,object]
    break;
    case 'lookup':
    console.log('update works');
    
    break;
    case 'contains':
    console.log('contains works');
    
    break;
    case 'add':
    console.log('add works');
    
    break;
    case 'update':
    console.log('update works');
     
    break;
    case 'delete':
    console.log('delete works');
     
  }

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
  
 

    
