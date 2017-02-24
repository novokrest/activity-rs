var Activity = require('../data/mock-activity');

var routes = {
    activities: {
        get: (req, res) => {
           Activity.findAll(activities => {
                var data = JSON.stringify();
                res.json(activities);
            });
        },

        post: (req, res) => {
            Activity.save(req.body, () => res.send('Activity saved'));            
        }
    },

    activity: {
        get: (req, res) => {
            Activity.findById(req.params.id, activity => {
                res.json(activity);
            });
        }
    }
};

module.exports = routes;