const axios = require('axios');

const helper = {
    runQuery: function(term, begin, eng) {
        
        const queryUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

        const qs = '?api-key=15817e0b92174e1eb7e5375bfb85ca59' + term;

        if (begin) {
            qs += '&begin_date=' + begin + '0101';
        }

        if (end) {
            qs += '&end_date=' + end + '1231';
        }
        return axios.get(queryUrl + qs).then(function(response) {
            if (response.data.response.docs.length > 0) {
                let responses = [];

                for (let i = 0; i < 5; i++) {
                    let doc = response.data.response.docs[i];
                    let articleID = doc._id;
                    let article = {
                        title: doc.headline.main, 
                        url: doc.web_url,
                        date: doc.pub_date.split('T') [0],
                        articleID: articleID
                    };
                    responses.push(article);
                }
                return responses;
            } else {
                return false;
            }
        });
    },
    getSaved: function() {
        return axios.get("/api/saved");
    },

    postSaved: function(article) {
        return axios.post('/api/saved', article);
    },

    deleteSaved: function(atricleID) {
        return axios.delete('/api/saved/' + articleID);
    }

};

module.exports = helper;