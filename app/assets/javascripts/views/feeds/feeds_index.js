NewReader.Views.FeedsIndex = Backbone.View.extend({


  events:{

    "click button.favorite" : "addFavorite"

  },

  addFavorite: function (event) {
    event.preventDefault();
    var dataID = $(event.currentTarget).attr("data-id");

  }

  ,

  render: function () {
    this.$el.html(this.template({ feeds: this.collection }));
    return this;
  },

  template: JST['feeds/index']

});






