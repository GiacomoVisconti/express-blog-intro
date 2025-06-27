const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

})

app.get('/', (req, res)=>{
    console.log("Server del mio blog");
    res.send('Ciao')
    
})

app.get('/api/posts/', (req, res) => {
    const ricette = [
        {
            titolo: 'Ricetta Ciambellone',
            contenuto: 'Testo ricetta',
            img: 'http://127.0.0.1:3000/img/ciambellone.jpeg',
            tags: ['dolci', 'colazione', 'ciambellone'],

        },
        {
            titolo: 'Ricetta Cracker Barbabietola',
            contenuto: 'Testo ricetta',
            img: 'http://127.0.0.1:3000/img/cracker_barbabietola.jpeg',
            tags: ['snack', 'merenda', 'cracker'],

        },
        {
            titolo: 'Ricetta Pane Fritto Dolce',
            contenuto: 'Testo ricetta',
            img: 'http://127.0.0.1:3000/img/pane_fritto_dolce.jpeg',
            tags: ['dolci', 'colazione', 'pane fritto'],

        },
        {
            titolo: 'Ricetta Pasta Barbabietola',
            contenuto: 'Testo ricetta',
            img: "http://127.0.0.1:3000/img/pasta_barbabietola.jpeg",
            tags: ['primi piatti', 'pranzo', 'pasta'],

        },
        {
            titolo: 'Ricetta Torta Paesana',
            contenuto: 'Testo ricetta',
            img: "http://127.0.0.1:3000/img/torta_paesana.jpeg",
            tags: ['dolci', 'colazione', 'merenda', 'torta'],

        }
    ]

    res.json(ricette);
})