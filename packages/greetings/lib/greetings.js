'use strict';

module.exports = greetings;

function greetings(name) {
  return `Hello ${name ?? 'World'}!`
}
