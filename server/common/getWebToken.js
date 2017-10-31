'use strict';

import request from 'request'
import qs from 'querystring'
import config from '../config'
// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb470629b03fbf57f&redirect_uri=http%3A%2F%2F5f1f1b48.ngrok.io%2Findex.html&response_type=
// code&scope=snsapi_userinfo&state=STATE#wechat_redirect

function getToken(code) {
  let reqUrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?';
  let params = {
    appid: config.appId,
    secret: config.appSecret,
    code: code,
    grant_type: 'authorization_code'
  };

  let options = {
    method: 'get',
    url: reqUrl+qs.stringify(params)
  };
  console.log(options.url);
  return new Promise((resolve, reject) => {
    request(options, function (err, res, body) {
      if (res) {
        //console.log(res)
        console.log(body)
        resolve(body);
      } else {
        reject(err);
      }
    })
  })
}

module.exports = getToken;