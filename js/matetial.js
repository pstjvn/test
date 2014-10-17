goog.provide('material.app');

goog.require('pstj.material.DrawerPanel');
goog.require('pstj.material.HeaderPanel');
goog.require('pstj.material.Input');
goog.require('pstj.material.Ripple');



var panel = new pstj.material.HeaderPanel();
var panel2 = new pstj.material.DrawerPanel();
var ripple = new pstj.material.Ripple();
var input = new pstj.material.Input();


/**
 * Set the label
 */
input.label = 'Input numbers only';


/**
 * Set the input name
 */
input.name = 'numbers';
ripple.setRecenterRipples(true);
panel2.render();
panel2.addToMain(panel, true);
// panel.addToMain(ripple, true);
panel.addToMain(input, true);

