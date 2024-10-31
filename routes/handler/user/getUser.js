const apiAdapter = require('../../apiAdapter');

const {
    URL_SERVICE_USER
} = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
    try {
        const id = req.user.data.id;
        const user = await api.get(`/users/${id}`);
        return res.json(user.data);
    } catch (error) {
        console.error(error); // Log detail error di console

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