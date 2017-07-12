// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

window.updateMessageViaJSON = function(){
  var room_id = window.location.href.match(/\/rooms\/(\d+)\/messages/);
  if (!!room_id){
    $.getJSON('/rooms/'+ room_id[1] +'/messages.json', function(messages) {
      $('#messages_list').html('');
      messages.forEach(function(msg, index){
        messagehtml = '<div class="message">' +
          '<p>'+msg.username+'<br />' +
          '<span class="badge badge-primary">'+ msg.content +'</span></p>'+
        '</div>';
        $('#messages_list').append(messagehtml);
      })
    });
  }
}

window.updateMessageViaJs = function(){
  var room_id = window.location.href.match(/\/rooms\/(\d+)\/messages/);
  if (!!room_id){
    $.getScript('/rooms/'+ room_id[1] +'/messages.js', function(response){
      console.log(response)
    })
    // $.getJSON('/rooms/'+ room_id[1] +'/messages.json', function(messages) {
    //   $('#messages_list').html('');
    //   messages.forEach(function(msg, index){
    //     messagehtml = '<div class="message">' +
    //       '<p>'+msg.username+'<br />' +
    //       '<span class="badge badge-primary">'+ msg.content +'</span></p>'+
    //     '</div>';
    //     $('#messages_list').append(messagehtml);
    //   })
    // });
  }
}