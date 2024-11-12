AV Neue Theme.

The 'main' branch is a clone of the upstream 'main' branch in 'videojs/video.js' and is used only for testing. All AV Neue theme development is in the 'themes/avneue' branch.

In the 'src' directory the 'themes/avneue' branch differs from the 'main' branch in the following directories:

* src/css
* src/svg

The 'themes/avneue' branch clones the 'main' branch in the following src directories:

* src/js
* src/images

The 'src/images' directory is used by the upstream VideoJS project for its implementation of svgs which may get merged with that of AV Neue in which case it will differ between 'main' and 'themes/avenue'.

Outside the 'src' directory, with the exception of the 'sandbox' and 'dist' directories all other directories and files are clones of the 'main' branch except for the 'test' directory which contains modifications to:

* test/karma.conf.js

And a new file:

* test/karma.neue.js

These modifications disable QUnit tests that are incompatible with the AV Neue theme because they require a fixed height control bar and the AV Neue control bar is responsive.
