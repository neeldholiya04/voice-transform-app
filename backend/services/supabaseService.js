const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const uploadFile = async (file, bucketName) => {
    try {
        const { data, error } = await supabase.storage
            .from(bucketName)
            .upload(file.originalname, file.buffer, {
                contentType: file.mimetype, 
                cacheControl: '3600', 
            });

        if (error) {
            console.error('Supabase upload error:', error.message);
            throw new Error('Failed to upload file to Supabase');
        }

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Supabase service failed');
    }
};



const getPublicUrl = (bucketName, filePath) => {
    const { publicURL } = supabase.storage.from(bucketName).getPublicUrl(filePath);
    return publicURL;
};

module.exports = { uploadFile, getPublicUrl };
