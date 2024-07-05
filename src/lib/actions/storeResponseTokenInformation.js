'use strict';

module.exports = function(settings,event) {
  try{
    let responseToken = event?.propositions[0]?.items[0]?.meta?.["experience.name"];
    sessionStorage.setItem('adobe.target.experienceName',responseToken);
  }
  catch(e){
    TrackingHelper.console('TMS Fehler: '+e);
  }
};
