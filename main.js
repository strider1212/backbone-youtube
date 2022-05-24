const VideoViewerModel = Backbone.Model.extend({
  defaults: {
    video: '',
    title: '',
    description: ''
  }
})


const VideoViewerViewer = Backbone.View.extend({
  template: Handlebars.compile($('#video-view-template').html())

});

const videoModel = new VideoViewerModel;

const videoViewer = new VideoViewerViewer({ model: videoModel });




//-----------------------
//-----------------------vi
//-----------------------
//HANDLEBARS SOURCE CODE
//-----------------------
//-----------------------
//-----------------------
// turn our "template" into html
// var source = $('#video-view-template').html();

// // compile our template html using handlebars
// var template = Handlebars.compile(source);

// // fill our template with information
// var newHTML = template({item: "bread", price: "3"});

// // append our new html to the page
// $('.items').append(newHTML);

// var newHTML2 = template({item: "Cheese", price: "10"});

// $('.items').append(newHTML2);

