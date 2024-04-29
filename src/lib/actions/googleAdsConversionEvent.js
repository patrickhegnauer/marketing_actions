'use strict';

module.exports = function(settings) {
  try{
  window.googleTag = window.googleTag || [];
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
  gtag('event', 'conversion', {'send_to': settings.account+'/'+settings.path});
  // ----- This should not be edited -------
var script1 = document.createElement("script");
script1.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=AW-961534274&l=googleTag");
script1.setAttribute("async", "async");
document.getElementsByTagName("head")[0].appendChild(script1);
  }
  catch(e){
    TrackingHelper.console('TMSFehler: ' + e)
  }
};
