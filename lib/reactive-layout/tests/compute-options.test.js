import computeOptions from "../api/compute-options";

describe('compute options', () => {
  it('execute without error', () => {
    expect(computeOptions).not.toThrow()
  })

  const test = computeOptions()

  it('Return object with correct properties', () => {
    expect(test).toContainKeys(['device', 'screen-height', 'screen-width'])
  })

  it('Returned object contains correct values', ()=>{
    expect(test.device).toBeString()
    expect(test.device).toBeOneOf(["pc", "tablet", "mobile"])
    expect(test['screen-width']).toBeNumber()
    expect(test['screen-height']).toBeNumber()
  })
})                      