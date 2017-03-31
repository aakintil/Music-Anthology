/*
	# Defines the view that 
*/
window.View_Card = Backbone.Marionette.ItemView.extend({
	className: "card pad-h",
	template: JST["views/components/card/card"]
		//	, ui: {
		//		"image": ".block__image"
		//	, }
		,
	initialize: function (options) {

	},
	onDestroy: function () {},
	/*
		# View 
	*/
	onRender: function () {},
	/*
		# Events
	*/
	events: {},
	/*
		# Methods
	*/
	// Trigger by scrollMonitor when the view enters the viewport
	onEnterViewport: function () {}, // Trigger by scrollMonitor when the view enters the viewport minus an offset
	onEnterViewportOffset: function (watcher) {

	},
	loadImage: function () {},
});
/*
	# Defines the view that
*/
window.View_Cards = Backbone.Marionette.CompositeView.extend({
	template: JST["views/components/card/cards"],
	childView: window.View_Card,
	childViewContainer: ".card__container",
	initialize: function (options) {},
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