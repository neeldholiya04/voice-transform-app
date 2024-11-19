const express = require('express');
const { upload, uploadVoice, createVoiceFile } = require('../controllers/voiceController');
const router = express.Router();

router.post('/upload', upload.single('file'), uploadVoice);
router.post('/generate', createVoiceFile);

module.exports = router;
