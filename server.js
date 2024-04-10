import express from 'express'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'
import cors from 'cors'
import path from 'path'

const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json())

const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)


app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
    if (path.endsWith('.ttf')) {
    }
  },
}));

// ROUTES
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// CONTACT FORM
app.post('/api/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    // Implement your email sending logic here using a library like Nodemailer
    const transporter = nodemailer.createTransport({
      // Configure your email provider settings here
      service: 'gmail',
      auth: {
        user: 'zagorouiko@gmail.com',
        pass: 'lhoqmbcmpropoyie'
      },
    })

    const mailOptions = {
      from: `${firstName} ${lastName} <${email}>`,
      to: 'Zagorouiko@gmail.com',
      subject: 'Contact from Savage Garden',
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
          .header {
            background-color: #0B3142;
            position: relative;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .main {
            max-width: 600px;
            margin: 0 auto;
          }
          .header h2 {
            color: white;
            position: absolute;
            left: 10%;
            margin: 0;
            padding: 20px;
            font-size: 30px;
            text-align: left;
          }
          .container {           
            padding: 20px;
            background-color: #BFD7EA;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #0F5257;
          }
        </style>
      </head>
      <body>
      <div className="main">
        <header className="header">
          <h2>SG</h2>
        </header>
        <div className="container">
          <h1>Hello!</h1>
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
