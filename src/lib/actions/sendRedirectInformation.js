'use strict';

module.exports = function(settings,event) {
  try {
    var chash = _satellite.getVar('DataLayer - user.userInfo.chash') != null ? _satellite.getVar('DataLayer - user.userInfo.chash').toUpperCase() : null;
    var redirectURL = event.element.href;
    var target = redirectURL.indexOf('https://') > -1 ? 'external' : 'internal';
    target == 'external' ? (redirectURL.indexOf('?') > -1 ? redirectURL = redirectURL+'&chash='+chash : redirectURL = redirectURL+'?chash='+chash) : redirectURL = redirectURL;
    const teaserEvent = new CustomEvent('event-action-teaser', {
      detail: {
        link: redirectURL,
        type: target
      }
    });
    document.body.dispatchEvent(teaserEvent)
  } catch(e) {
    TrackingHelper.console('TMS Fehler: ' + e)
  }
};