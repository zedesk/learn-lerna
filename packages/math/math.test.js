const { add, substract} = require('.')

describe('@test/math', () => {
  it('add operation', () => {
    expect(add(1,2)).toEqual(3)
  })

  it('substract operation', () => {
    expect(substract(5,3)).toEqual(2)
  })
})
