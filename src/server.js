import express from 'express'

const app = express()
app.use(express.json())

const response = {
    "info": {
      "count": 826,
      "pages": 42,
      "next": "https://rickandmortyapi.com/api/character/?page=2",
      "prev": null
    },
    "results": [
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
      },
    ]
  }

app.get('/rick', async ( req, res ) => {
    return res.status(200).json(response)
});

app.listen(4444, () => console.log('Server is running: http://localhost:4444'))