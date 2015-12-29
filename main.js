if (Meteor.isClient){
  (function($){
    $(function(){

      $('.button-collapse').sideNav();

    }); // end of document ready
  })(jQuery); // end of jQuery name space
Template.home.onCreated(function () {
      // Use the Packery jQuery plugin
      Session.set("ontour", false)
    });

Template.home.onRendered(function () {
    // Use the Packery jQuery plugin
  });

  Template.hidden.helpers({
      showontour:function(){
        if(Session.get('ontour'))
           return true
        else
          return false
         }
      })

  Template.home.events({
    "click #download-button": function () {
      Session.set("ontour", true)
    }})


  }

if (Meteor.isServer){

}
