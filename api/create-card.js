import { v4 as uuidv4 } from 'uuid';

// Simple in-memory store (use database in production)
let cards = new Map();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description, destinationUrl, imageData } = req.body;
        const id = uuidv4();
        
        cards.set(id, {
            title,
            description,
            destinationUrl,
            imageData
        });
        
        res.status(200).json({
            cardUrl: `${process.env.VERCEL_URL}/card/${id}`
        });
    } else {
        res.status(405).send('Method not allowed');
    }
}
