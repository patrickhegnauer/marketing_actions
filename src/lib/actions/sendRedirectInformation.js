'use strict';

module.exports = function(settings,event) {
  try {
        const linkAction = event.element?.dataset?.linkAction;
        
        if (linkAction) {
            event.nativeEvent.preventDefault();
            
            document.body.dispatchEvent(new CustomEvent("event-action-teaser", {
                detail: {
                    action: linkAction
                }
            }))
        }

} catch (e) {
    TrackingHelper.console('TMS Fehler: ' + e);
}
};