NewReader.Models.Feed = Backbone.Model.extend({

  parse: function (feed) {
    feed.entries = new NewReader.Collections.Entries(feed.id);
    return feed;
  }

});
