'use strict';

module.exports = function(settings) {
  if(digitalData.user.selectedUserInfo.chash !== ''){
    _satellite.setVar('selectedUser chash', digitalData.user.selectedUserInfo.chash);
  }
   if(digitalData.user.selectedUserInfo.age !== ''){
    _satellite.setVar('selectedUser age', digitalData.user.selectedUserInfo.age);
  }
   if(digitalData.user.selectedUserInfo.okpOnly !== ''){
    _satellite.setVar('selectedUser okpOnly', digitalData.user.selectedUserInfo.okpOnly);
  }
  else{
    
  }
};
