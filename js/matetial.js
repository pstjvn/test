goog.provide('material.app');

goog.require('pstj.material.DrawerPanel');
goog.require('pstj.material.HeaderPanel');


//--------------------------------------------------
// var panel = new pstj.material.DrawerPanel();
// panel.render();
//--------------------------------------------------

var panel = new pstj.material.HeaderPanel();
var panel2 = new pstj.material.DrawerPanel();
panel2.render();
setTimeout(function() {
  console.log('Adding the child now');
  panel2.addToMain(panel, true);
}, 2000);
