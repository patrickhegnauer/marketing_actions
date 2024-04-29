'use strict';

module.exports = function(settings) {
try{
window.googleTag = window.googleTag || [];
window.dataLayer = window.dataLayer || {};

function gtag(){googleTag.push(arguments);}

//consent mode v2
gtag('consent', 'default', {
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted',
  'analytics_storage': 'granted'
  });

gtag('js', new Date());
gtag('config', settings.account);

// ------- Edit From Here -------
gtag('event', 'conversion', {
  'allow_custom_scripts': true,
  'u1': digitalData.page.pageInfo.language || null,
  'u22': digitalData.page.attributes.websiteId || null,
  'u27': digitalData.page.attributes.trackingId || null,
  'u41': digitalData.page.attributes.campaignId || null,
  'send_to': settings.path
});

// ----- This should not be edited -------
var script = document.createElement("script");
script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id="+settings.account+"&l=googleTag");
script.setAttribute("async", "async");
document.getElementsByTagName("head")[0].appendChild(script);
}
catch(e){
  TrackingHelper.console('TMS Fehler: ' + e)
}
};
