'use strict';

angular.module('epicoverflowApp')
  .factory('session', function () {
    var code, profile, accessToken, questionId;

    return {
      getProfile: function(){
          return profile;
      },
      setProfile: function(value) {
          profile = value;
      },
      getCode: function(){
          return code;
      },
      setCode: function(value) {
          code = value;
      },
      getAccessToken: function(){
          return accessToken;
      },
      setAccessToken: function(value) {
          accessToken = value;
      },
      getQuestionId: function(){
          return questionId;
      },
      setQuestionId: function(value) {
          questionId = value;
      }
    };
  });
