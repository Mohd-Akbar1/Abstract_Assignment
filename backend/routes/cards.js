const express = require('express');
const router = express.Router();
const Card = require('../model/card');

// Create a new card
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

        const card = new Card({ title:capitalizedTitle, description });
        await card.save();
        
        res.status(201).json(card);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific card by title
router.get('/title', async (req, res) => {
    
    try {
        const title=req.query.q
        const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
       
        const card = await Card.findOne({ title: capitalizedTitle }).limit(1);
       
        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }
        
      
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
