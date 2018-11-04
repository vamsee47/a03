// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (W03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output
/*

QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing our Sum function with four sets of inputs', function (assert) {
    
    assert.Equal(App.sum(3, 1), 4, 'All positive numbers');
    assert.Equal(App.sum(-10, 5), -5, 'Positive and negative numbers');
    assert.Equal(App.sum(-14, -22), -36, 'All Negitive numbers numbers');
});

QUnit.test('Testing our isOdd function four times', function (assert) {
    assert.ok(App.isOdd(5), '5 is odd');
    assert.ok(!App.isOdd(2), '5 is not odd');
    assert.ok(!App.isOdd(0), '0 is not odd');
    //throws( block                            [, expected ] [, message ] ) 
    assert.throws(function () { App.isOdd(null); }, /The given argument is not a number/, 'Passing in null correctly raises an Error');
    assert.throws(function () { App.isOdd([]); }, new Error('The given argument is not a number'), 'Passing in array correctly raises an Error');
});


QUnit.test('Testing our sortObj function three times', function (assert) {
    var timestamp = Date.now();

    var array = [{
        id: 1,
        timestamp: timestamp
    }, {
            id: 3,
            timestamp: timestamp + 1000
        }, {
            id: 11,
            timestamp: timestamp - 1000
        }];

    App.sortObj(array);

    assert.propEqual(array, [{
        id: 11,
        timestamp: timestamp - 1000
    }, {
            id: 1,
            timestamp: timestamp
        }, {
            id: 3,
            timestamp: timestamp + 1000
        }]);
    assert.notPropEqual(App.sortObj(array), array, 'sortObj() does not return an array');
    assert.strictEqual(App.sortObj(array), undefined, 'sortObj() returns undefined');
});

QUnit.test("pow(2, 2) should return 4", function (assert) {
    var result = App.pow(2, 2);
    assert.equal(result, 4, "result was " + result);
});

QUnit.test("pow(2, 3) should return 8", function (assert) {
    var result = App.pow(2, 3);
    assert.equal(result, 8, "result was " + result);
});

QUnit.test("pow(2, -2) won't return 1/4; see the implementation (negatives always return as 1). This could be improved.", function (assert) {
    var result = App.pow(2, -2);
    assert.notEqual(result, 0.25, "result was " + result);
});

// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

// ******************************************************************************
// To complete, (1) uncomment the code below.
// (2) Complete your application code (W03.js) so all these tests pass also.
// ******************************************************************************

*/

QUnit.test("Testing the ADD function with four sets of inputs", function (assert) {
    assert.equal(sum(2,2), 4, "works with two positive integers");
    assert.equal(sum(-3, -3), -6, "works with two negative integers");
    assert.equal(sum(2.5, 2.5), 5, "works with two positive real numbers");
    assert.equal(sum(10, -10), 0, "works with a positive and a negative");
});

QUnit.test("Testing the  DIFFERENCE function with four sets of inputs", function (assert) {
    assert.equal(Diff(2,2), 0, "works with two positive integers");
    assert.equal(Diff(-3, -3), 0, "works with two negative integers");
    assert.equal(Diff(2.5, 2.5), 0, "works with two positive real numbers");
    assert.equal(Diff(10, -10), 20, "works with a positive and a negative");
});

QUnit.test("Testing the  Multiplication function with four sets of inputs", function (assert) {
    assert.equal(mul(2,2), 4, "works with two positive integers");
    assert.equal(mul(-3, -3), 9, "works with two negative integers");
    assert.equal(mul(2.5, 2.5), 6.25, "works with two positive real numbers");
    assert.equal(mul(10, -10), -100, "works with a positive and a negative");
});

QUnit.test("Testing the  Division function with four sets of inputs", function (assert) {
    assert.equal(div(2,2), 1, "works with two positive integers");
    assert.equal(div(-3, -3), 1, "works with two negative integers");
    assert.equal(div(8, 2), 4, "works with zerp and  positive real numbers");
    assert.equal(div(1, 0), Infinity, "works with a 1 and 0");
});


