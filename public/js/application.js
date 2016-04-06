$(document).ready(function(){

var showTweets = function(data){
  var user_tweets = data.tweets
  user_tweets.forEach(function(tweet){
    console.log(tweet.text)
    $('#twitter_feed').append("<tr class='tweet'><td class='link'>" +
      tweet.text + '</a></td><td>@' + 
      tweet.user.screen_name + '</td><td>' + 
      tweet.created_at + '</td></tr>');
  })

}

$('#search_twitter').on('submit', function(event){
  event.preventDefault();
  data = $(this).serializeArray();
  $.ajax({
    method: "POST",
    url: "/", 
    data: data 
  }).done(function(tweets) {
    showTweets(tweets);
  }
      );
});

})

