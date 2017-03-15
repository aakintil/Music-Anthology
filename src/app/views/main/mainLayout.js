/*
	# Defines the view for the main layout
*/

window.MainLayout = Backbone.Marionette.LayoutView.extend({

	el: "body",

	template: JST["views/main/main"],

	regions: {
		"header": ".l-header",
		"content": ".l-content",
		"footer": ".l-footer"
	},

	initialize: function (options) {},

	/*
		# View 
	*/

	onRender: function () {
		// Show the header view
		var headerView = new window.View_Header();
		var contentView = new window.View_Content();
		var footerView = new window.View_Footer();
		
		this.header.show(headerView); 
		this.content.show(contentView); 
		this.footer.show(footerView); 
	},

	/*
		# Events
	*/

	events: {
		// "click .sideNav__item.-nav-tree" : "toggleNavTree",
	},

	/*
		# Methods
	*/

});