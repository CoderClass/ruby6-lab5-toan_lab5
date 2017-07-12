App.messages = App.cable.subscriptions.create("MessagesChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
    console.log('connected');
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log('receiving data');
    console.log(data);

  },
  test: function(data) {
    // Notice that this calls the javascript defined by MessagesChannel#test on the server
    this.perform('test', {
      message: data
    });
  }
});
