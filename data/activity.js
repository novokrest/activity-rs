var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var ActivitySchema = new Schema({
    id: Number,
    name: String,
    tags: [String],
    description: String,
    day: {type: Date, default: Date.now},
    beginTime: Date,
    endTime: Date
});

ActivitySchema.statics.findAll = (cb) => {
    ActivitySchema.find({}, (err, activities) => {
        if (!err) {
            cb(activities);
        }
    });
};

ActivitySchema.statics.findById = (id, cb) => {
    ActivitySchema.find({id: id}, (err, activity) => {
        if (!err) {
            console.log('Found activity: ', JSON.stringify(activity));
            cb(activity);
        }
    });
};

ActivitySchema.statics.save = (activityData, cb) => {
    var activity = new Activity(activity);
    activity.save((err, activity) => {
        if (!err) {
            console.log('Activity was saved: ', JSON.stringify(activity));
            cb();
        }
    });
};

var Activity = mongoose.model('Activity', ActivitySchema);

export default Activity;