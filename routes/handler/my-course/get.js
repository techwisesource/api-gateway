const apiAdapter = require('../../apiAdapter');
const { param } = require('../../myCourses');

const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const userId = req.user.data.id;

        const myCourses = await api.get('/api/my-courses', {
            param: {user_id: userId}
        });
        return res.json(myCourses.data);
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