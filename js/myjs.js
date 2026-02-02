$( document ).ready(function() {
   
 $( ".hover-lay" ).hide();
 // $(".popup").hide();
 // $(".icon-return").hide();

 function scroll_to_top(div) {
        $(div).click(function() {
            $('html,body').animate({scrollTop: 0}, 'slow');
        });
        $(window).scroll(function(){
            if($(window).scrollTop()<500){
                $(div).fadeOut();
            } else{
                $(div).fadeIn();
            }
        });
  }
    scroll_to_top("#scroll_to_top");


 if (window.location.href.indexOf("work.html") > -1) { 
        $('.nav .mon-travail').css({
          'text-decoration':'underline',
          'color':'#ffcc03'
          });
  }

  if (window.location.href.indexOf("me.html") > -1) { 
        $('.nav .qui-suis-je').css({
          'text-decoration':'underline',
          'color':'#ffcc03'
          });
  }

  if (window.location.href.indexOf("contact.html") > -1) { 
        $('.nav .contact').css({
          'text-decoration':'underline',
          'color':'#ffcc03'
          });
  }

  $(document).scroll(function() { 
   if($(window).scrollTop() === 0) {
     $(".nav").css({
          'box-shadow': '0px 3px 25px 5px rgb(0 0 0 / 0%)'
      });
   }
   else {
    $(".nav").css({
          'box-shadow': '0px 3px 25px 5px rgb(0 0 0 / 20%)'
      });
   }
});


  // hover-lay switch in project

  $( ".project" ).hover(
    function() {
     $(".hover-lay", this ).fadeIn();
    }, function() {
     $(".hover-lay", this ).hide();
    }
  );

  

  // popup return

  $(".icon-return").click(function(){
    $(".popup").addClass("hide");
    $(".popup-overlay").addClass("hide");
    $(".icon-return").addClass("hide");
    $(".hover-lay").hide();
    $(".popup").removeClass("on");
    // $('html,body').animate({scrollTop: 0}, 'slow');
  });


  $(".popup-overlay").click(function(){
    $(".popup").addClass("hide");
    $(".popup-overlay").addClass("hide");
    $(".icon-return").addClass("hide");
    $(".hover-lay").hide();
    $(".popup").removeClass("on");
  });

  // popup open

  $(".project").click(function(){

      if ($(".popup", this).hasClass("on")){
        // $(".popup").fadeOut();
        // $(".icon-return").hide();
        // $(".hover-lay").hide();
        $(".popup", this).removeClass("on");
        // $('html,body').animate({scrollTop: 0}, 'slow');
      }

      else {

        $(".popup", this ).removeClass("hide");
        $(".icon-return").removeClass("hide");
        $(".popup-overlay").removeClass("hide");
        $(".hover-lay").hide();
        $(".popup", this).addClass("on");
        $('html,body').animate({scrollTop: 0}, 'slow');
      }      
  });

// hide free logo

  $('img').each(function(){
  if($(this).attr("alt") == "phpMyVisites"){
    $(this).css("display","none");
    }
});

  






});