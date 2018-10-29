
QUnit.test('Testing our max function with four sets of inputs', function (assert) {
    assert.strictEqual(calculate(1,2,3), 0.06, 'done successfully with all positive values');
    assert.strictEqual(calculate(-1,2,-3), 0.06, 'done successfully with negative and positive values');
    assert.strictEqual(calculate(1,0,3), 0.00, 'done successfully if values contains zero');
    assert.strictEqual(calculate(1,-2,3), -0.06, 'done successfully if having some positive and negative values');
});


