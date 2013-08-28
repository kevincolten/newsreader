NewReader.Views.FeedsIndex = Backbone.View.extend({


  render: function () {
    this.$el.html(this.template({ feeds: this.collection }));
    return this;
  },

  template: JST['feeds/index']

});
