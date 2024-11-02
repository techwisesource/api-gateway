const apiAdapter = require('../../apiAdapter');

const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const userId = req.user.data.id;
        const courseId = req.body.course_id;

        const myCourse = await api.post('/api/my-courses', {
            user_id: userId,
            course_id: courseId
        });
        return res.json(myCourse.data);
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