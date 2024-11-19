
const PlayHT = require('playht');
require('dotenv').config();

PlayHT.init({
    apiKey: process.env.PLAYHT_API_KEY,
    userId: process.env.PLAYHT_API_SECRET,
});

const generateVoice = async (text) => {
    try {
        const response = await PlayHT.generate(text, {
            voice: 'en_us-Jenny', 
            format: 'mp3',        
            speed: 1.0,           
        });

        const { audioUrl } = response;
        return audioUrl;
    } catch (error) {
        console.error('Error in Play.ht SDK:', error.message);
        throw new Error('Failed to generate voice file');
    }
};

module.exports = { generateVoice };
