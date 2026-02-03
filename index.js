/**
 * Express server application
 * Defines basic routes and starts the server
 */
import express from 'express'

const app = express()

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

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})