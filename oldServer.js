import express from 'express'
import bodyParser from 'body-parser'
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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
