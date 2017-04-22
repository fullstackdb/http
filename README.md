Tiny Event Emitter
=========

A small library that adds possibility to create custom events.

Event system can make your Javascript Applications more flexible and your data flow more predictable.

[![Build Status](https://travis-ci.org/fullstackdb/eventEmitter.svg?branch=master)](https://travis-ci.org/fullstackdb/eventEmitter)

## Installation

  `npm install tiny-event-emitter`

## Usage

    var event = Event.default();

    // subscribe to event `try` and work with data
    event.when('try', (data) => {
        console.log('try', data);
    })

    // emit event `try` with some data that you want to work with
    event.emit('try', { hasDone: true } )


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.