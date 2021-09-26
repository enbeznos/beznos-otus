import getPath from './index';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

test('adds elem and return uniq css selector path', () => {
    expect(getPath(dom.window.document.querySelector('p'))).toBe("HTML > BODY:nth-child(2) > P:nth-child(1)");
  });