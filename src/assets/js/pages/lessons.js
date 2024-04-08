//Filtered by level
const lessons = [
    {
          "level": ["A1", "A2", "Pre-Intermediate"],
          "image": "assets/images/bears-couch.jpg",
          "type": "Standard", 
          "timing": 30,
          "title": "Молодь у світі",
          "category": "General",
          "description": "With this lesson, students explore and expand transport vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Free",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["B1", "Intermediate"],
          "image": "assets/images/cat-draw.jpg",
          "type": "Reading", 
          "timing": 60,
          "title": "Тигр у тобі",
          "category": "Lifestyle",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Premium",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["B2", "Upper Intermediate"],
          "image": "assets/images/coffee-cups.jpg",
          "type": "Speaking", 
          "timing": 45,
          "title": "Час пити каву",
          "category": "Business",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Unlimited",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["C1", "Advanced"],
          "image": "assets/images/gun-woman.jpg",
          "type": "Flipped", 
          "timing": 30,
          "title": "Розум - це потужна зброя",
          "category": "Global",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Free",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["A1", "A2", "Pre-Intermediate"],
          "image": "assets/images/bears-icecream.jpg",
          "type": "Reading", 
          "timing": 30,
          "title": "Як добре бути ведмедем",
          "category": "General",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Free",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["B1", "Intermediate"],
          "image": "assets/images/hands-up.jpg",
          "type": "Speaking", 
          "timing": 60,
          "title": "Дістати до зірок",
          "category": "Global",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Premium",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["B2", "Upper Intermediate"],
          "image": "assets/images/lion.jpg",
          "type": "Flipped", 
          "timing": 45,
          "title": "Лідерство і комунікація",
          "category": "Lifestyle",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Unlimited",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["C1", "Advanced"],
          "image": "assets/images/minions.jpg",
          "type": "Standard", 
          "timing": 45,
          "title": "Робота у команді",
          "category": "General",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Free",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["A1", "A2", "Pre-Intermediate"],
          "image": "assets/images/cubes.webp",
          "type": "Standard", 
          "timing": 60,
          "title": "Форми у житті",
          "category": "Technology",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Free",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["B1", "Intermediate"],
          "image": "assets/images/go-for-it.webp",
          "type": "Reading", 
          "timing": 45,
          "title": "Грай у Скребл",
          "category": "General",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Premium",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["B2", "Upper Intermediate"],
          "image": "assets/images/hand-with-card.webp",
          "type": "Flipped", 
          "timing": 30,
          "title": "Тепер ти бачиш мене",
          "category": "Business",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Unlimited",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    },
    {
          "level": ["C1", "Advanced"],
          "image": "assets/images/welcome.webp",
          "type": "Speaking", 
          "timing": 45,
          "title": "Забудьте все , що ви знали до цього",
          "category": "Lifestyle",
          "description": "With this lesson, students explore and expand  vocabulary, and dive into a cool discussion about the innovative idea through a fun video",
          "plan": "Free",
          "buttonText": "Show",
          "lessonUrl": "plan.html"
    }
    ]
    
    function findLessonsByLevel(level) {
        return lessons.filter(lesson => {
            
            const lowerCaseLevel = level.toLowerCase();
            const lowerCaseLessonLevels = lesson.level.map(l => l.toLowerCase());
            return lowerCaseLessonLevels.includes(lowerCaseLevel);
        })
      }
      
      function displayFilteredLessons(filteredLessons) {
        const lessonsGrid = document.getElementById('filteredLessons');
       
        lessonsGrid.innerHTML = '';
      
        
        filteredLessons.forEach(lesson => {
         
          const lessonDiv = document.createElement('div');
          lessonDiv.classList.add('lesson');
          
          lessonDiv.innerHTML = `
                   <img src="${lesson.image}" alt="${lesson.title}">
                       <div class="level"> ${lesson.level.join(', ')}</div>
                       <div class="type-duration">
                       <div class="type">${lesson.type}</div> 
                       <div class="duration">${lesson.timing} min</div>
                   </div>
                       <h4>${lesson.title}</h4>
                      <div class="category"> ${lesson.category}</div>
                      <p>${lesson.description}</p>         
                       <div class="subscr-btn">
                       <div class="subscribtion">${lesson.plan}</div> 
                       <button type="button" class="btn show-btn"onclick="openLesson('${lesson.lessonUrl}')">${lesson.buttonText}</button>
                     </div>
          `;
          
          lessonsGrid.appendChild(lessonDiv);
        });
      }

      function handleSearchButtonClick() {
        
        const searchInput = document.getElementById('level');
        const level = searchInput.value.toLowerCase(); 
      
      
        const filteredLessons = findLessonsByLevel(level);
      
       
        displayFilteredLessons(filteredLessons);
      }


      
// async function getNews(){
//     try {
//     const response = await fetch('./data/lessons.json')
//     const newsJson = await response.json()
//     console.log('newsJason', json);
//     let list = '<ul id="newsSlider" class="newsSlider">';
//     newsJson.forEach(item => {
//         list += `
//         <li>
//         <div class="news-img">
//         <img src="${item.image}" alt="${item.title}">
//         </div>
//         <h3>${item.title}</h3>
//         <p class="anons">${item.description}</p>
//         <div class="auth-flex">
           
//         </div>
//       </li>
//         `
//     })
//     list += '</ul>';
//     document.getElementById('newsSlider-wrap').innerHTML = list; 


//     // $('#newsSlider').lightSlider({
//     const newsSlider = $('#newsSlider').lightSlider({   
//         item: 3,
//         slideMargin: 30,
//         loop: true,
//         auto: true,
//         controls: false,
//         itemWidth: 370,
//         itemHeight: 514,
//         pause: 3000,
//         pauseOnHover: true,
        
//         responsive : [
//             {
//                         breakpoint:975,
//                         settings: {
//                             item:2,
//                             slideMove:1,
//                             slideMargin:35
//                           }
//                     },
//             {
//                 breakpoint:700,
//                 settings: {
//                     item:1,
//                     slideMove:1,
//                     slideMargin:40
//                   }
//             }
      
//         ]
      
//     })

//     $("#newsSliderPrev").on('click', function(){
//         newsSlider.goToPrevSlide();
//     })
    
//     $("#newsSliderNext").on('click', function(){  
//         newsSlider.goToNextSlide();
//     })
  
//  } catch (error) {
//     console.error('Error fetching news:', error);
//  }
// }
// getNews();





//FOR LESSON PLANS loaded from json onclick on the menu item "Lessons"
// document.addEventListener('DOMContentLoaded', function() {
//     const lessonsLink = document.getElementById('lessons-link');
//     const lessonsGrid = document.getElementById('lessons-grid');
  
//     fetchLessonsAndRender();
  
//     function fetchLessonsAndRender() {
//       fetch('./data/lessons.json')
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
            // <div class="category"> ${lesson.category}</div>
//             <p>${lesson.description}</p>//             
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