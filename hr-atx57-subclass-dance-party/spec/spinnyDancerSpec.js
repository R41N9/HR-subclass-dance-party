describe('spinnyDancer', function() {

  var spinnyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinnyDancer = new SpinnyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinnyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node rotate', function() {
    sinon.spy(spinnyDancer.$node, 'toggleClass');
    spinnyDancer.step();
    expect(spinnyDancer.$node.toggleClass.called).to.be.true;
  });

});
