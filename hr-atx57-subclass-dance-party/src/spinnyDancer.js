var SpinnyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).addClass('spinny');
};

SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;

SpinnyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  $('.spinny').toggleClass('rotate-spinny');
};
