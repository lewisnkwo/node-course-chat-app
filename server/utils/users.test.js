const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Law',
      room: 'One Piece'
    }, {
      id: 2,
      name: 'Eren',
      room: 'Attack on Titan'
    }, {
      id: 3,
      name: 'Luffy',
      room: 'One Piece'
    }];
  });

  it('should add new User', () => {
    let users = new Users();
    let user = {
      id: 123,
      name: 'Lewis',
      room: 'OP'
    };
    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = 1;
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(1);
  });

  it('should not remove a user', () => {
    var userId = 99;
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let user = users.getUser(users.users[1].id);
    expect(user).toEqual(users.users[1]);
  });

  it('should not find user', () => {
    let invalidUser = {
      id: 123,
      name: 'Lewis',
      room: 'OP'
    };

    let user = users.getUser(invalidUser.id);
    expect(user).toNotExist();
  })

  it('should return names of the same anime', () => {
    let userList = users.getUserList('One Piece');
    expect(userList).toEqual(['Law', 'Luffy']);
  });

  it('should return names of other anime', () => {
    let userList = users.getUserList('Attack on Titan');
    expect(userList).toEqual(['Eren']);
  });

});
