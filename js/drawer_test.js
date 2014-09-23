goog.provide('app.DrawerPanel_Test');

goog.require('goog.events');
goog.require('goog.ui.Component.EventType');
goog.require('pstj.material.DrawerPanel');
goog.require('pstj.ui.Button');


(function() {

  var panel = new pstj.material.DrawerPanel();
  // console.log(panel, panel.render);
  panel.render(document.body);

  var button = new pstj.ui.Button();
  panel.addChild(button, true);
  button.setValue('Toggle Drawer');
  goog.events.listen(button, goog.ui.Component.EventType.ACTION, function(e) {
    panel.toggleDrawer();
  });

})();