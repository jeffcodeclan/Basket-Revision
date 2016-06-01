var basket = require ( '../shopping_basket' );
var assert = require ('chai').assert;


describe('basket', function(){

  it('should have an initial total of 0', function() {
    assert.equal(0, basket.total);
  });

  it('should add an item', function() {
    basket.cart = [];
    basket.add('pizza');
    assert.equal(1, basket.cart.length);
  });

  it('should remove an item', function() {
    basket.cart = [];
    basket.remove('pizza');
    assert.equal(0, basket.cart.length);
  });

  // it('should add an item', function() {
  //   basket.cart = [];
  //   basket.add('milk');
  //   assert.equal(1, basket.cart.length);
  // });

  // it('should remove an item', function() {
  //   basket.cart = [];
  //   basket.remove('milk');
  //   assert.equal(0, basket.cart.length);
  // });

  // it('should add an item', function() {
  //   basket.cart = [];
  //   basket.add('pie');
  //   assert.equal(1, basket.cart.length);
  // });

  // it('should remove an item', function() {
  //   basket.cart = [];
  //   basket.remove('pie');
  //   assert.equal(0, basket.cart.length);
  // });

  it('should display total after adding items', function() {
    basket.cart = [];
    basket.add('pizza', 'milk', 'pie');
    assert.equal(21, basket.total);
  });


});
