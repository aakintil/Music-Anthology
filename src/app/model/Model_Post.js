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
	},

	/*
		#	Methods
	*/



});