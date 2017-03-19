/*
	# Defines the view that 
*/
window.View_CardItem = Backbone.Marionette.ItemView.extend({
	className: "card__item",
	template: JST["views/components/card/cardItem"]
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
	template: JST["views/components/card/card"],
	childView: window.View_CardItem,
	childViewContainer: ".card__container2",
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