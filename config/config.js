var config;

config = {
  "SGVerifyDomain": "stg.spm.verify.leekimhr.com",
  "SGVerifyPort": 6044,

  "PartnerDomain": "stg.spm.backend.leekimhr.com",
  "PartnerPort": 6041,
  "PartnerClientPort": 6042,

  "personSampleRequest": {
    "domain": "sandbox.api.myinfo.gov.sg",
    "requestPath": "/com/v3/person-sample-usage/dpp",
    "headers": {
      "content-type": "application/json"
    },
    "method": "GET"
  },
  "mockPassSampleRequest": {
    "domain": "test.api.myinfo.gov.sg",
    "requestPath": "/mockpass-sp/mock-id-token/",
    "headers": {},
    "method": "GET"
  }
};
module.exports = config;
