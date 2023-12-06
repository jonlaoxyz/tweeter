/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweet) => {
  const { user, content, created_at } = tweet;
  const { name, avatars, handle } = user;
  const { text } = content;
  const timeAgo = timeago.format(created_at);
  
  const $tweet = $(`
    <article class="tweet">
    <header>
      <div class="first-name">
        <img src=${avatars}>
        ${name}
      </div>
      <div class="user-id">
        ${handle}
      </div>
    </header>
    <div class="tweet-text">
      ${text}
    </div>
    <footer>
      <div class="days">
        ${timeAgo}
      </div>
      <div>
        <i class="fas fa-flag fa-sm"></i>
        <i class="fas fa-retweet fa-sm"></i>
        <i class="fas fa-heart fa-sm"></i>
      </div>
    </footer>
    </article>
    `);
      return $tweet;
    };
      
  //const $tweet = createTweetElement(tweetData);

  const renderTweets = function(tweets) {
    for (const key in tweets) {
      const info = tweets[key];
      const $tweet = createTweetElement(info);
      $('#tweets-container').append($tweet);
    }
  };

//  / Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

$(document).ready(() => {
  renderTweets(data);
});