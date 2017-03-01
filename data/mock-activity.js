'use strict';

var _activities = [
    {
        id: 1,
        name: "Development of activity registration system",
        tags: ['js', 'react', 'express', 'education'],
        description: 'Learning React',
        image: 'react-logo.png',
        day: new Date(),
        beginTime: '13:45:00',
        endTime: '15:45:00'
    },
    {
        id: 2,
        name: "Learning Scala",
        tags: ['scala', 'java', 'education'],
        description: 'Continuing learning scala syntax',
        image: 'scala-logo.png',
        day: new Date(),
        beginTime: '16:00:00',
        endTime: '18:00:00'
    },
    {
        id: 3,
        name: 'Home loto app',
        image: ''
    }
];

var Activity = {
    findAll: (cb) => {
        cb(_activities);
    },

    findById: (id, cb) => {
        var activity = _activities.filter(activity => activity.id == id)[0];
        cb(activity);
    },

    save: (activity, cb) => {
        _activities.push(activity);
        cb(activity);
    }
};

module.exports = Activity;