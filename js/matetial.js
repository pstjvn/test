goog.provide('material.app');

goog.require('pstj.material.DrawerPanel');
goog.require('pstj.material.HeaderPanel');
goog.require('pstj.material.Ripple');



var panel = new pstj.material.HeaderPanel();
var panel2 = new pstj.material.DrawerPanel();
var ripple = new pstj.material.Ripple();
ripple.setRecenterRipples(true);
panel2.render();
panel2.addToMain(panel, true);
panel.addToMain(ripple, true);

