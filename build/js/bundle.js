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

		// creating a temp collection variable to test ui designs before all the posts get pushed
		// TODO 
		// DELETE LATER
		var tempCollection = new window.Collection_Model_Posts();
		for (var i = 0; i < 10; i++) {
			tempCollection.models.push(posts.models[i])
		}
		tempCollection.length = 10; 

		// Init view
		var contentView = new window.View_Content({
			"collection": tempCollection, // ***** don't forget to change this back to posts
			"model": model
		});
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
/*
	# Defines the main router
*/

window.Router = Backbone.Marionette.AppRouter.extend({

	initialize: function (options) {

		var containerView = options.containerView;

	},

	appRoutes: {
		//		"(/)"								: "handleRouteIndex",
		// "section/:id" 					: "handleRouteSection",
	}

});
/*
	# Defines the view for the landing page
*/

window.Model_Post = Backbone.Model.extend({

	defaults: {
		"message": "",
		"title": "",
		"created_time": "", // might have to change the format
		"from": "",
		"likes": "",
		"description": "",
		"urls": "",
		"link": "",
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

	initialize: function (data) {
		// Store a ref to the post object
		this.postObject = data;
		// set the attributes
		this.createAttributes(data);
	},

	/*
		Creates all the attributes from a Facebook JSON Post object
	*/

	createAttributes(Post) {
		if (Post) {
			// Get the message
			this.set("message", Post.message);

			// Get the title
			this.set("title", Post.title);

			// Get the creation time 
			this.set("created_time", Post.created_time);

			// Get who it was from 
			this.set("from", Post.from);

			// Get how many likes it had
			this.set("likes", Post.likes);

			// Get the description 
			this.set("description", Post.description);

			// Get and save the urls just in case we need this info 
			this.set("urls", Post.urls);

			// Get and save the link ( if it has one )
			this.set("link", Post.link);

			// Get the image 
			this.set("image", Post.image);

			// Get the open graph data if it has it
			this.set("openGraph", Post.openGraph);

			// make sure stuff isn't undefined
			if (Post.title === undefined && Post.openGraph !== undefined) {
				this.set("title", Post.openGraph.title)
			}

			if (Post.link === undefined && Post.openGraph !== undefined) {
				this.set("link", Post.openGraph.url)
			}
		}
	},

	/*
		#	Methods
	*/



});
/*
	# Defines the view for the landing page
	apparently these are called in alphabetical order 
*/

window.Collection_Model_Posts = Backbone.Collection.extend({
	model: window.Model_Post,

	initialize: function (array, PostsArray) {
		// Store a ref to the Document object
		this.postsArray = PostsArray;

		// For each Document
		_.each(PostsArray, function (post) {
			// Create a new Document Model
			var a = new window.Model_Post({}, post);

			// Add it to this collection
			array.push(a);

		}.bind(this));
	},

	/*
		#	Methods
	*/

	comparator: function (a, b) {
		if (a.get("created_time") == b.get("created_time")) return 0;
		return (a.get("created_time") > b.get("created_time")) ? -1 : 1;
		return 0;
	},

	/*
		Returns a new collection filtered by a tag
	*/

	// by video filter

	// by song filter

	// by person/from filter 

	byTag: function (tag) {
		filtered = this.filter(function (post) {
			return _.contains(post.get("tags"), tag);
		});
		return new window.ModelArticlesCollection(filtered);
	},
});
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
/*
	# Defines the view that 
*/
window.View_Card = Backbone.Marionette.ItemView.extend({
	className: "card",
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

window.View_Footer = Backbone.Marionette.ItemView.extend({

    template: JST["views/modules/footer/footer"],

    initialize: function (options) {},

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

});
/*
	# Defines the view for 
*/

window.View_Content = Backbone.Marionette.LayoutView.extend({

	template: JST["views/modules/content/content"],
	regions: {
		"content": ".content",
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
		this.content.show(cardsView);
	},

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

window.View_Header = Backbone.Marionette.ItemView.extend( {
	
	template: JST["views/modules/header/header"],

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