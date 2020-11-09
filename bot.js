const config = require("./config");
const tweets = require("./tweets");
const Twit = require("twit");
const T = new Twit(config);

const randomTweetIndex = Math.floor(Math.random() * tweets.length);
const time = 1000 * 43200;

tweet();
setInterval(tweet, time);

function tweet() {
  const currentTweet = tweets[randomTweetIndex];
  T.post("statuses/update", { status: currentTweet }, tweeted);

  tweets.splice(randomTweetIndex, 1);

  function tweeted(err, data, response) {
    err
      ? console.log("Something went wrong!🥵", err)
      : console.log(`It worked! ✨ ${currentTweet} ✨`);
  }
}
