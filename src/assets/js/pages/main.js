/* Scripts for Main page */
console.log('Main page');

// document.addEventListener("DOMContentLoaded", function() {
//     // Check if jQuery is defined
//     if (typeof jQuery === "undefined") {
//         // Display an error message if jQuery is not loaded
//         console.error("jQuery is not loaded. Make sure jQuery is included before this script.");
//         return;
//     }

$(function(){

    const lessonSlider = $("#lessonSlider").lightSlider({
        item: 3,
        slideMargin: 0,
        verticalHeight: 800,
        itemHeight: 800,
        loop: true,
        auto: true,
        controls: false,
        mode: 'fade',
        pause: 3000,
        // pauseOnHover: true
        
        responsive : [
            {
                breakpoint:1100,
                settings: {
                verticalHeight: 700,
                itemHeight: 700     
                }
                        
            },
            {
                breakpoint:1020,
                settings: {
                verticalHeight: 600,
                itemHeight: 600     
                }
                        
            },
            {
                breakpoint:774,
                settings: {
                    verticalHeight: 400,
                itemHeight: 400  
                    
                  }
            }
        ]

    })

})

// })


      


