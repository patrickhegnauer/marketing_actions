'use strict';

module.exports = function(settings,event) {
  try {
        const linkAction = event.element?.dataset?.linkAction;
        const chash = _satellite.getVar('DataLayer - user.selectedUserInfo.chash');
        
        if (linkAction) {
            event.nativeEvent.preventDefault();
            
            document.body.dispatchEvent(new CustomEvent("event-action-teaser", {
                detail: {
                    action: linkAction,
                    chash: chash
                }
            }))
        }

} catch (e) {
    TrackingHelper.console('TMS Fehler: ' + e);
}
};