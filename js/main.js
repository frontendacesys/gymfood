///////////////////////
/////// MAIN.js /////// 
///////////////////////

$(document).ready(function(){
  if ($(window).width() > 768) {
     
   
  $('.goal_item').click(function(){
      var col = $(this).attr('class');
      switch (col) {
          case "goal_item goal_1":
              $('.goal_item').removeClass('active');
              $('.goal_item.goal_1').addClass('active');
              $('.goals').removeClass('active');
              $('.g1').addClass('active');
            break;
          case "goal_item goal_2":
              $('.goal_item').removeClass('active');
              $('.goal_item.goal_2').addClass('active');
              $('.goals').removeClass('active');
              $('.g2').addClass('active');                
            break;
            case "goal_item goal_3":
              $('.goal_item').removeClass('active');
              $('.goal_item.goal_3').addClass('active'); 
              $('.goals').removeClass('active');               
              $('.g3').addClass('active');
            break;
          default:
          $('.goal_item').removeClass('active');
          $('.goal_item.goal_1').addClass('active');                
          $('.g1').addClass('active');
        } 
  });

//cursor
$('body').mouseover(function() {
  $(this).css({
    cursor: 'none'
  });
  $('a').css({
    cursor:'none'
  });
  $('button').css({
    cursor:'none'
  });
  $('input').css({
    cursor:'none'
  })
});

$(document).on('mousemove', function(e) {
  $('#circle-big').css({
    left: e.pageX,
    top: e.pageY
  });
  $('#circle').css({
    left: e.pageX,
    top: e.pageY
  });
});
$('a').hover(function() {
    $('#circle').toggleClass('on-link');
});
$('button').hover(function() {
  $('#circle').toggleClass('on-link');
});
$('input').hover(function() {
  $('#circle').toggleClass('on-link');
})
//cor
  
  



}//Width less than 768


  //MENU TOGGLES
  $('.nav-btn').on('click',function(e){
    var target = $(this);
    e.preventDefault();

    target.toggleClass('nav-on');
    $('#mobNavbar').toggleClass('open');
    
  });

});
/// add animateion class
setTimeout(function(){ 
  $('#section0 .line-hz').addClass('anim');
 }, 1200);

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

