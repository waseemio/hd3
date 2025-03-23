export default async function handler(req, res) {
    const { id } = req.query;
    const card = cards.get(id);
    
    if (!card) {
        return res.status(404).send('Card not found');
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                .card {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    cursor: pointer;
                }
                img {
                    max-width: 100%;
                    height: auto;
                }
            </style>
        </head>
        <body>
            <div class="card" onclick="window.location.href='${card.destinationUrl}'">
                <img src="${card.imageData}" alt="${card.title}">
                <h2>${card.title}</h2>
                <p>${card.description}</p>
            </div>
        </body>
        </html>
    `);
}
