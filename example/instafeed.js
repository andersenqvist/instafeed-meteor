if(Meteor.isClient){

	Session.setDefault('tagValue','Meteorjs') //Setting the first image to the MeteorJs #

    Template.instafeed.events({

	'keypress .style-5':function(event,template){
		if(event.keyCode === 13){

          Session.set('tagValue',template.$('.style-5').val()); //Setting value to be used on Instafeed constructor.

           $("html, body").animate({ scrollTop: $(document).height() }, "slow"); //Simulate Scroll Down

          template.$('.style-5').val('') // Clean the input

	     }
       }
    });

    //Computation

    Tracker.autorun(function(){

    	feed = new Instafeed({
                 get: 'tagged',
                 tagName: Session.get('tagValue'), //here is where we use the session setted on the event
                 clientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx', //your's clientId
                 template: '<div class="instagramContainer"><img src="{{image}}" class="instagramImage" /></br><span class="glyphicon glyphicon-heart">{{likes}}</span> <span class="glyphicon glyphicon-comment">{{comments}}</span><p class="caption">{{caption}}</p></div>',
                 links:false,
                 limit: 1,
                 resolution: "standard_resolution",
                 sortBy: 'random',
            });

           feed.run(); //run the new Instafeed({})
    })
 }
