this.JST = {"views/main/main": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="l-main">\n    <div class="l-header"></div>\n    <div class="l-content"></div>\n    <div class="l-footer"></div>\n</div>';

}
return __p
},
"views/components/card/card": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="card__header margin--top">\n\t<img src=\'' +
((__t = ( image )) == null ? '' : __t) +
'\' alt="">\n\t<p class="card__title">\n\t\t' +
((__t = ( title )) == null ? '' : __t) +
'\n\t</p>\n\t<p class="card__time">\n\t\t' +
((__t = ( created_time )) == null ? '' : __t) +
'\n\t</p>\n\t<p class="card__link">\n\t\t' +
((__t = ( link )) == null ? '' : __t) +
'\n\t</p>\n</div>\n\n<div class="card__content">\n\t<p class="card_description">\n\t\t' +
((__t = ( description )) == null ? '' : __t) +
'\n\t</p>\n</div>\n\n<div class="card__footer">\n\t<p class="card__author">\n\t\t' +
((__t = ( from )) == null ? '' : __t) +
'\n\t</p>\n\t<p class="card__likes">\n\t\t' +
((__t = ( likes )) == null ? '' : __t) +
'\n\t</p>\n\t<p class="card__urls">\n\t\t' +
((__t = ( urls )) == null ? '' : __t) +
'\n\t</p>\n\t<p class="card__openGraph">\n\t\t' +
((__t = ( openGraph )) == null ? '' : __t) +
'\n\t</p>\n</div>\n\n\n<!--\n\n\t\tthis.set("message", Post.message);\n\n\t\t\t// Get the title\n\t\t\tthis.set("title", Post.title);\n\n\t\t\t// Get the creation time\n\t\t\tthis.set("created_time", Post.created_time);\n\n\t\t\t// Get who it was from\n\t\t\tthis.set("from", Post.from);\n\n\t\t\t// Get how many likes it had\n\t\t\tthis.set("likes", Post.likes);\n\n\t\t\t// Get the description\n\t\t\tthis.set("description", Post.description);\n\n\t\t\t// Get and save the urls just in case we need this info\n\t\t\tthis.set("urls", Post.urls);\n\n\t\t\t// Get and save the link ( if it has one )\n\t\t\tthis.set("link", Post.link);\n\n\t\t\t// Get the image\n\t\t\tthis.set("image", Post.image);\n\n\t\t\t// Get the open graph data if it has it\n\t\t\tthis.set("openGraph", Post.openGraph);-->\n';

}
return __p
},
"views/components/card/cards": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="card__container">\n    \n</div>';

}
return __p
},
"views/common/compositeView/compositeView": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="cv__container"></div>';

}
return __p
},
"views/common/compositeView/compositeView_item": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="">\n\tItem\n</div>';

}
return __p
},
"views/modules/content/content": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n\tMain View Container\n\t<div class="content"></div>\n</div>';

}
return __p
},
"views/modules/footer/footer": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n    Footer Container\n</div>';

}
return __p
},
"views/modules/header/header": function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="[ header__container ][ container ] pad--v-2">\n    <div class="header__title">\n        <p> Save Mah Inbox </p>\n    </div>\n    <div class="header__search">\n        <input type="text">\n    </div>\n    \n    <div class="header__info">\n        <h1> Music Anthology </h1>\n    </div>\n</div>';

}
return __p
}};