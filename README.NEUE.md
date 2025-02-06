### VideoJS Neue theme.

#### Updating from Video.JS

Pull the latest changes from the Video.JS upstream main branch into the local main branch:

    $ git switch main
    $ git remote update
    $ git pull upstream main
    $ git push origin main

Then pull the changes from the local main branch into the 'themes/neue' branch:

    $ git switch themes/neue
    $ git merge main

c.f. [Contributing](https://github.com/videojs/admin/blob/main/CONTRIBUTING.md#forking-and-cloning-the-repository) for more details.

The Neue theme is maintained in the 'themes/neue' branch not the 'main' branch which is an untouched clone of the upstream 'videojs/video.js/main' branch used only for reference. The 'themes/neue' branch differs from the 'main' branch as follows:

* `.prettierrc.json`
* `test/karma.conf.js`
* `test/karma.neue.js`
* `src/css/*.scss`
* `src/svg/*.svg`
* `src/images/icons.svg`
* `sandbox/*.example`

Note the following:

* The `src/js/\*.js` directory has no modifications.
* `.prettierrc.json` contains a workaround to disable Prettier.
* The modifications in the test directory disable two QUnit tests that require a fixed height control bar incompatible with the Neue theme which has a responsive control bar.

If Karma complains it can't find the QUnit tests excluded in the filter, the process timed out with errors in the terminal, resolve this by terminating the running npm process with `Ctrl + c` then restarting it with `npm run start`, . 
