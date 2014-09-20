// This file was automatically generated from pstj.soy.
// Please don't edit this file by hand.

goog.provide('pstj.templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.CustomScrollArea = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('custom-scroll-area') + '"><div class="' + goog.getCssName('custom-scroll-internal') + '"><div class="' + goog.getCssName('custom-scroll-div') + '"></div></div><div class="' + goog.getCssName('custom-scroll-bar') + ' ' + goog.getCssName('goog-slider') + '"><div class="' + goog.getCssName('custom-scroll-bar-line') + '"></div><div class="' + goog.getCssName('goog-slider-thumb') + ' ' + goog.getCssName('custom-scroll-bar-thumb') + '"></div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.page = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-pager-item') + '"><div class="' + goog.getCssName('pstj-pager-item-vertical-adjustment') + '"><div class="' + goog.getCssName('pstj-pager-item-text') + '" data-model="description"></div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.pager = function(opt_data, opt_ignored) {
  var output = '<div class="' + goog.getCssName('pstj-pager-wrapper') + '"><div class="' + goog.getCssName('pstj-pager-items') + '">';
  var itemLimit46 = opt_data.itemsCount;
  for (var item46 = 0; item46 < itemLimit46; item46++) {
    output += pstj.templates.page(null);
  }
  output += '</div><div class="' + goog.getCssName('pstj-pager-page-indicator') + '">Page <span class="' + goog.getCssName('pstj-pager-page') + '"></span> of <span class="' + goog.getCssName('pstj-pager-pages') + '"></span></div></div>';
  return output;
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.listitem = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-list-item') + '"><div class="' + goog.getCssName('pstj-list-item-container') + '"><div class="' + goog.getCssName('pstj-list-item-image-holder') + '"><img src="' + soy.$$escapeHtml(opt_data.thumbnail) + '" class="' + goog.getCssName('pstj-list-item-thumbnail') + '" /></div><div class="' + goog.getCssName('pstj-list-item-name') + '">' + soy.$$escapeHtml(opt_data.name) + '</div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.list = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-list') + '"><div class="' + goog.getCssName('pstj-list-container') + '"><span class="' + goog.getCssName('pstj-list-notice') + '"></span></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.upload = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-upload-form') + '"><form method="post" enctype="multipart/form-data" action="' + soy.$$escapeHtml(opt_data.url) + '" name="uploadform"><input id="attachment" name="' + soy.$$escapeHtml(opt_data.inputname) + '" type="file" style="display:none" class="' + goog.getCssName('pstj-upload-form-input') + '" /></form></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.controlgroup = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-control-group') + ' ' + goog.getCssName('d-table') + '"><div class="' + goog.getCssName('pstj-control-group-button') + ' ' + goog.getCssName('d-table-cell') + '" data-action="namedaction"><div class="' + goog.getCssName('d-table') + ' ' + goog.getCssName('margin-auto') + '"><img src="assets/left-arrow.png" class="' + goog.getCssName('d-table-cell') + ' ' + goog.getCssName('pstj-control-group-button-image') + '" /></div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.progress = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-widget-progress') + '">' + ((opt_data.text != '') ? '<div class="' + goog.getCssName('pstj-widget-progress-text') + '">' + soy.$$escapeHtml(opt_data.text) + '</div>' : '') + '<div class="' + goog.getCssName('pstj-widget-progress-container') + '"><div class="' + goog.getCssName('pstj-widget-progress-bar') + '"></div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.select = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-widget-select') + '"><div class="' + goog.getCssName('pstj-widget-select-view') + '"><div class="' + goog.getCssName('pstj-widget-select-title') + '">Select item</div><div class="' + goog.getCssName('pstj-widget-select-body') + '">' + pstj.templates.list(null) + '</div><div class="' + goog.getCssName('pstj-widget-select-footer') + '"><div class="' + goog.getCssName('form-button') + ' ' + goog.getCssName('text-button') + ' ' + goog.getCssName('pstj-widget-select-text-button') + ' ' + goog.getCssName('pstj-action-select') + '" data-action="select">Select</div><div class="' + goog.getCssName('form-button') + ' ' + goog.getCssName('text-button') + ' ' + goog.getCssName('pstj-widget-select-text-button') + ' ' + goog.getCssName('pstj-action-cancel') + '" data-action="cancel">Cancel</div></div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.popover = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-popover-event-blocker') + '"><div class="' + goog.getCssName('pstj-popover-frame') + '"></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.Control = function(opt_data, opt_ignored) {
  return '<div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.clock = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-widget-clock') + '"><div class="' + goog.getCssName('pstj-widget-clock-time') + '" data-model="time" data-filter="datetime(HH:mm:ss)"></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.templates.TableViewItem = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('tableviewitem') + '"><div data-model="id"></div></div>';
};
