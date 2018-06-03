AV Neue is a complete theme redesign for the VideoJS Player.

The theme consists of:

01. A complete redesign.

01. SVG icons instead of font icons.

03. Menus open with button presses instead of button hovers, this is the expected YouTube behaviour.

	To enable this last change JavaScript changes were necessary to the following two files:

	src/js/control-bar/live-display.js // Replaced "Live" text with a graphic
	src/js/control-bar/playback-rate-menu-button.js // Commented out button functionality

Ideally I would like to use the core JavaScript so I only have to change the CSS to create the theme but at the moment it's either beyond my ability or not possible. Hopefully in the future the core project will enable menus with presses or add a feature to change between presses and hover.
