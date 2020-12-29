$(document).ready(function() {
    $("#hide-design").click(function(){
        $(".img1").toggle(100);
        $(".hide").toggle(100);
    });

  $('.submit').click(function () {
          var Name = $('#name').val();
          var Email = $('#email').val();
          var Message = $('#message');
          var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
          if (Name == '' || Email == '' || Message == '') {
              alert('Please make sure you have filled in the form correctly!');
          } else {
              alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
          }
    });
