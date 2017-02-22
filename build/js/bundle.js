/*
	# Defines the object for the application
*/

window.Application = Backbone.Marionette.Application.extend( {

	initialize: function( options ) {},

	start: function( options ) {

		// Assign data
		// window.DataModel = new window.ModelData( options.data );

		// Render the main view
		this.rootView.render();

		// Start the history keeping
		Backbone.history.start();
	}

});

/*
	# The main entry point of the app
*/

// Init an app instance
var App = new window.Application();

$(document).ready( function() {

	// Load Data
	// $.getJSON( "./js/data.json").done( function( data ) {

		// Init the main view
		App.rootView = new window.MainLayout();

		// Init router
		var Controller = new window.Controller( { containerView: App.rootView } );
		var Router = new window.Router( { controller: Controller, containerView: App.rootView } );

		// Start the app
		// App.start( { "data": data } );
		App.start( {} );

	// });

});

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
/*
	# Defines the main router
*/

window.Router = Backbone.Marionette.AppRouter.extend( {

	initialize: function( options ) {

		var containerView = options.containerView;
		
	},

	appRoutes: {
		"(/)"								: "handleRouteIndex",
		// "section/:id" 					: "handleRouteSection",
	}

});
/*
	# Defines the view for the landing page
*/

window.PostModel = Backbone.Model.extend({

	defaults: {
		"message": "",
		"title": "",
		"created_time": "",
		"from": "",
		"likes": "",
		"description": "",
		"urls": "",
		"openGraph": "",
		"image": "",
	},
	/*
	
	                    message: post['message'] || 'NO MESSAGE',
                    link: (post['link'] === undefined ? 'NO LINK' : post['link']),
                    created_time: moment(post['created_time']).format("MMMM Do, YYYY"),
                    from: post['from']['name'],
                    image: (post['full_picture'] === undefined ? 'NO IMAGE' : post['full_picture']),
                    likes: (post['likes'] ? post['likes']['data'].length : 0),
                    description: (post['description'] === undefined ? 'NO DESCRIPTION' : post['description']),
                    urls: (post['urls'] === undefined ? 'NO URLS' : post['urls']),
                    openGraph: {}
	*/

	initialize: function (data, Post) {
		// Store a ref to the Document object
		this.postObject = Post;

		//
		this.createAttributes(this.postObject);
	},

	/*
		Creates all the attributes from a Facebook JSON Post object
	*/

	createAttributes(Post) {
		// Get the id
		this.set("id", Post.id);

		// Get the title
		//		if (Post.get("article.title"))
		//			this.set("title", Document.get("article.title").asText());

		// Create an array of Prismic ImageView objects
		this.set("images", Post.images);

	},

	/*
		#	Methods
	*/



});
/*
	# Defines the view for the landing page
*/

window.PostsModelCollection = Backbone.Collection.extend({
	model: window.PostModel,

	initialize: function (array, PostsArray) {
		// Store a ref to the Document object
		this.postsArray = PostsArray;

		// For each Document
		_.each(PostsArray, function (doc) {
			// Create a new Document Model
			var a = new window.PostModel({}, doc);

			// Add it to this collection
			array.push(a);

		}.bind(this));
	},

	/*
		#	Methods
	*/

	comparator: function (a, b) {
		if (a.get("date") == b.get("date")) return 0;
		return (a.get("date") > b.get("date")) ? -1 : 1;
		return 0;
	},

	/*
		Returns a new collection filtered by a tag
	*/
	byTag: function (tag) {
		filtered = this.filter(function (article) {
			return _.contains(article.get("tags"), tag);
		});
		return new window.ModelArticlesCollection(filtered);
	},
});
/*
	# Defines the view for the main layout
*/

window.MainLayout = Backbone.Marionette.LayoutView.extend( {

	el: "body",
	
	template: JST["views/main/main"],

	regions: {
		"main" : "#main",
	},

	initialize: function( options ) {},

	/*
		# View 
	*/

	onRender: function() {

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
/*
	# Defines the view that 
*/

window.ViewCompositeViewItem = Backbone.Marionette.ItemView.extend(
{
	className: "cv__item",
	template: JST["views/common/compositeView/compositeView_item"],

	initialize: function( options ) 
	{
		// 
	},

	/*
		# View 
	*/

	onRender: function() {},

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});

/*
	# Defines the view that
*/

window.ViewCompositeView = Backbone.Marionette.CompositeView.extend(
{
	
	template: JST["views/common/compositeView/compositeView"],
	childView: window.ViewCompositeViewItem,
	childViewContainer: ".cv__container",

	initialize: function( options ) {},
	/*
		# View 
	*/

	onRender: function() {},

	

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});
/*
	# Defines the view for 
*/

window.ViewPage = Backbone.Marionette.ItemView.extend( {
	
	template: JST["views/pages/page/page"],

	initialize: function( options ) {},

	/*
		# View 
	*/

	onRender: function() {},

	/*
		# Events
	*/

	events: {},

	/*
		# Methods
	*/

});