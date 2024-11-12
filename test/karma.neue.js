/*
 * Filter QUnit tests
 *
 * See https://qunitjs.com/api/config/filter/
 *
 * The following tests require a fixed height control bar and are excluded as
 * the Neue theme control bar is responsive.
 *
 * The global QUnit comment below is required to bypass Husky pre-commit tests
 *
 */

/* global QUnit */
QUnit.config.filter =
  '!/audioOnlyMode\\(true\\/false\\) changes player height|player height should match control bar height when audioOnlyMode is enabled/';
