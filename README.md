HTTP 
=========

Small library to work with HTTP on client side easely.

Work on promises and use XMLHttpRequest RESTful (GET, POST, PUT, DELETE)

[![Build Status](https://travis-ci.org/fullstackdb/http.svg?branch=master)](https://travis-ci.org/fullstackdb/http)

## Installation

  `npm install @fullstackdb/http`

## Usage

```javascript

  var http = HTTP.default();

    // get reguest
    http.get('http://yoururl').then(function(response) {
      //work with response data
    })

    // post reguest
    http.post('http://yoururl', {key: 'value'}).then(function(response) {
      // work with response data
    })

    // put reguest
    http.put('http://yoururl', 'identificatorOfItem', {key: 'updatedValue'}).then(function(response) {
      // work with response data
    })

    // delete reguest
    http.delete('http://yoururl', 'identificatorOfItem').then(function(response) {
      // work with response data
    })


```


## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.