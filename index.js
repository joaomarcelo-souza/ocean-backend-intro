/**
 * Express server application
 * Defines basic routes and starts the server
 */
import express from 'express'

const app = express()

app.use(express.json())

/**
 * GET / - Default route
 * Returns a greeting message
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * GET /oi - Portuguese greeting route
 * Returns a Portuguese greeting message
 */
app.get('/oi', (req, res) => {
  res.send('Olá Mundo!')
})

const list = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith"]

app.get('/characters', (req, res) => {
  res.json(list)
})

app.get('/characters/:id', (req, res) => {
  const { id } = req.params
  const character = list[id]

  if (character) {
    res.json({ id, name: character })
  } else {
    res.status(404).json({ error: 'Character not found' })
  }
})

app.post('/characters', (req, res) => {
  const { name } = req.body
  if (name) {
    list.push(name)
    res.status(201).json({ message: 'Character added', name })
  } else {
    res.status(400).json({ error: 'Name is required' })
  }
})

app.put('/characters/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  if (list[id]) {
    list[id] = name
    res.json({ message: 'Character updated', id, name })
  } else {
    res.status(404).json({ error: 'Character not found' })
  }
})

app.delete('/characters/:id', (req, res) => {
  const { id } = req.params

  if (list[id]) {
    const deletedCharacter = list.splice(id, 1)
    res.json({ message: 'Character deleted', id, name: deletedCharacter[0] })
  } else {
    res.status(404).json({ error: 'Character not found' })
  }
})

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})