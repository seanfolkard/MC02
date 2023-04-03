import Venue from "../models/venue.js";

const venuesController = {
    getAll: function(req, res) {
        Venue.find({}).lean().exec().then(results => {
            const venues = results;
            for (let index = 0; index < results.length; index++) {
                const element = results[index];
                element['ratingInt'] = [];
                element['noStar'] = [];
                const ratingInt = Math.floor(element['rating']);
                for (let index = 1; index <= 5; index++) {
                    if (index <= ratingInt) {
                        element['ratingInt'].push({});
                    } else {
                        element['noStar'].push({});
                    }
                }
            }
            venues['layout'] = false;
            console.log(venues);
            res.render('partials/venue', {
                venues: venues
            });
        });
    }
};

export default venuesController