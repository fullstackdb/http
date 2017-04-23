/**
 * @description A module that works with XMLHttpRequest
 *
 * @exports get @param {string} url
 * @exports post @param {string} url {object} data
 * @exports put @param {string} url {string}{number} id  {object} data 
 * @exports delete @param {string} url {string}{number} id 
 */

class HTTP {
    /**
     * make request.
     * @private
     * @param {string} method - one of GET,POST,PUT,DELETE
     * @param {string} url
     * @param {function} done - async
     * @param {object} [data]
     */
    _request(method, url, done, data) {
        const xhr = new XMLHttpRequest();
        data = data ? JSON.stringify(data) : null;
        xhr.open(method, url);
        xhr.onload = () => {
            done(null, xhr.response);
        };
        xhr.onerror = () =>  {
            done(xhr.response);
        };
        if(data) {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        } 
        xhr.send(data);
    }

    /**
     * parse data.
     * @private
     * @param {json} data - fetched data
     * @returns {object}
     */
    _parseData(data) {
        return JSON.parse(data);
    }

    /**
     * handle error.
     * @param {object} err
     * @returns {any}
     */
    _handleError(err) {
        throw err;
    }

    constructor() {}

    /**
     * fetch data.
     * @public
     * @param {string} url
     * @returns {promise}
     */
    get(url) {
        return new Promise(function(resolve, reject){
            makeRequest('GET', url, function (err, data) {
                if (err) { throw err; }
                resolve(this._parseData(data));
            });
        });
    }

    /**
     * post data.
     * @public
     * @param {string} url
     * @param {object} data
     * @returns {promise}
     */
    post(url, data) {
        return new Promise(function(resolve, reject){
            makeRequest('POST', url, function (err, data) {
                if (err) { throw err; }
                resolve(this._parseData(data));
            }, data);
        });
    }

    /**
     * put data.
     * @public
     * @param {string} url
     * @param {(string|number)} id - identificator of item
     * @param {object} data
     * @returns {promise}
     */
    put(url, id, data) {
        return new Promise(function(resolve, reject){
            makeRequest('PUT', `${url}/${id}`, function (err, data) {
                if (err) { throw err; }
                resolve(this._parseData(data));
            }, data);
        });
    }

    /**
     * delete data.
     * @public
     * @param {string} url
     * @param {(string|number)} id - identificator of item
     * @returns {promise}
     */
    delete(url, id) {
        return new Promise(function(resolve, reject){
            makeRequest('DELETE', `${url}/${id}`, function (err, data) {
                if (err) { throw err; }
                resolve(this._parseData(data));
            });
        });
    }

}

export default function() {
    return new HTTP();
};
