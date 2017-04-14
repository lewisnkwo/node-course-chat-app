const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {

  it('should reject non-string values', () => {
    let name = null;
    let roomName = 98;

    expect(isRealString(name)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let name = '   ';
    let roomName = '.   .';

    expect(isRealString(name)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var res = isRealString('D');
    expect(res).toBe(true);
  });

});
