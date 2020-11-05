const config = require('./config');
const tweets = require('./tweets');
const Twit = require('twit');
const T = new Twit(config)

const randomNumber = Math.floor(Math.random() * tweets.length);

tweet();
setInterval(tweet, 1000*43200);


function tweet() {
    T.post('statuses/update', { status: tweets[randomNumber] }, tweeted);

    tweets.splice(randomNumber, 1);

    function tweeted(err, data, response) {
        err
        ? console.log('Something went wrong!', err)
        : console.log('It worked!');
    }
}
