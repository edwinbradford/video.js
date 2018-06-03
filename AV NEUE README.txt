AV Neue is a complete theme redesign for the VideoJS Player.

The theme consists of:

01. A complete redesign.

01. SVG icons instead of font icons.

03. Menus open with presses instead of hovers as in YouTube.

	To enable this last change a small  Javascript change was necessary to the following two files.
	Other than this the JavaScript matches the JavaScript from the core VideoJS repository.

	src/js/control-bar/live-display.js // Replaced "Live" text with a graphic
	src/js/control-bar/playback-rate-menu-button.js // Commented out button functionality
	
Ideally I would like to use the core JavaScript so I only have to change the CSS to create the theme but at the moment it's either beyond my ability or not possible. Hopefully in the future the core project will enable menus with presses or add a feature to change between presses and hover.