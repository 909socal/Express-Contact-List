'use strict';

$(document).ready(init);

function init(){
  $("#submit").on("click", addContact);
}

function addContact(e){
  e.preventDefault();
  var contactName = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var newContact = {name: contactName, email: email, phone: phone};

  $.post('/contacts/add', newContact)
    .success(function(data){
      window.location = "/contacts";
    })
}



function save() {
  let name = $('#editName').val();
  let number = $('#editNumber').val();
  let email = $('#editEmail').val();

  let edit = {
    name: name,
    number: number,
    email: email,
  }

  $.ajax({
      url: '/contacts/update/' + index,
      data: edit,
      type: 'PUT',
      success: (data) => {
        $($row[0]).text(name);
        $($row[1]).text(number);
        $($row[2]).text(email);
      },
      error: (err) => { console.log(err); }
  });
}
