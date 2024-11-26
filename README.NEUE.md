VideoJS Neue Theme.

The Neue theme is maintained in the 'themes/neue' branch not the 'main' branch which is an untouched clone of the upstream 'videojs/video.js/main' branch used only for reference.

The 'themes/neue' branch differs from the 'main' branch in the following directories and files:

* .prettierrc.json
* test/karma.conf.js
* test/karma.neue.js
* src/css/\*.scss
* src/svg/\*.svg
* src/images/icons.svg
* sandbox/\*.example

Files in the 'src/js/\*.js' directory have no modifications. '.prettierrc.json' is a workaround to disable Prettier. The modifications in the test directory disable two QUnit tests that require a fixed height control bar incompatible with the Neue theme which has a responsive control bar.

Refer to the [Contributing](https://github.com/videojs/admin/blob/main/CONTRIBUTING.md#forking-and-cloning-the-repository) guide for instructions on how to pull from upstream in the main branch as follows.

    $ git switch main
    $ git remote update
    $ git pull upstream main

 Pull the above changes into the 'themes/neue' branch from the main branch as follows:

    $ git switch themes/neue
    $ git merge main
