### VideoJS Neue theme.

#### Updating from Video.JS

Switch to the stock branch and pull the latest changes from the Video.JS 8 upstream main branch (`--ff-only` catches merges since they shouldn't exist in a mirror repository branch), push them to the remote repository then switch to the main branch and fetch them:

    $ git switch stock
    $ git fetch upstream
    $ git pull --ff-only upstream main
    $ git push origin stock
    $ git switch main
    $ git fetch origin stock

Merging these changes automatically commits them if there are no conflicts, preventing changes from showing, use the --no-commit option to stage changes instead of committing them:

    $ git merge --no-commit origin/stock

Changed files will now appear in source control where you can check any relevant changes before committing.

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
