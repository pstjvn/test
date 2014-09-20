/**
 * @fileoverview Generic entry point for your application. Require your actual
 * application namespace from here and instancite it accordingly.
 *
 * Note that no assumptions are made about your application. However if you
 * want to go with module system and loading indication - those are not
 * handled automatically and you need to use corresponding utilities.
 *
 * @author regardingscot@gmail.com (Peter StJ)
 */

goog.provide('app');

goog.require('app.DrawerPanel_Test');

(function() {
  // var a = goog.dom.getElementByClass(goog.getCssName('loader'));
  // console.log(a);
  // console.log(a.children);
  // console.log(a.children[0], a.children[1], a.children[2]);
  // console.log(a.children[0].tagName);

  // var c1 = pstj.ds.Cache.create('testcache');

  // c1.set('name', 'Peter');
  // c1.set('age', 34);
  // c1.remove('name');


  // var c = new goog.ui.Component();
  // pstj.ui.Agent.getInstance().attach(c);


  // var mq = new pstj.ui.element.MediaQuery('max-width: 400px');
  // goog.events.listen(mq, pstj.ui.element.MediaQuery.MEDIA_CHANGE,
  // function() {
  //   console.log('Media change', mq.queryMatches);
  // });

  // var e = new pstj.ui.Templated();

  // e.render(document.body);

  // e.getElement().style.width = '200px';
  // e.getElement().style.height = '200px';
  // e.getElement().style.backgroundColor = 'red';
  // e.getHandler().listen(e, [
  //   pstj.ui.element.EventType.PRESS,
  //   pstj.ui.element.EventType.RELEASE,
  //   pstj.ui.element.EventType.MOVE,
  //   pstj.ui.element.EventType.LONGPRESS,
  //   pstj.ui.element.EventType.TAP
  // ], function(e) {
  //   console.log(e.type);
  // });
  // pstj.agent.Pointer.getInstance().attach(e);

})();
