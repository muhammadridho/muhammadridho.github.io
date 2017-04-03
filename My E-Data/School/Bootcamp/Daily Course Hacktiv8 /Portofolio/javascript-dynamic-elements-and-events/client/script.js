$(document).ready(function(){
  $('.todo').each(function(index){
      console.log('click'+index);
  })




class Controller {
showTodo(){
  Model.grabData()
}

addTask(event){
    event.preventDefault();
    var task = $('#task').val()
     $('#modal1').modal('close');
     $.ajax({
       type: "POST",
       url: 'http://localhost:3000/todo',
       data : {task : task},
       success: function(data){
        View.showMessage('added new task')
        $('ul').remove()
        apps.showTodo()

       }
    })
}

}

class Model {
static grabData(){
  var todo
  $.when($.getJSON( "http://localhost:3000/todo/"))
   .then(function(todo, textStatus, jqXHR){
      if (!textStatus) return false
      View.showTodo(todo.data)
  })
}

static completed(data){
  $.ajax({
    url: 'http://localhost:3000/todo/completed/'+data.val(),
    type: 'PUT',
    success: function(data) {
      console.log('completed');
      View.showMessage('completed')
    }
  })
}

static uncompleted(data) {
  $.ajax({
    url: 'http://localhost:3000/todo/uncompleted/'+data.val(),
    type: 'PUT',
    success: function(data) {
      console.log('uncompleted');
      View.showMessage('uncompleted')
    }
  })
}

static delete(deletedTarget){
  $.ajax({
    url: `http://localhost:3000/todo/`+deletedTarget,
    type: 'DELETE',
    success: function (data) {
      View.showMessage('deleted task')
      $('ul li#'+deletedTarget).remove()
    }
  })
}
}


class View {
static showTodo(data){
  var items = [];
  $.each( data, function( key, val ) {
    if (val.completed){
      items.push( "<li id='"+val.task.split(" ").join("-")+"' class='collection-item'> <input type='checkbox' id='" + val._id + "' class='todos' value='"+val.task+"' checked/><label for='"+val._id+"'>"+val.task+"</label></br><p class='chip'><a class='deleted' id='"+val.task+"' value='1' href='#'><class='small material-icons'>Deleted Task</i></a></p></li>" );
    }else {
      items.push( "<li id='"+val.task.split(" ").join("-")+"' class='collection-item'> <input type='checkbox' id='" + val._id + "' class='todos' value='"+val.task+"'/><label for='"+val._id+"'>"+val.task+"</label></br><p class='chip'><a class='deleted' id='"+val.task+"' value='1' href='#'>Deleted Task</a></p></li>" );
    }

  })

  $( "<ul/>", {
    "id": "cek",
    "class" :"collection",
    html: items.join( "" )
  }).appendTo( "body" );

  $(function(){
    $("input[type='checkbox'].todos").click(function () {
      if ( $(this).is(':checked') ) {
        Model.completed($(this))
      }else {
        Model.uncompleted($(this))
      }
    })
  //berikan fungsi setiap tombol
  $( "a.deleted" ).click(function( event ) {
      event.preventDefault();
      var deletedTarget = $(this).attr('id').split(' ').join('-')
      Model.delete(deletedTarget)
    })
  })

}

static showMessage(message){
  var $toastContent = $('<span>'+message+'</span>');
   Materialize.toast($toastContent, 3000);
}
}




  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();

let apps = new Controller()
apps.showTodo()
$('button').on('click', apps.addTask)




});
