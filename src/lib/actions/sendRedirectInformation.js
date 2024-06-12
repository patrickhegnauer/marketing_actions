'use strict';

module.exports = function(settings,event) {
  try {
    var redirectURL = event.element.href;
    var target = redirectURL.indexOf('https://') > -1 ? 'external' : 'internal';
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