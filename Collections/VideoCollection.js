const APIKey = 'AIzaSyAQ4pFfyRJjT-zMr1zUS96jJ09awZ8_xbI';

const baseURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key='

const staticSearchValue = '&q=chess'

const VideoCollection = Backbone.Collection.extend({
  url: baseURL + APIKey,

  model: VideoModel
})