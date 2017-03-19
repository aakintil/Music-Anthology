/*
	# Defines the view for 
*/

window.View_Content = Backbone.Marionette.LayoutView.extend({

	template: JST["views/modules/content/content"],
	regions: {
		"cardContainer": ".card__container",
	},

	initialize: function (options) {
		// Assign posts
		this.postsCollection = options.collection;
	},

	/*
		# View 
	*/

	onRender: function () {
		// Show the card blocks
		var cardsView = new View_Cards({
			"collection": this.postsCollection
		});
		this.cardContainer.show(cardsView);
	},

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});