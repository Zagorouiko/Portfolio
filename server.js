import express from 'express'
import axios from 'axios'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'
import nodemailer from 'nodemailer'
import { create } from 'ipfs-http-client'

const app = express()
dotenv.config()
app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

app.get('/get-OpenAI-image', async (req, res) => {
    const { url } = req.query  
    try {
      const rawImage = await axios.get(url, 
        {
          responseType: 'arraybuffer', 
          headers: { 'Content-Type': 'image/png' }
        });
  
        res.set('Content-Type', 'image/png');
        res.send(rawImage.data)
    } catch (error) {
      console.error(error)
      res.status(500).send('Error getting image');
    }
  })

  app.post('/send-email', async (req, res) => {
    try {
      const { firstName, lastName, email, message } = req.body

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'zagorouiko@gmail.com',
          pass: `${process.env.PUBLIC_GOOGLE_EMAILER_KEY}`
        },
      })
  
      const mailOptions = {
        from: `${firstName} ${lastName} <${email}>`,
        to: 'Zagorouiko@gmail.com',
        subject: 'Contact from Portfolio',
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
          <style>
            body {
              color: #333;
            }
            div {           
              padding: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              max-width: 1000px;
              margin: 0 auto;
              color: #EAF6FF;
              background-color: #111213;
            }
            h1 {
              color: #EAF6FF;
            }
          </style>
        </head>
        <body>
        <div className="main">
          <div className="container">
              <p><b>Name:</b> ${firstName} ${lastName}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Message:</b> ${message}</p>
            </div>
        </div>
        </body>
        </html>
        `
      }
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).send('Email sent successfully')
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Internal Server Error')
    }
  })

app.get('/thirdweb', async (req, res) => {
  res.json({clientId: process.env.PUBLIC_THIRDWEB_CLIENTID}) 
})

app.get('/openAI-image', async (req, res) => {
    try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.PUBLIC_OPENAI_API_KEY}`,
      },
    }

    const gptResponse = await axios.post("https://api.openai.com/v1/completions", {
    "model": "gpt-3.5-turbo-instruct",
    "prompt": "Create a prompt for DALL-E that will generate an image of a piece of art.",
    "max_tokens": 1000
    }, options)


    const imageResponse = await axios.post( "https://api.openai.com/v1/images/generations", {         
        "prompt": gptResponse.data.choices[0].text,
        "n": 1,
        "size": "256x256"
    }, options)

    let imageURI = imageResponse.data.data[0].url
    res.json({image: imageURI})

  } catch (error) {
    console.log(error)
  }
  })

app.get('/openAI-scraper', async (req, res) => {
  const { reviews } = req.query

  if (typeof reviews === 'string') {
    reviews = [reviews]
  }

  try {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.PUBLIC_OPENAI_API_KEY}`,
      }
    }
    const response = await axios.post("https://api.openai.com/v1/completions", {
      "model": "gpt-3.5-turbo-instruct",
      "prompt":
      `
      I want to create a categorized list of issues of an app based on user reviews. Please filter out any subjective reviews.
        I've included the app name, operating system, and reviews. 
        Give me specific areas in the app to focus testing on and specific problems based on the reviews provided, also list the specific issue the users found. 
        Also provide specific actionable steps for manually testing those areas.
        The apps operating system is: iOS and the app name is: OpenAI The reviews are: ${reviews}
      `,
      "max_tokens": 1000
      }, options)

      res.json({gptResponse: response.data.choices[0].text})

    } catch (error) {
      console.log(error)
    }
})

app.get('/openAI-chat', async (req, res) => {
  const { formData } = req.query
  const openai = new OpenAI({apiKey: process.env.PUBLIC_OPENAI_API_KEY})

  try {
    const completion = await openai.chat.completions.create({
      messages: [
      { role: "system", content: "Zero is a chatbot to Leons portfolio site that assists employers and clients to his services" },
      { role: "user", content: formData},
      ],
      model: "ft:gpt-3.5-turbo-0125:plusqa::9hnTjdsW",
    })

    res.json({gptResponse: completion.choices[0].message.content})
  } catch (error) {
    console.log(error)
  }

})

app.get('/ipfs', async (req, res) => {
  const { ipfsObj } = req.query
  const auth = `Basic ${process.env.PUBLIC_IPFS_BEARER_TOKEN}`

  try {
  const client = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
          authorization: auth,
      },
  })
  const response = await client.add(ipfsObj)
  res.json({client: response})

  } catch (error) {
    console.log(error)
  }
})

app.post('/ipfs', async (req, res) => {
  const { ipfsObj } = req.body
  const auth = `Basic ${process.env.PUBLIC_IPFS_BEARER_TOKEN}`

  try {
  const Client = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
          authorization: auth,
      },
  })
  const response = await Client.add(ipfsObj)
  res.json({result: response.path})

  } catch (error) {
    console.log(error)
  }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})