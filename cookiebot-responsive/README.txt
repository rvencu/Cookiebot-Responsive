=== Plugin Name ===
Contributors: rvencu
Donate link: https://vencu.ro
Tags: cookiebot, responsive
Requires at least: 3.0.1
Tested up to: 4.9.7
Stable tag: 1.1.0
License: GPLv2 or later. Contains code released under MIT License - see description
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Applies styling to Cookiebot declaration to make tables nicer responsive

== Description ==

Applies styiling to Cookiebot declaration to make tables in it responsive. It takes the column names, append them as attributes named data-label inside cells then applies responsive CSS rules.

Public javascript component based on:
https://github.com/adampietrasiak/jquery.initialize
Copyright (c) 2015-2016 Adam Pietrasiak
Released under the MIT license
https://github.com/timpler/jquery.initialize/blob/master/LICENSE

Also based on MutationObserver
https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

== Installation ==

This section describes how to install the plugin and get it working.

1. Upload `cookiebot-responsive` subfolder to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

== Changelog ==

= 1.1.0 =
* Use better initializing jQuery plugin based on mutation observer
* Eliminate timeouts and delays, everything works automatically and at the right timing

= 1.0.1 =
* Got rid of jquery onmutate plugin, wrote own native function to eliminate dependency
* the cookies list on privacy policy page are not triggering the observer class. for now there is a temporary fix with 2 seconds timeout after page load

= 1.0.0 =
* Initial commit
