var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
attachTo: ["existing", "top"],
include: ["*.trello.com/", "https://trello.com/*"],
contentStyleFile: data.url("override.css"),

});