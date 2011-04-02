var oop = require('oop');
var assert = require('assert');

function A() {
  this.a = true;
}
A.methodA = function() {};

function B() {
  A.call(this);

  this.b = true;
}
oop.extend(B, A);

B.methodB = function() {};

var b = new B();
assert.ok(b instanceof B);
assert.ok(b instanceof A);

assert.ok(b.a);
assert.ok(b.b);

B.methodA();
B.methodB();
