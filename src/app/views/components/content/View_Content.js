/*
	# Defines the view for 
*/

window.View_Content = Backbone.Marionette.LayoutView.extend({

	template: JST["views/components/content/content"],

	initialize: function (options) {
		// Assign posts
		//		this.postsCollection = options.models;
	},

	/*
		# View 
	*/

	onRender: function () {
	},

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});