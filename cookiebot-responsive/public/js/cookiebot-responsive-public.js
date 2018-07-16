(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

    $(document).ready(function() {
        //because consent dialog tables are not present in DOM until the banner is displayed, we need to detect when the tables appear in DOM
        //uses this jQuery plugin https://github.com/eclecto/jQuery-onMutate with onCreate()
        //these tables has td elements in thead instead of th this is why the selector changes from 'th' to 'tr:first-child td'
        $.onCreate('.CookieDeclarationTable', function(elements) {
            $(".CookieDeclarationTable tr td").each(function() {
                $(this).attr("data-label", $('.CookieDeclarationTable th').eq($(this).index()).text());
            });
        }, true);
        $.onCreate('.CybotCookiebotDialogDetailBodyContentCookieTypeTable', function(elements) {
            $(".CybotCookiebotDialogDetailBodyContentCookieTypeTable td").each(function() {
                $(this).attr("data-label", $('.CybotCookiebotDialogDetailBodyContentCookieTypeTable tr:first-child td').eq($(this).index()).text());
            });
        }, true);
    });

})( jQuery );
