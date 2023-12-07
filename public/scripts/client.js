/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(() => {

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
      

  const renderTweets = function (tweets) {
    const $tweetsContainer = $("#tweets-container");
    for (const tweetData of tweets) {
      const $tweet = createTweetElement(tweetData);
      $tweetsContainer.prepend($tweet);
    }
  };

  const $form = $("#form");
  const $tweetText = $("#tweet-text");
  const $count = $("#counter")

  $form.on("submit", (event) => {
    event.preventDefault();
    const val = $tweetText.val();
    const numOfChar = val.length;

    const blankTweet = numOfChar === 0;
    if (blankTweet) return alert("No blank tweets please.");

    const tooLong = numOfChar > 140;
    if (tooLong) return alert("You went over the 140 character limit.");

    const data = $form.serialize();
    const url = "/tweets";

    jQuery.post(url, data)
    .done(() => {
      loadTweets();
    });

    $tweetText.val("");
    $count.text("140");
    $count.toggleClass("red-text", false);

  });

  const loadTweets = () => {
    $.ajax("/tweets", { method: 'GET' })
    .then((tweets) => {
      renderTweets(tweets);
    });
  };

  loadTweets();
});