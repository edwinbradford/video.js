/**
 * @file playback-rate-menu-item.js
 */
import MenuItem from '../../menu/menu-item.js';
import Component from '../../component.js';

/**
 * The specific menu item type for selecting a playback rate
 *
 * @param {Player|Object} player
 * @param {Object=} options
 * @extends MenuItem
 * @class PlaybackRateMenuItem
 */
class PlaybackRateMenuItem extends MenuItem {

  constructor(player, options){
    let label = options['rate'];
    let rate = parseFloat(label, 10);

    // Modify options for parent MenuItem class's init.
    options['label'] = label;
    options['selected'] = rate === 1;
    super(player, options);

    this.label = label;
    this.rate = rate;

    this.on(player, 'ratechange', this.update);
  }

  /**
   * Handle click on menu item
   *
   * @method handleClick
   */

  handleClick() {
    super.handleClick();
    this.player().playbackRate(this.rate);
    this.el_.parentNode.parentNode.classList.remove('vjs-lock-showing');
    this.el_.parentNode.parentNode.parentNode.setAttribute('aria-expanded', 'false');
    this.el_.parentNode.parentNode.parentNode.focus();
    console.log(findAncestor(this.el_, 'vjs-lock-showing'));
  }

  /**
   * Update playback rate with selected rate
   *
   * @method update
   */
  update() {
    this.selected(this.player().playbackRate() === this.rate);
  }

}

PlaybackRateMenuItem.prototype.contentElType = 'button';

Component.registerComponent('PlaybackRateMenuItem', PlaybackRateMenuItem);
export default PlaybackRateMenuItem;
