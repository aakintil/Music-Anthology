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