// This file was automatically generated from smjs.soy.
// Please don't edit this file by hand.

goog.provide('smstb.template');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.base = function(opt_data, opt_ignored) {
  return '<div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.playerConfig = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('player-options-container') + '"><div class="' + goog.getCssName('player-options-playback-list') + '" data-model="mode"></div><div class="' + goog.getCssName('player-start') + '"></div><div class="' + goog.getCssName('player-cancel') + '"></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.playerOptions = function(opt_data, opt_ignored) {
  return 'Play|Repeat|Repeat all|Shuffle all|All (No cam)';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.inlinelist = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('tv-inline-list-button') + '"><span class="' + goog.getCssName('tv-inline-list-navigate') + ' ' + goog.getCssName('left-arrow') + '" data-dir="left"></span><span class="' + goog.getCssName('tv-inline-list-value') + '" data-model="text"></span><span class="' + goog.getCssName('tv-inline-list-navigate') + ' ' + goog.getCssName('right-arrow') + '" data-dir="right"></span></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.xxx = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('tvcont') + ' ' + goog.getCssName('fill') + '"><div class="' + goog.getCssName('tvcont') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('top-panel') + '" data-o10n="horizontal"><div class="' + goog.getCssName('tvcont') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('left-panel') + '"><div class="' + goog.getCssName('tvc') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('fill') + ' ' + goog.getCssName('focusme') + '" data-fm="true"></div></div><div class="' + goog.getCssName('tvcont') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('right-panel') + '"><div class="' + goog.getCssName('tvc') + ' ' + goog.getCssName('vertical-two') + ' ' + goog.getCssName('decorate') + '" data-fm="true"></div><div class="' + goog.getCssName('tvc') + ' ' + goog.getCssName('vertical-two') + ' ' + goog.getCssName('decorate') + '" data-fm="true"></div></div></div><div class="' + goog.getCssName('tvcont') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('bottom-panel') + '" data-o10n="horizontal"><div class="' + goog.getCssName('tvc') + ' ' + goog.getCssName('fill') + ' ' + goog.getCssName('decorate') + '"></div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.playeroptions = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('player-dialog') + ' ' + goog.getCssName('dialog-container') + ' ' + goog.getCssName('decorate') + '"><div class="' + goog.getCssName('tvc') + ' ' + goog.getCssName('tvc-disabled') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('dialog-title') + '">Configure playback</div><div class="' + goog.getCssName('tv-inline-list') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('focusme') + '" data-fm="true"></div><div class="' + goog.getCssName('tvcont') + ' ' + goog.getCssName('decorate') + '" data-o10n="h" data-rw="true" style="text-align:right;"><div class="' + goog.getCssName('tv-button') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('focusme') + '" data-action="ok" data-fm="true">OK</div><div class="' + goog.getCssName('tv-button') + ' ' + goog.getCssName('decorate') + '" data-action="cancel" data-fm="true">Cancel</div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.errordialog = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('error-dialog') + ' ' + goog.getCssName('dialog-container') + ' ' + goog.getCssName('decorate') + '"><div class="' + goog.getCssName('tvc') + ' ' + goog.getCssName('tvc-disabled') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('dialog-title') + '">Error occured</div><div class="' + goog.getCssName('tvc') + ' ' + goog.getCssName('tvc-disabled') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('dialog-message') + '"></div><div class="' + goog.getCssName('tv-button') + ' ' + goog.getCssName('decorate') + ' ' + goog.getCssName('focusme') + '" style="float:right">OK</div><div style="clear:both"></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.notification = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('notifications') + '"><div class="' + goog.getCssName('notification-content') + '" data-model="text" data-usehtml="true"></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.errorwhileloading = function(opt_data, opt_ignored) {
  return 'Unable to load the content, please try again later.';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.errorwhenlistempty = function(opt_data, opt_ignored) {
  return 'There seem to be no available items on the thumbdrive. Please make sure the drive is attached properly and try again.';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.mobileItem = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('stream-item') + '"><div class="' + goog.getCssName('inner-playable-list-item') + '"><div class="' + goog.getCssName('playable-list-item-container') + '"><div class="' + goog.getCssName('playable-list-item-image') + '"><div class="' + goog.getCssName('playable-list-item-bookmarked') + '"></div><img src="' + soy.$$escapeHtml(opt_data.thumbnail) + '" alt="channel thumbnail" class="' + goog.getCssName('poster') + '"></div><div class="' + goog.getCssName('playable-list-item-title') + '">' + soy.$$escapeHtml(opt_data.title) + '</div>' + ((opt_data.isiptv == true) ? '<div class="' + goog.getCssName('playable-list-item-description') + '"><div class="' + goog.getCssName('playable-list-item-epg-widget') + '"><div class="' + goog.getCssName('epg-widget-item') + '"><div class="' + goog.getCssName('epg-widget-item-wrapper') + '"><div class="' + goog.getCssName('epg-widget-item-start-time') + '" data-model="startTime" data-filter="datetime(hh:mm)"></div><div class="' + goog.getCssName('epg-widget-item-name') + '" data-model="publishName"></div></div></div><div class="' + goog.getCssName('epg-widget-item') + '"><div class="' + goog.getCssName('epg-widget-item-wrapper') + '"><div class="' + goog.getCssName('epg-widget-item-start-time') + '" data-model="startTime" data-filter="datetime(hh:mm)"></div><div class="' + goog.getCssName('epg-widget-item-name') + '" data-model="publishName"></div></div></div><div class="' + goog.getCssName('epg-widget-item') + '"><div class="' + goog.getCssName('epg-widget-item-wrapper') + '"><div class="' + goog.getCssName('epg-widget-item-start-time') + '" data-model="startTime" data-filter="datetime(hh:mm)"></div><div class="' + goog.getCssName('epg-widget-item-name') + '" data-model="publishName"></div></div></div></div></div>' : '<div class="' + goog.getCssName('playable-list-item-description') + '">' + soy.$$escapeHtml(opt_data.description) + '</div>') + '<div class="' + goog.getCssName('playable-list-item-details') + '">' + ((opt_data.cost != 0) ? '<div class="' + goog.getCssName('playable-list-item-price') + '"><span>Price: </span><span >' + soy.$$escapeHtml(opt_data.cost) + '</span> <span>' + soy.$$escapeHtml(opt_data.currency) + '</span></div>' : '') + ((opt_data.isdir != true) ? (opt_data.isiptv == true) ? '<div class="' + goog.getCssName('epg-guide') + '">Guide</div>' : '' : '') + '</div></div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.PlayableListItem = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('playable-list-item') + '"><div class="' + goog.getCssName('inner-playable-list-item') + '"><div class="' + goog.getCssName('playable-list-item-container') + '"><div class="' + goog.getCssName('playable-list-item-image') + '"><div class="' + goog.getCssName('playable-list-item-bookmarked') + '"></div><img src="" data-urlname="thumbnail" alt="channel thumbnail" class="' + goog.getCssName('poster') + '"></div><div class="' + goog.getCssName('playable-list-item-title') + '" data-model="publishName"></div><div class="' + goog.getCssName('playable-list-item-description') + '"></div><div class="' + goog.getCssName('playable-list-item-details') + '"><div class="' + goog.getCssName('playable-list-item-price') + '" data-model="cost" data-switch data-filter="DisplayIfLargerThanZero"><span>Price: </span><span data-model="cost"></span> <span data-model="currency"></span></div><div class="' + goog.getCssName('epg-guide') + '">Guide</div></div></div></div></div>';
};


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @notypecheck
 */
smstb.template.epgitem = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('epg-list-item') + ((opt_data.delimiter != '') ? ' ' + goog.getCssName('epg-delimiter') : '') + '"><div class="' + goog.getCssName('epg-item-start-time') + '">' + soy.$$escapeHtml(opt_data.start) + '</div><div class="' + goog.getCssName('epg-item-name') + '">' + soy.$$escapeHtml(opt_data.title) + '</div>' + ((opt_data.delimiter != '') ? '<div class="' + goog.getCssName('epg-item-date') + '">' + soy.$$escapeHtml(opt_data.delimiter) + '</div>' : '') + '<div class="' + goog.getCssName('epg-more') + '"><div class="' + goog.getCssName('epg-item-desc') + '"><strong>' + soy.$$escapeHtml(opt_data.title) + '</strong>: ' + soy.$$escapeHtml(opt_data.description) + '<div class="' + goog.getCssName('epg-add-button') + '">Add to queue</div></div></div></div>';
};
