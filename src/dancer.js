// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  // dancer.$node = $('<span class="dancer"></span>');
  this.$node = $('<span class="dancer"></span>');

  // dancer.step = function(){
  this.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    setTimeout(function() {
      that.step();
    }
    , timeBetweenSteps);
  };
  // dancer.step();
  this.step();

  // dancer.setPosition = function(top, left){
  this.setPosition = function(top, left){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  //dancer.setPosition(top, left);

  // return dancer;
};
