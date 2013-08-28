NewReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function (options){
    this.feeds = options.feeds;
  },

  routes: {
    "" : "index",
    "feeds/:id": "show"
  },

  index: function() {
    var feedsIndexView = new NewReader.Views.FeedsIndex({
      collection: this.feeds
    });
    $('body').html(feedsIndexView.render().$el);
  },

  show: function(id) {
    var feed = this.feeds.get(id);
    feed.get('entries').fetch({reset: true});
    var feedsShowView = new NewReader.Views.FeedsShow({
      model: feed,
      collection: feed.get('entries')
    });

    $('body').html(feedsShowView.render().$el);
  }

});
