import express from 'express'

const app = express()
app.use(express.json())

app.get('/hello-world/:text', async ( req, res ) => {
    return res.status(200).send("Hello World! " + req.params.text)
});

app.listen(3000, () => console.log('Server is running: http://localhost:3000'))