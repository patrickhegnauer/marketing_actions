'use strict';

module.exports = function(settings) {
  try{  !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function()
{n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}
;
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.agent='fmc-10151959968507231';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', settings.account);
fbq('track', settings.content.split('_')[0], {

content_name: settings.path

});
fbq('trackCustom', settings.content.split('_')[1]);
}
catch(e){
  TrackingHelper.console('TMSFehler: ' + e)
}
}
