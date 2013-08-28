NewReader.Views.FeedsShow = Backbone.View.extend({

  initialize: function() {
    var renderCallback = this.render.bind(this);
    this.collection.on("reset", renderCallback);
  },

  events: {
    "click button.refresh": "refreshCollection"
  },

  render: function () {
    this.$el.html(this.template({ entries: this.collection }));
    return this;
  },

  refreshCollection: function(event){
    event.preventDefault;
    this.collection.fetch({reset: true});
  },

  template: JST['feeds/show']

});
