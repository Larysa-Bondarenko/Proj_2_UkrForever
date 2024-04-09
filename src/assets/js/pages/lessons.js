
    async function findLessonsByLevel(level) {
      try {
          
          const response = await fetch('./data/lessons.json');
          const lessons = await response.json();
          
          const filteredLessons = lessons.filter(lesson => {
              const lowerCaseLevel = level.toLowerCase();
              const lowerCaseLessonLevels = lesson.level.map(l => l.toLowerCase());
              return lowerCaseLessonLevels.includes(lowerCaseLevel);
          });
          

          displayFilteredLessons(filteredLessons);
      } catch (error) {
          console.error('Error fetching or filtering lessons:', error);
      }
  }
  
  function displayFilteredLessons(filteredLessons) {
      const lessonsGrid = document.getElementById('filteredLessons');
      lessonsGrid.innerHTML = '';
  
      filteredLessons.forEach(lesson => {
          const lessonDiv = document.createElement('div');
          lessonDiv.classList.add('lesson-item');
  
          lessonDiv.innerHTML = `
              <div class="lesson-item">
                  <img src="${lesson.image}" alt="${lesson.title}">
                  <div class="level">${lesson.level.join(', ')}</div>
                  <div class="type-duration">
                      <div class="type">${lesson.type}</div> 
                      <div class="duration">${lesson.timing}</div>
                  </div>
                  <h4>${lesson.title}</h4>
                  <div class="category">${lesson.category}</div>
                  <p class="description">${lesson.description}</p>         
                  <div class="subscr-btn">
                      <div class="subscribtion">${lesson.plan}</div> 
                      <button type="button" class="btn show-btn" onclick="openLesson('${lesson.lessonUrl}')">${lesson.buttonText}</button>
                  </div>
              </div>
          `;
  
          lessonsGrid.appendChild(lessonDiv);
      });
  }
  
  function handleSearchButtonClick() {
      const searchInput = document.getElementById('level');
      const level = searchInput.value.toLowerCase(); 
  

      findLessonsByLevel(level);
  }

  
//FOR LESSON PLANS loaded from json onclick on the menu item "Lessons"

document.addEventListener('DOMContentLoaded', function() {
    const lessonsLink = document.getElementById('lessons-link');
    const lessonsGrid = document.getElementById('lessons-grid');
  
    fetchLessonsAndRender();
  
    function fetchLessonsAndRender() {
      fetch('./data/lessons.json')
        .then(response => response.json())
        .then(data => renderLessons(data));
    };
  
    function renderLessons(lessons) {
      // Clear previous content ???
      lessonsGrid.innerHTML = '';
  
      
      lessons.forEach(lesson => {
        const lessonItem = document.createElement('div');
        lessonItem.classList.add('lesson-item');
  
        
        lessonItem.innerHTML = `

            <img src="${lesson.image}" alt="${lesson.title}">
            <div class="level"> ${lesson.level.join(', ')}</div>
            <div class="type-duration">
            <div class="type">${lesson.type}</div> 
            <div class="duration"> ${lesson.timing}</div>
            </div>
            <h4>${lesson.title}</h4>
            <div class="category"> ${lesson.category}</div>
            <p class="description">${lesson.description}</p>           
            <div class="subscr-btn">
            <div class="subscribtion">${lesson.plan}</div> 
            <button type="button" class="btn show-btn"onclick="openLesson('${lesson.lessonUrl}')">${lesson.buttonText}</button>
          </div>

            `;  
       
        lessonsGrid.appendChild(lessonItem);
      });
    }
  
    function openLesson(lessonUrl) {
      
      window.location.href = lessonUrl;
    }
  });




