'use strict';

const greetings = require('..');

describe('@test/greetings', () => {
  it('Hello world', () => {
    expect(greetings()).toEqual('Hello World!')
  });

  it('passing name', () => {
    const name = "Fabrice"
    expect(greetings(name)).toEqual("Hello Fabrice!")
  })
});
