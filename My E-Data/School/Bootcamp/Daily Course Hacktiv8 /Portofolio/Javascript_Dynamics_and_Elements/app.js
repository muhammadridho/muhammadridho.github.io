

// var controller = function(){
//     // var add = function (){
//     //   $('.dice').append('<div class="die">0</div>')
//     //   console.log('tes');
//     // }
//     console.log('addd');
//     var hello = function(){
//       console.log('tes');
//     }
//     return {
//       add : function(){
//         console.log('tes');
//       }
//     }
//
//
// }


class Controller {

  add(){
     $('.dice').append(View.first())
  }
  roll(){
    $('.die').each(Model.getRandom)
  }
}

class Model {
  static getRandom(k, die){
      var value = Math.floor((Math.random() * 6)+1)
      View.set(die,value)
    }
}

class View {
  static first(){
    return '<div class="die">0</div>'
  }
  static set(element,value){
      $(element).text(value)
  }
}

var controller = new Controller()
$(document).ready(function(){
  $('#roller button.add').on('click', controller.add)
  $('#roller button.roll').on('click', controller.roll)
})
