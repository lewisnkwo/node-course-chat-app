let expect = require('expect');
let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    let from = 'Lewis';
    let text = 'Testing func';
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });

});

describe('generateLocationMessage', () => {

  it('should generate correct location object', () => {
    let from = 'User';
    let latitude = '51.4707387';
    let longitude = '-0.1359242';
    let message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message.url).toInclude(latitude).toInclude(longitude);
  });

});
