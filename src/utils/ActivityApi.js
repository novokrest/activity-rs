import request from 'superagent/lib/client';
import AuthStore from '../stores/AuthStore';

export default {
    getActivity: (id) => {
        return new Promise((resolve, reject) => {
            request.get('http://localhost:8083/api/activity/' + id)
                   .set('Authorization', 'Bearer ' + AuthStore.getJwt())
                   .end((err, response) => {
                       if (err) reject(err);
                       else resolve(JSON.parse(response.text));
                   });
        });
    },

    getActivities: () => {
        return new Promise((resolve, reject) => {
            request.get('http://localhost:8083/api/activities')
                   .end((err, response) => {
                       if (err) reject(err);
                       else resolve(JSON.parse(response.text));
                   });
        });
    }
};