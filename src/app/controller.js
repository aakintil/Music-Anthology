/*
	# Defines the controller for the main router
*/

window.Controller = Backbone.Marionette.Object.extend({

	initialize: function (options) {

		this.retrievePostData();
		this.containerView = options.containerView;
		//		this.eventEmitter = _.extend({}, Backbone.Events);
	},

	retrievePostData: function () {
		console.log("retrieving...");

		var posts = new window.Collection_Model_Posts(),
			self = this;

		posts.fetch({
			url: "data/openGraphPosts.json",
			success: function (success) {
				console.log("JSON file load was successful -- ", posts.length, " posts.");
				self.pushPostsToContentView(posts);
			},
			error: function (error) {
				console.log('There was some error in loading and processing the JSON file \n');
				// initialize an error view on the home page
				// self.showErrorPage(); 
			}
		});

	},

	pushPostsToContentView: function (posts) {
		// Clear the region
		this.containerView.content.empty();

		// create posts collection
		var model = new window.Model_Post(); 

		// Init view
		var contentView = new window.View_Content({ "collection": posts, "model" : model } );
		//
		//		// Show view
		this.containerView.content.show(contentView);
	},

	handleRouteIndex: function (routeData) {

		// Clear the region
		this.containerView.main.empty();
		// Init view
		// var view = new window.View();
		// Show  view
		// this.containerView.main.show( view );
	},

	// handleRouteSection : function( section_id ) {

	// 	// Clear the region
	// 	this.containerView.main.empty();
	// 	// Init view
	// 	var view = new window.ViewSection( { "id" : section_id } );
	// 	// Show  view
	// 	this.containerView.main.show( view );
	// },



});