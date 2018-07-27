const moment = require('moment');
const Meeting = require('../Models/Meeting');

exports.get_all_meetings = (req, res) => {
    Meeting.find({}).sort({ "start_date": 1 }).then(meetings => {
        res.status(200).json(meetings);
    }).catch(err => {
        console.log(err);
        res.status(400).send("there was a problem on get all meetings");
    });
};

exports.get_all_meetings_btw_date = (req, res) => {
    const { start_date, end_date } = req.query;
    Meeting.find({
        start_date: {
            $gte: moment(start_date).toDate(),
        },
        end_date: {
            $lte: moment(end_date).toDate()
        }
    }).sort({ "start_date": 1 }).then(meetings => {
        res.status(200).json(meetings);
    }).catch(err => {
        console.log(err);
        res.status(400).send(`there was a problem on get meetings between ${req.query.start_date} and ${req.query.end_date}`);
    });
}

exports.get_meeting_by_id = (req, res) => {
    Meeting.findById(req.params.id).then(meeting => {
        res.status(200).json(meeting);
    }).catch(err => {
        console.log(err);
        res.status(400).send('there was a problem on get this meeting');
    })
}

exports.create_meeting = (req, res) => {
    let meeting = new Meeting(req.body);
    meeting.save().then(met => {
        res.status(200).json({ message: 'Meeting created successfully' });
    }).catch(err => {
        console.log(err);
        res.status(400).send("there was a problem on create meeting");
    });
};

exports.update_meeting = (req, res) => {
    Meeting.findByIdAndUpdate(req.params.id, { $set: req.body }).then(meeting => {
        res.status(200).json(meeting);
    }).catch(err => {
        console.log(err);
        res.status(400).send(`there was a problem on update meeting ${meeting.tittle}`);
    })
};

exports.delete_meeting = (req, res) => {
    Meeting.findByIdAndRemove(req.params.id).then(meeting => {
        res.status(200).json({ message: 'Deleted successfully' });
    }).catch(err => {
        console.log(err);
        res.status(400).send(`there was a problem on delete meeting ${meeting.tittle}`);
    });
};
