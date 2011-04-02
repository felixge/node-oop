var oop = require('oop');
var assert = require('assert');

function A() {}
A.prototype.myMethod = function() {};

function B() {}
B.prototype.myMethod = function() {};

function C() {
  oop.strictMixin(this, A, B);
}

assert.throws(function() {
  var c = new C();
}, /class "B".+prototype property "myMethod"/i);
