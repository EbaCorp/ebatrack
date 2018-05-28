"use strict";

module.exports = function ebaTrack(endpoint, callback) {
    var ENDPOINT_STRING = 'Provide endpoint, please! e.g. "http://localhost:3000"';

    return new Promise((resolve, reject) => {

        if (endpoint.length === 0) {
            reject(ENDPOINT_STRING);

            return callback(ENDPOINT_STRING);
        }
    });
}