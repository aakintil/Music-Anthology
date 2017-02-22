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