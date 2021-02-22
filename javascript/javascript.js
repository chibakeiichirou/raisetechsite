jQuery( function () {

    // $(".menu").hide();
    // $(".sub-menu1").hide();
    // $(".sub-menu2").hide();
    // $(".sub-menu4").hide();
    // $(".sub-menu5").hide();
    // $(".sub-menu6").hide();


    // $(".p-hamburger").on("click", function () {
    //         $(this).toggleClass("is-open");
    //         $("body").toggleClass("is-open");
    //         $(".menu").toggleClass("is-open");
    //         $(".menu").slideToggle("fast");
            // $('.nav-body').css('display','block');
            // $('.menu').css('display','block');

        // });


        $(".p-hamburger").on("click", function () {
            $(this).toggleClass("is-open");
            $(".nav-body").slideToggle("fast");

        });

        $('.list-item1').hover(function() {
                $(".sub-menu1").slideToggle(200);
                $(".menu1").addClass("open");
            },function() {
                $(".sub-menu1").hide();
                $(".menu1").removeClass("open");
         });

        $('.list-item2').hover(function() {
                $(".sub-menu2").slideToggle(200);
                $(".menu2").addClass("open");
            },function() {
                $(".sub-menu2").hide();
                $(".menu2").removeClass("open");
         });

        $('.list-item4').hover(function() {
                $(".sub-menu4").slideToggle(200);
                $(".menu4").addClass("open");
            },function() {
                $(".sub-menu4").hide();
                $(".menu4").removeClass("open");
         });

        $('.list-item5').hover(function() {
                $(".sub-menu5").slideToggle(200);
                $(".menu5").addClass("open");
            },function() {
                $(".sub-menu5").hide();
                $(".menu5").removeClass("open");
         });

        $('.list-item6').hover(function() {
                $(".sub-menu6").slideToggle(200);
                $(".menu6").addClass("open");
            },function() {
                $(".sub-menu6").hide();
                $(".menu6").removeClass("open");
         });

        

         

        
    
    



    });