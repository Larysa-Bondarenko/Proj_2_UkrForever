//For lessons slider
async function getLessons(){
    try {
    const response = await fetch('data/lessons.json')
    const lessonsJson = await response.json()
    // console.log('lessonsJson', json);
    let list = '<ul id="lessonSlider" class="lessonSlider">';
    lessonsJson.forEach(item => {
        list += `
        <li class="lesson-card">
        <img src="${item.image}" alt="${item.title}"> 
        <div class="level">${item.level.join(', ')}</div>
        <div class="type-duration">
            <div class="type">${item.type}</div>
            <div class="duration">${item.timing}</div>
        </div>
        <h4 lang="uk">${item.title}</h4>
        <div class="category">${item.category}</div>
        <p class="description">${item.description}</p>
        <div class="subscr-btn">
            <div class="subscription">${item.plan}</div>
            <button type="button" class="btn show-btn"onclick="openLesson('${item.lessonUrl}')">${item.buttonText}</button>
        </div>
        </li>
        `
    })
    list += '</ul>';
    document.getElementById('lessonSlider-wrap').innerHTML = list; 



$(function(){

    const lessonSlider = $("#lessonSlider").lightSlider({
        item: 3,
        slideMargin: 30,
        itemWidth: 370,
        itemHeight: 514,
        loop: true,
        speed: 1000,
        auto: true,
        controls: false,
        pause: 3000,
        pauseOnHover: true,
        
        responsive : [
            {
                breakpoint:975,
                        settings: {
                            item:2,
                            slideMove:1,
                            slideMargin:35
                          }
                    },
            {
                breakpoint:700,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:40
                  }
            }
        ]

    })

})

//console says - Uncaught TypeError: lessonSlider.goToNextSlide is not a function
    // at HTMLButtonElement.<anonymous> (main.min.js:1:1291)
    // at HTMLButtonElement.dispatch (all.min.js:2:126683)
    // at v.handle (all.min.js:2:124674)
  //FIX custom buttons  Later  

// $("#lessonSliderPrev").on('click', function(){
//     lessonSlider.goToPrevSlide();
// })

// $("#lessonSliderNext").on('click', function(){  
//     lessonSlider.goToNextSlide();
// })

} catch (error) {
console.error('Error fetching lessons:', error);
}
}
getLessons();