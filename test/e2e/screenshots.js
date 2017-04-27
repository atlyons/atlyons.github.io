var home = 'http://popcrush.com/';
var news = 'http://popcrush.com/category/celebrity-news/';
var music = 'http://popcrush.com/category/music-news/';
var movies = 'http://popcrush.com/category/movie-news/';
var tv = 'http://popcrush.com/category/tv-news/';
var polls = 'http://popcrush.com/category/readers-poll/';
var videos = 'http://popcrush.com/category/videos/';
var photos = 'http://popcrush.com/category/galleries/';
var lists = 'http://popcrush.com/category/lists/';


module.exports = {
    'Verify all pages on Popcrush.com load as expected': function (client) {
        client

            // Navigate to Popcrush.com
            .url(home)
            .waitForElementVisible('body', 100)
            .assert.urlEquals(home)
            .saveScreenshot('screenshots/popcrush/smokeTest/home.png')

            // Navigate to NEWS
            .url(news)
            .waitForElementVisible('body', 100)
            .assert.urlEquals(news)
            .saveScreenshot('screenshots/popcrush/smokeTest/news.png')

            // Navigate to MUSIC
            .url(music)
            .waitForElementVisible('body', 100)
            .assert.urlEquals(music)
            .saveScreenshot('screenshots/popcrush/smokeTest/music.png')

            // Navigate to MOVIES
            .url(movies)
            .waitForElementVisible('body', 500)
            .assert.urlEquals(movies)
            .saveScreenshot('screenshots/popcrush/smokeTest/movies.png')

            // Navigate to TV
            .url(tv)
            .waitForElementVisible('body', 500)
            .assert.urlEquals(tv)
            .saveScreenshot('screenshots/popcrush/smokeTest/tv.png')

            // Navigate to POLLS
            .url(polls)
            .waitForElementVisible('body', 500)
            .assert.urlEquals(polls)
            .saveScreenshot('screenshots/popcrush/smokeTest/polls.png')

            // Navigate to PHOTOS
            .url(photos)
            .waitForElementVisible('body', 500)
            .assert.urlEquals(photos)
            .saveScreenshot('screenshots/popcrush/smokeTest/photos.png')

            // Navigate to VIDEOS
            .url(videos)
            .waitForElementVisible('body', 500)
            .assert.urlEquals(videos)
            .saveScreenshot('screenshots/popcrush/smokeTest/videos.png')
 

            // Navigate to LISTS
            .url(lists)
            .waitForElementVisible('body', 500)
            .assert.urlEquals(lists)
            .saveScreenshot('screenshots/popcrush/smokeTest/lists.png')
 
            .end();
    }
};