window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Store: {},

  initialize: function() {

    var data = JSON.parse($("#bootstrap_data").html());
    new NewReader.Routers.Feeds({
      feeds: new NewReader.Collections.Feeds(data, {parse: true})
    });
    Backbone.history.start();

  }

};

$(document).ready(function(){
  NewReader.initialize();
});
