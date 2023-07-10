const PORT = 8000
import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/completions', async (req, res) => {
	const options = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: req.body.message }],
			max_tokens: 100,
		}),
	}
	try {
		const response = await fetch('https://api.openai.com/v1/chat/completions', options)
		const data = await response.json()
		res.send(data)
	} catch (e) {
		console.log(e)
	}
})

app.listen(PORT, () => console.log('Your server is running on Port ' + PORT))
