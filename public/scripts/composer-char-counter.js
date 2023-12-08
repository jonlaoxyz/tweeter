$(document).ready(() => {
  const $tweetText = $("#tweet-text");
  const $count = $("#counter");

  // show characters countdown
  $tweetText.on("input", () => {
    const val = $tweetText.val();
    const numOfChar = val.length;
    const charLeft = 140 - numOfChar;
    $count.text(charLeft);

    const tooMuch = charLeft < 0;
    $count.toggleClass("red-text", tooMuch);
  });

});