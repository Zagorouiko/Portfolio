import gsap from "gsap"
import SplitType from 'split-type';


export function randomType(element, characters, duration, sequential = false) {
    let originalText = element.innerText;
    let textArray = originalText.split('');
    let charactersArray = characters.split('');
    let startTime = new Date().getTime();
    let interval;

    if (sequential) {
        let currentIndex = 0;
        interval = setInterval(function() {
            textArray[currentIndex] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
            element.innerText = textArray.join('');
            currentIndex++;
            if (currentIndex === textArray.length) {
                currentIndex = 0;
            }
            if (new Date().getTime() - startTime >= duration) {
                clearInterval(interval);
                element.innerText = originalText;
            }
        }, 20);
    } else {
        interval = setInterval(function() {
            for (let i = 0; i < textArray.length; i++) {
                textArray[i] = charactersArray[Math.floor(Math.random() * charactersArray.length)];
            }
            element.innerText = textArray.join('');
            if (new Date().getTime() - startTime >= duration) {
                clearInterval(interval);
                element.innerText = originalText;
            }
        }, 0);
    }
}

export function animateWords() {

    const words = ["DEVELOPER", "ARTIST", "DESIGNER"]
    let currentIndex = 0
    let split
    const textElement = document.querySelector('.title')
  
    function updateText() {
      textElement.textContent = words[currentIndex]
      split = new SplitType(textElement, {type: 'chars' })
      animateChars(split.chars)
      currentIndex = (currentIndex + 1) % words.length
    }
  
    function animateChars(chars) {
      gsap
      .from(chars, {
        yPercent: 40,
        duration: .75,
        stagger: 0.02,
        ease: 'power4.out',
        onComplete: () => {
          if (split) {
            split.revert()
          }
        }
      })
      gsap.fromTo(chars, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  
    setInterval(updateText, 5000)
  
  }