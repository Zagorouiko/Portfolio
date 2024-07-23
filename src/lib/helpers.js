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
      // Instead of getting the image this way: client (me) -> OpenAI Server (CORs issue, can only be fixed on the OpenAI server which is not possible for me to do)
      // I grab it by creating my server proxy -> OpenAI Server (server to server)
      // Then my client (me) -> My Server (to get the image)
      const imageResponse = await axios.get('http://zagorouiko.com/openAI-image')
      const url = imageResponse.data.image
      const imageUrl = await fetchImage(url)
      const response = await fetch(imageUrl)  
      const uint8Array = await response.arrayBuffer()
      
      // Convert Uint8Array to Buffer
      const buffer = await Buffer.from(uint8Array)
      const imageURI = await ipfsClient.add(buffer)  
 
        const obj = {
        "name": "AI Generated Image",
        "description": "A piece of art",
        "image": "https://gumwall.infura-ipfs.io/ipfs/" + imageURI.path
    }
      const result = await axios.get("http://zagorouiko.com/ipfs", {
        params: { ipfsObj: JSON.stringify(obj) }
      })

      const metadata = "https://gumwall.infura-ipfs.io/ipfs/" + result.data.client.path
      return metadata

    } catch (error) {
      console.log(error)
    }
}

async function fetchImage(url) {
  try {
    const response = await axios.get(`http://zagorouiko.com/get-OpenAI-image?url=${encodeURIComponent(url)}`, {
      responseType: 'arraybuffer',
    })

    const imageBlob = new Blob([response.data], { type: 'image/png' })
    const imageURL = URL.createObjectURL(imageBlob)

    return imageURL
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
}

export async function callSkraprAPI() {
    try {
    const response = await axios.get("https://store-reviews-api-5143033d0625.herokuapp.com/reviews/iOS/6448311069")

    let reviewObject = response.data.message.reduce((acc, item) => {
      if (item.rating <= 3) {
        acc.push(
          item.review
        )
      }
      return acc
    }, [])

    let reducedReviews = reduceByHalf(reviewObject)
    let gptResponse = await lightHouseRun(reducedReviews)
    return gptResponse

    } catch (error) {
      console.log(error)
    }
  }

  async function lightHouseRun(reviews) {
    try {
      const response = await axios.get("http://zagorouiko.com/openAI-scraper", {
        params: { reviews: reviews }
      })
      return response.data.gptResponse
      
    } catch (error) {
      console.log(error)
    }
  }

  function reduceByHalf(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 4) {
      result.push(arr[i]);
    }
    return result;
  }