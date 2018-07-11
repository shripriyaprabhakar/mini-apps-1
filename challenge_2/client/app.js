
$('document').ready(function() {
  $("#dataform").submit(function(event) {
    event.preventDefault();
   console.log($('.textClass').val());
    $.ajax({
      type: "POST",
      url: '/',
      contentType: 'application/json', 
      data: $('.textClass').val(),
      success: function( data ) {
        console.log(data);
        $(".response").text(data);
      }
    });



  });
});



// $(document).ready(function() {

// 		// init: function () {
// 		//   app.fetch();
//     var data1;
// 	$('#dataForm').on('click', function(e) {
// 		    e.preventDefault();
	
// 		  //  app.handleSubmit();
// 		  });
		
//     //var app = {
// 		//send: function (json) {
// 		    $.ajax({
// 		      url: '/',
// 		      type: 'POST',
// 		      data1: $('.textClass').val(),
		  
// 		      data: JSON.stringify(data1),
// 		      contentType: 'application/json',
// 		      success: function (data) {
//                   // fetch();
//                   $('.response').append(data);
// 		        console.log('Message sent to server');
// 		      },
// 		      error: function (data) {
// 		        console.error('Failed to send message', data1);
// 		      }
// 		    });
// 		//}

// 		 // var fetch =  function (data) {
// 	  //   	$.ajax({
// 	  //      		url: 'http://127.0.0.1:3000/data',
// 	  //     		type: 'GET',
// 		 //        //data: JSON.stringify('data'),
// 		 //        contentType: 'application/json',
// 		 //        success: function (data) {
// 		 //           $('.response').append(data);
// 		 //        },
// 		 //        error: function (data) {
// 		 //        	console.error('Failed to send message', data1);
// 		 //        }
// 		 //    });
// 	   // },

// 		// handleSubmit: function (json) {
// 	 //       app.send(json);
// 	 //       console.log('submitted');
// 	 //    }

// 	//}
//      //}

// });