'use strict';

module.exports = function(settings) {
try{
var img = document.createElement("img");
img.src = "https://ct.pinterest.com/v3/?tid="+settings.account+"&event=init&noscript=1";
var src = document.getElementById("header");
document.getElementsByTagName("head")[0].appendChild(img);

var img = document.createElement("img");
img.src = "https://ct.pinterest.com/v3/?tid="+settings.account+"&event="+settings.path+"&ed[property]="+settings.property+"&ed[lead_type]="+settings.lead+"&noscript=1";
var src = document.getElementById("header");
document.getElementsByTagName("head")[0].appendChild(img);
}
catch(e){
  TrackingHelper.console('TMS Fehler: '+e)
}

};
