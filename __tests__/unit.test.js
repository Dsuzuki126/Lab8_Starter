// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//testing is strongPassword
test('this should be a strong password: Joshy613', () => {
    expect(functions.isStrongPassword('Joshy613')).toBeTruthy();
  });
test('this should be a strong password: Jx5bz08f', () => {
    expect(functions.isStrongPassword('Jx5bz08f')).toBeTruthy();
});
test('this should not be a strong password: ABC', () => {
    expect(functions.isStrongPassword('ABC')).toBeFalsy();
  });
test('this should not be a strong password: 0123', () => {
    expect(functions.isStrongPassword('0123')).toBeFalsy();
});

//testing isDate
test('this should be a date: 2/2/2001', () => {
    expect(functions.isDate('2/2/2001')).toBeTruthy();
  });
test('this should be a date: 05/05/1560', () => {
    expect(functions.isDate('05/05/1560')).toBeTruthy();
});
test('this should not be a date: 123/1/1988', () => {
    expect(functions.isDate('123/1/1988')).toBeFalsy();
  });
test('this should not be a date: 0123', () => {
    expect(functions.isDate('0123')).toBeFalsy();
});

// testing isPhoneNumber
test('this should be a phone number: 949-333-7676', () => {
    expect(functions.isPhoneNumber('949-333-7676')).toBeTruthy();
  });
test('this should be a phone number: 331-994-4480', () => {
    expect(functions.isPhoneNumber('331-994-4480')).toBeTruthy();
});
test('this should not be a phone number: 123/1/1988', () => {
    expect(functions.isPhoneNumber('123/1/1988')).toBeFalsy();
  });
test('this should not be a phone number: 331994480', () => {
    expect(functions.isPhoneNumber('133199448023')).toBeFalsy();
});
//test is email
test('this should be a email: john@google.com', () => {
    expect(functions.isEmail('john@google.com')).toBeTruthy();
  });
test('this should be a email: bobby@yahoo.com', () => {
    expect(functions.isEmail('bobby@yahoo.com')).toBeTruthy();
});
test('this should not be a email: Blahh', () => {
    expect(functions.isEmail('Blahh')).toBeFalsy();
  });
test('this should not be a email: bobby@yahoo.c', () => {
    expect(functions.isEmail('bobby@yahoo.c')).toBeFalsy();
});

//testing isHexColor
test('this should be a hex color: b1000d', () => {
    expect(functions.isHexColor('b1000d')).toBeTruthy();
  });
test('this should be a hex color: ffd500', () => {
    expect(functions.isHexColor('ffd500')).toBeTruthy();
});
test('this should not be a hex color: Blahh', () => {
    expect(functions.isHexColor('Blahh')).toBeFalsy();
  });
test('this should not be a hex color: ffd500', () => {
    expect(functions.isHexColor('ffd5004')).toBeFalsy();
});