const express = require('express');
const router = express.Router();

const mettingsController = require('../Controllers/MeetingsController');

router.get('/', mettingsController.get_all_meetings);

router.get('/bydate', mettingsController.get_all_meetings_btw_date);

router.get('/:id', mettingsController.get_meeting_by_id);

router.post('/create', mettingsController.create_meeting);

router.put('/:id/update', mettingsController.update_meeting);

router.delete('/:id/delete', mettingsController.delete_meeting);

module.exports = router;