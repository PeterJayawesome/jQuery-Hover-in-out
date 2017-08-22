$(document).ready(function(){
  $(".box").hover(function(){
    $(this).children().toggle(0);

  },function(){
    $(this).children().toggle(0);
  })
})
