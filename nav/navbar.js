$(document).ready(function() {
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    if (isMobile.matches) {

        // var targetOffset1 = $("#section1").offset().top;
        var targetOffset2 = $("#section2").offset().top;
        var targetOffset3 = $("#section3").offset().top;
        // var targetOffset4 = $("#section4").offset().top;
        var targetOffset5 = $("#section5").offset().top;
        var targetOffset6 = $("#section6").offset().top;
        var targetOffset7 = $("#section7").offset().top;
        var targetOffset8 = $("#section8").offset().top;
        var targetOffset9 = $("#section9").offset().top;

        console.log("t1 : "+targetOffset1);
        console.log("t2 : "+targetOffset2);
        console.log("t3 : "+targetOffset3);
        console.log("t4 : "+targetOffset4);
        console.log("t5 : "+targetOffset5);
        console.log("t6 : "+targetOffset6);
        console.log("t7 : "+targetOffset7);
        console.log("t8 : "+targetOffset8);
        console.log("t9 : "+targetOffset9);

        $('#about').addClass('highlight');
        //alert('im here');

        $(document).scroll(function() {
            //alert('im here also?');
            // console.log('scroll:',$(this).scrollTop());
            
            if( $(this).scrollTop() < targetOffset3 )
            {

                //  alert('home');
                $('#cont').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#about').addClass('highlight');
                
                


                //console.log("t1 : "+targetOffset1);
                //console.log("t2 : "+targetOffset2);
                //console.log("t3 : "+targetOffset3);
                //console.log("t4 : "+targetOffset4);
            }
            else if(  $(this).scrollTop()>=targetOffset3 && $(this).scrollTop()<targetOffset5) {
                
                //alert('about');
                
                $('#cont').removeClass('highlight');
                $('#about').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#highl').addClass('highlight');
                
            } 
            else if( $(this).scrollTop() >= targetOffset5  && $(this).scrollTop()<targetOffset6 )
            {

                //alert('services');
                $('#about').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#types').addClass('highlight');

                

            }
            else if( $(this).scrollTop() >= targetOffset6  && $(this).scrollTop()<targetOffset7 )
            {
                //alert('contact');
                
                $('#about').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#fac').addClass('highlight');


                
            }
            else if( $(this).scrollTop() >= targetOffset7  && $(this).scrollTop()<targetOffset8 )
            {
                //alert('contact');
                $('#about').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#speci').addClass('highlight');

                

                
            }
            else if( $(this).scrollTop() >= targetOffset8  && $(this).scrollTop()<targetOffset9 )
            {
                //alert('contact');
                $('#about').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#fac').removeClass('highlight');

                $('#accessi').addClass('highlight');
                
            }
            else if( $(this).scrollTop() >= targetOffset9  )
            {
                //alert('contact');
                $('#about').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#cont').addClass('highlight');
                
                

                
            }
            
        });    
    }
    else 
    {
        var targetOffset1 = $("#section1").offset().top;
        var targetOffset2 = $("#section2").offset().top;
        var targetOffset3 = $("#section3").offset().top;
        var targetOffset4 = $("#section4").offset().top;
        var targetOffset5 = $("#section5").offset().top;
        var targetOffset6 = $("#section6").offset().top;
        var targetOffset7 = $("#section7").offset().top;
        var targetOffset8 = $("#section8").offset().top;
        var targetOffset9 = $("#section9").offset().top;

        console.log("t1 : "+targetOffset1);
        console.log("t2 : "+targetOffset2);
        console.log("t3 : "+targetOffset3);
        console.log("t4 : "+targetOffset4);
        console.log("t5 : "+targetOffset5);
        console.log("t6 : "+targetOffset6);
        console.log("t7 : "+targetOffset7);
        console.log("t8 : "+targetOffset8);
        console.log("t9 : "+targetOffset9);

        $('#home').addClass('highlight');
        //alert('im here');

        $(document).scroll(function() {
            //alert('im here also?');
            // console.log('scroll:',$(this).scrollTop());
            
            if( $(this).scrollTop() < targetOffset2 )
            {

                //  alert('home');
                $('#about').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#plan').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#home').addClass('highlight');
                
                


                //console.log("t1 : "+targetOffset1);
                //console.log("t2 : "+targetOffset2);
                //console.log("t3 : "+targetOffset3);
                //console.log("t4 : "+targetOffset4);
            }
            else if(  $(this).scrollTop()>=targetOffset2 && $(this).scrollTop()<targetOffset3) {
                
                //alert('about');
                $('#home').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#plan').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#about').addClass('highlight');
                
            } 
            else if( $(this).scrollTop() >= targetOffset3  && $(this).scrollTop()<targetOffset4 )
            {

                //alert('services');
                $('#about').removeClass('highlight');
                $('#home').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#plan').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#highl').addClass('highlight');

                

            }
            else if( $(this).scrollTop() >= targetOffset4  && $(this).scrollTop()<targetOffset5 )
            {
                //alert('contact');
                
                $('#about').removeClass('highlight');
                $('#home').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#plan').addClass('highlight');


                
            }
            else if( $(this).scrollTop() >= targetOffset5  && $(this).scrollTop()<targetOffset6 )
            {
                //alert('contact');
                $('#about').removeClass('highlight');
                $('#home').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#plan').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#types').addClass('highlight');

                

                
            }
            else if( $(this).scrollTop() >= targetOffset6  && $(this).scrollTop()<targetOffset7 )
            {
                //alert('contact');
                $('#about').removeClass('highlight');
                $('#home').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#plan').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#fac').addClass('highlight');
                
            }
            else if( $(this).scrollTop() >= targetOffset7  && $(this).scrollTop()<targetOffset8 )
            {
                //alert('contact');
                $('#about').removeClass('highlight');
                $('#home').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#plan').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#cont').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#speci').addClass('highlight');
                
                

                
            }
            else if( $(this).scrollTop() >= targetOffset8  && $(this).scrollTop()<targetOffset9 )
            {
                //alert('contact');
                $('#about').removeClass('highlight');
                $('#home').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#plan').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#cont').removeClass('highlight');

                $('#accessi').addClass('highlight');
                
                

            }
            else if( $(this).scrollTop() >= targetOffset9  )
            {
                //alert('contact');
                $('#about').removeClass('highlight');
                $('#home').removeClass('highlight');
                $('#highl').removeClass('highlight');
                $('#plan').removeClass('highlight');
                $('#types').removeClass('highlight');
                $('#fac').removeClass('highlight');
                $('#speci').removeClass('highlight');
                $('#accessi').removeClass('highlight');

                $('#cont').addClass('highlight');
                
                

                
            }
            
        });
    }

        
    
}); // end of document ready


    