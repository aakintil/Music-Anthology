/*
	# Defines the controller for the main router
*/

window.Controller = Backbone.Marionette.Object.extend({

	initialize: function (options) {

		this.retrievePostData();
		this.containerView = options.containerView;

	},

	retrievePostData: function () {
		console.log("retrieving...");

		var posts = new window.PostsModelCollection();
		console.log(posts);

		posts.fetch({
			url: "data/openGraphPosts.json",
			success: function (success) {
				console.log("JSON file load was successful", posts);
			},
			error: function (error) {
				console.log('There was some error in loading and processing the JSON file \n');
			}
		});
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