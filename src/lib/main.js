
function preloadFile(url) {
    return new Promise((resolve, reject) => {
      const fileType = url.split('.').pop().toLowerCase();
      console.log(url)
  
      if (fileType === 'jpg' || fileType === 'png' || fileType === 'gif') {
        // Preload images
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      } else if (fileType === 'mp4' || fileType === 'webm') {
        // Preload videos
        const video = document.createElement('video');
        video.src = url;
        video.onloadeddata = resolve;
        video.onerror = reject;
      } else {
        // Preload other file types (like GLB)
        fetch(url)
          .then(response => response.blob())
          .then(resolve)
          .catch(reject);
      }
    });
  }


function preloadFiles(urls) {
    const promises = urls.map(url => preloadFile(url));
    
    Promise.all(promises)
      .then(() => {
        console.log('All files preloaded');
        // Hide loading screen and show the UI
        document.querySelector('.loading-screen').classList.add('hide-loader')

      })
      .catch(error => console.error('Error preloading files:', error));
  }


  function animateWords() {

    const words = ["Romance", "Rings", "Relationships"]
    let currentIndex = 0
    let split
    const textElement = document.querySelector('.primary-h1 span')
  
    function updateText() {
      textElement.textContent = words[currentIndex]
      split = new SplitType(textElement, {type: 'chars' })
      animateChars(split.chars)
      currentIndex = (currentIndex + 1) % words.length
    }

  
    function animateChars(chars) {
      gsap.from(chars, {
        yPercent: 100,
        stagger: 0.03,
        duration: 1.5,
        ease: 'power4.out',
        onComplete: () => {
          if (split) {
            split.revert()
          }
        }
      })
    }
  
    setInterval(updateText, 3000)
  
  }

document.addEventListener('DOMContentLoaded', () => {

    preloadFiles(['tv.png','grid.png'])
    console.log('DOM fully loaded and parsed')
    // animateWords()
})