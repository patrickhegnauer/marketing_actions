module.exports = {
  "extensions": {},
  "dataElements": {},
  "rules": [{
    "id": "RL1709209335165",
    "name": "Test",
    "events": [{
      "modulePath": "sandbox/pageTop.js",
      "settings": {}
    }],
    "actions": [{
      "modulePath": "css-marketing-actions-temp/src/lib/actions/facebookConversionEvent.js",
      "settings": {
        "account": "83455566997245",
        "path": "myCSS Benutzerkonto erstellen",
        "content": "ViewContent_myCSS Registration"
      }
    }]
  }],
  "property": {
    "settings": {
      "id": "PR12345",
      "domains": ["example.com"],
      "undefinedVarsReturnEmpty": false
    }
  },
  "company": {
    "orgId": "ABCDEFGHIJKLMNOPQRSTUVWX@AdobeOrg"
  },
  "environment": {
    "id": "EN00000000000000000000000000000000",
    "stage": "development"
  },
  "buildInfo": {
    "turbineVersion": "27.5.0",
    "turbineBuildDate": "2024-02-29T12:23:10.688Z",
    "buildDate": "2024-02-29T12:23:10.688Z",
    "environment": "development"
  }
}