NewReader.Collections.Entries = Backbone.Collection.extend({

  initialize: function(feedID){
    this.feedID = feedID;
  },

  model: NewReader.Models.Entry,
  url: function(){
    return '/feeds/' + this.feedID;
  }
});
