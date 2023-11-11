/**
 *ibmauth.js
 */

module.exports = async (req, res, next) => {
  const express = require('express'); 								// https://www.npmjs.com/package/express
  const log4js = require('log4js');                                   // https://www.npmjs.com/package/log4js
  const session = require('express-session');							// https://www.npmjs.com/package/express-session
  const passport = require('passport');								// https://www.npmjs.com/package/passport
  const WebAppStrategy = require('ibmcloud-appid').WebAppStrategy;	// https://www.npmjs.com/package/ibmcloud-appid

};
