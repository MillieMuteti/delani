$(document).ready(function(){
    $("#product-img, .product-p").click(function(){
        $(".product-description").fadeToggle();
        $(".product").fadeToggle();
    });
    $("#design-img,.design-p").click(function(){
        $(".design-description").fadeToggle();
        $(".design").fadeToggle();
    });
    $("#dev-img,.dev-p").click(function(){
        $(".dev-description").fadeToggle();
        $(".dev").fadeToggle();
    });
    $("#empty, #project").hover(function(){
        $("#empty").slideDown("slow");
        $("#project").mouseout(function(){
            $("#empty").slideUp("slow");
        });
    });
    $("#pic1, #project2").hover(function(){
        $("#pic1").slideDown("slow");
        $("#project2").mouseout(function(){
            $("pic1").slideUp("slow");
        });
    });
    
    $("#pic2, #project3").hover(function(){
        $("#pic2").slideDown("slow");
        $("#project3").mouseout(function(){
            $("#pic2").slideUp("slow");
        }); 
        });$("#pic3, #project4").hover(function(){
            $("#pic3").slideDown("slow");
            $("#project4").mouseout(function(){
                $("#pic3").slideUp("slow");
            });
        });
        $("#pic4, #project5").hover(function(){
            $("#pic4").slideDown("slow");
            $("#project5").mouseout(function(){
                $("#pic4").slideUp("slow");
            });
        });
        $("#pic5, #project6").hover(function(){
            $("#pic5").slideDown("slow");
            $("#project6").mouseout(function(){
                $("#pic5").slideUp("slow");
            });
        });
        $("#pic6, #project7").hover(function(){
            $("#pic6").slideDown("slow");
            $("#project7").mouseout(function(){
                $("#pic6").slideUp("slow");
            });
        });
        $("#pic7, #project8").hover(function(){
        $("#pic7").slideDown("slow");
        $("#project8").mouseout(function(){
            $("#pic7").slideUp("slow");
        });
        });
        $("#myform").submit(function(e){
            e.preventDefault();
            var name = $("#name").val();
            var email = $("#email").val();
            var message = $("#message").val();
            alert (name +" we have received your message. Thank you for reaching out to us.");
        })
        });