// This file was automatically generated from select.soy.
// Please don't edit this file by hand.

goog.provide('pstj.select');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.select.Select = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-select') + '"><div class="' + goog.getCssName('pstj-select-view') + '"><div class="' + goog.getCssName('pstj-select-title') + '">Select item</div><div class="' + goog.getCssName('pstj-select-body') + '"></div><div class="' + goog.getCssName('pstj-select-footer') + '"><div class="' + goog.getCssName('form-button') + ' ' + goog.getCssName('text-button') + ' ' + goog.getCssName('pstj-select-text-button') + ' ' + goog.getCssName('pstj-action-select') + '">Select</div><div class="' + goog.getCssName('form-button') + ' ' + goog.getCssName('text-button') + ' ' + goog.getCssName('pstj-select-text-button') + ' ' + goog.getCssName('pstj-action-cancel') + '">Cancel</div></div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
pstj.select.SelectionItem = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('pstj-select-item') + '"><div class="' + goog.getCssName('pstj-select-item-image-holder') + '"><img src="' + soy.$$escapeHtml(opt_data.thumbnail) + '" class="' + goog.getCssName('pstj-select-item-thumbnail') + '" /></div><div class="' + goog.getCssName('pstj-select-item-name') + '">' + soy.$$escapeHtml(opt_data.name) + '</div></div>';
};
