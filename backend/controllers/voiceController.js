const multer = require('multer');
const { uploadFile, getPublicUrl } = require('../services/supabaseService');
const { generateVoice } = require('../services/ttsService');

const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, 
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('audio/')) {
            cb(null, true);
        } else {
            cb(new Error('Only audio files are allowed!'));
        }
    },
});


const uploadVoice = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        if (!file.mimetype.startsWith('audio/')) {
            return res.status(400).json({ error: 'Invalid file type. Please upload an audio file.' });
        }

        console.log('File details:', {
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
        });

        const uploadData = await uploadFile(file, 'voice-files');
        const publicUrl = getPublicUrl('voice-files', uploadData.path);

        res.json({ url: publicUrl });
    } catch (error) {
        console.error('Error in uploadVoice:', error.message);
        res.status(500).json({ error: error.message });
    }
};


const createVoiceFile = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ error: 'Text is required' });
        }

        const audioUrl = await generateVoice(text);
        res.json({ audioUrl });
    } catch (error) {
        console.error('Error in createVoiceFile:', error.message);
        res.status(500).json({ error: 'Failed to generate the voice file. Please try again.' });
    }
};




module.exports = { upload, uploadVoice, createVoiceFile };
