goog.provide('app.DrawerPanel_Test');

goog.require('goog.events');
goog.require('goog.ui.Component.EventType');
goog.require('pstj.material.DrawerPanel');
goog.require('pstj.material.HeaderPanel');
goog.require('pstj.ui.Button');


var panel = new pstj.material.HeaderPanel();
panel.render(document.body);
//--------------------------------------------------
// (function() {
//   var panel = new pstj.material.DrawerPanel();
//   panel.render(document.body);
//   var button = new pstj.ui.Button();
//   panel.addChild(button, true);
//   button.setValue('Toggle Drawer');
//   goog.events.listen(
//       button,
//       goog.ui.Component.EventType.ACTION, function(e) {
//         panel.toggleDrawer();
//       });
// })();
//--------------------------------------------------
