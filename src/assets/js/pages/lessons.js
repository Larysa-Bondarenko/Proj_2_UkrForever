// document.addEventListener('DOMContentLoaded', function() {
//     const lessonsLink = document.getElementById('lessons-link');
//     const lessonsGrid = document.getElementById('lessons-grid');
  
//     fetchLessonsAndRender();
  
//     function fetchLessonsAndRender() {
//       fetch('./lessons.json')
//         .then(response => response.json())
//         .then(data => renderLessons(data));
//     };
  
//     function renderLessons(lessons) {
//       // Clear previous content ???
//       lessonsGrid.innerHTML = '';
  
      
//       lessons.forEach(lesson => {
//         const lessonItem = document.createElement('div');
//         lessonItem.classList.add('lesson-item');
  
        
//         lessonItem.innerHTML = `

//             <img src="${lesson.image}" alt="${lesson.title}">
//             <div class="level"> ${lesson.level.join(', ')}</div>
//             <div class="type-duration">
//             <div class="type">${lesson.type}</div> 
//             <div class="duration"> ${lesson.timing} min</div>
//             </div>
//             <h4>${lesson.title}</h4>
//             <p>${lesson.description}</p>
//             <div>Category: ${lesson.category}</div>
//             <div class="subscr-btn">
//             <div class="subscribtion">${lesson.plan}</div> 
//             <button type="button" class="btn show-btn"onclick="openLesson('${lesson.lessonUrl}')">${lesson.buttonText}</button>
//           </div>

//             `;
  
       
//         lessonsGrid.appendChild(lessonItem);
//       });
//     }
  
//     function openLesson(lessonUrl) {
      
//       window.location.href = lessonUrl;
//     }
//   });


async function getNews(){
    try {
    const response = await fetch('lessons.json')
    const newsJson = await response.json()
    // console.log('newsJason', json);
    let list = '<ul id="newsSlider" class="newsSlider">';
    newsJson.forEach(item => {
        list += `
        <li>
        <div class="news-img">
        <img src="${item.image}" alt="${item.title}">
        </div>
        <h3>${item.title}</h3>
        <p class="anons">${item.description}</p>
        <div class="auth-flex">
           
        </div>
      </li>
        `
    })
    list += '</ul>';
    document.getElementById('newsSlider-wrap').innerHTML = list; 


    // $('#newsSlider').lightSlider({
    const newsSlider = $('#newsSlider').lightSlider({   
        item: 3,
        slideMargin: 30,
        loop: true,
        auto: true,
        controls: false,
        itemWidth: 370,
        itemHeight: 514,
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

    $("#newsSliderPrev").on('click', function(){
        newsSlider.goToPrevSlide();
    })
    
    $("#newsSliderNext").on('click', function(){  
        newsSlider.goToNextSlide();
    })
  
 } catch (error) {
    console.error('Error fetching news:', error);
 }
}
getNews();