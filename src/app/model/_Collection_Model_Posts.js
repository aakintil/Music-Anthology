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