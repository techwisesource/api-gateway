const apiAdapter = require('../../apiAdapter');

const {
    URL_SERVICE_MEDIA
} = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
    try {
        const media = await api.post('/media', req.body);
        return res.json(media.data);
    } catch (error) {
        console.error(error); // Log detail error di console

        console.log('URL_SERVICE_MEDIA:', URL_SERVICE_MEDIA);
        
        //handling error when service media is off
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({status: 'error', message: 'service unavailable'});
        }

        // Check if error.response exists before destructuring
        if (error.response) {
            const { status, data } = error.response;
            return res.status(status).json(data);
        } else {
            // Handle unknown errors
            return res.status(500).json({status: 'error', message: 'internal server error'});
        }
    }
}