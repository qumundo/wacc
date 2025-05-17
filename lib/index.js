/*
 * wacc
 *
 * Copyright 2025, Qumundo e.K.
 * Author: Qumundo e.K. <https://www.qumundo.com>
 */

"use strict";

let example = require("./../res/example.json");

let url = "https://api.qumundo.com/v1/wacc";
let url_login = "https://api.qumundo.com/v1/login";

let options = {
  method: "POST",
  headers: {
    "Accept": "*/*",
    "Content-Type": "application/json",
  }
};


/**
 * WACC
 * @class
 * @classdesc  Instanciates a wacc object
 */
let WACC = function() {
  this.data = [];
  this.email = '';
  this.password = '';
};


/**
 * WACC.prototype.getExample
 * @public
 * @param  {boolean} [request]
 * @param  {boolean} [response]
 * @return {object} Promise object
 */
WACC.prototype.getExample = async function( request, response ) {

	try {

    request = ( request || false );
    response = ( response || false );

    let obj = {};
    if(request && response){
      obj = example;
    } else if (request || response){
      if(request){
        obj.data = example['POST'].data;
      }
      if(response){
        obj.data = example['200'].data;
      }
    } else {
      obj = example;
    }

    return Promise.resolve(obj);

  } catch(error) {
    console.log(error);
    return false;
  }

};


/**
 * WACC.prototype.getWACC
 * @public
 * @param  {object} [body]
 * @param  {string} [token]
 * @return {object} Promise object
 */
WACC.prototype.getWACC = async function( body, token ) {

	try {

    if(body && body.data && Array.isArray(body.data)){
      options.body = JSON.stringify(body);
    } else {
      options.body = JSON.stringify({ data: [] });
    }

    if(token && typeof token === 'string'){
      options.headers['authorization'] = 'Bearer ' + token;
    }

    let response = await fetch(url, options)
      .then((response) => response.json())
      .then((data) => data)
      .catch(error => console.error(error));

    return response;

  } catch(error) {
    console.log(error);
    return false;
  }

};


/**
 * ValueRatios.prototype.getLogin
 * @public
 * @param  {object} [body]
 * @return {object} Promise object
 */
WACC.prototype.getLogin = async function( body ) {

	try {

    if(body){
      options.body = JSON.stringify(body);
    } else {
      options.body = JSON.stringify({});
    }

    let response = await fetch(url_login, options)
      .then((response) => response.json())
      .then((data) => data)
      .catch(error => console.error(error));

    return response;

  } catch(error) {
    console.log(error);
    return false;
  }

};


module.exports = new WACC();
