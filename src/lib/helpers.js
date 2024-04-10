import gsap from "gsap"
import SplitType from 'split-type';
import axios from 'axios'
import IPFSClient from './IPFSClient'

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

export async function generateImage() {
  const ipfsClient = await IPFSClient()
    try {
    const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${"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"}`,
        },
      };
  
    const gptResponse = await axios.post("https://api.openai.com/v1/completions", {
    "model": "gpt-3.5-turbo-instruct",
    "prompt": "Create a generative NFT art prompt in the likes of Bored Ape Yacht Club, send me just the text, no code, and no intro",
    "max_tokens": 100
    }, options)


    const imageResponse = await axios.post( "https://api.openai.com/v1/images/generations", {         
        "prompt": gptResponse.data.choices[0].text,
        "n": 1,
        "size": "256x256"
    }, options)

    // Need to save the raw file here before sending it to the image prop
     const rawImage = await axios.get("https://cors-anywhere.herokuapp.com/" + imageResponse.data.data[0].url, 
      {
        responseType: 'arraybuffer', 
        headers: { 'Content-Type': 'image/png', 'Access-Control-Allow-Origin': '*' }
      }
      )
      const uint8Array = new Uint8Array(rawImage.data);
      
      // Convert Uint8Array to Buffer
      const buffer = await Buffer.from(uint8Array);
      const imageURI = await ipfsClient.add(buffer)  
 
        const obj = {
        "name": "AI Generated Image",
        "description": "A piece of art",
        "image": "https://gumwall.infura-ipfs.io/ipfs/" + imageURI.path
    }
      const result = await ipfsClient.add(JSON.stringify(obj));
      const metadata = "https://gumwall.infura-ipfs.io/ipfs/" + result.path
      return metadata

    } catch (error) {
      console.log(error)
    }
}

export async function callSkraprAPI() {

    // hard coded giphy appID
    try {
    const response = await axios.get("https://app-store-reviews-api-aeb965d6e5af.herokuapp.com/reviews/iOS/974748812")
    console.log(response.data)
    return response.data

    } catch (error) {
      console.log(error)
    }
  }

  export async function lightHouseRun(reviews) {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${"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"}`,
      }
    }

    try {
    const response = await axios.post("https://api.openai.com/v1/completions", {
      "model": "gpt-3.5-turbo-instruct",
      "prompt":
      `
      I'm giving you a list of reviews for an app to look through.
      The apps operating system is: ${app.OS} and the app name is: ${app.name} The reviews are: ${reviews}
      Specifically look for the issue with the "crusher" headset not pairing to devices. Give me a list of each device that is affected by this issue, and if you can the amount of devices affected and the buid number.
      `,
      "max_tokens": 500
      }, options)

      console.log(response.data)
      return response.data.choices[0].text

    } catch (error) {
      console.log(error)
    }
  }