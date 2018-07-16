(function($) {
    //'use strict';

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

    //use MutationObserver (new DOM specs) to check when the dialog window is created on DOM.
	//unfortunately for the privacy policy tables this method does not work. Therefore I set the ugly method of timeout which is a temporary solution until I find a fix
    $(document).ready(function() {
        // The node to be monitored
        var target = $('BODY')[0];

        // Create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                var newNodes = mutation.addedNodes; // DOM NodeList
                if (newNodes !== null) { // If there are new nodes added
                    var $nodes = $(newNodes); // jQuery set
                    $nodes.each(function() {
                        var $node = $(this);
                        if ($node.is("#CybotCookiebotDialog")) {
                            $node.find('td').each(function() {
                                $(this).attr("data-label", $(this).closest('table').find('tr:first-child').find('td').eq($(this).index()).text());
                            });
                            //let not consume anymore resources since another dialog will not appear
                            observer.disconnect();
                        }
                    });
                }
            });
        });

        // Configuration of the observer:
        var config = {
            attributes: true,
            childList: true,
            characterData: true
        };

        // Pass in the target node, as well as the observer options
        observer.observe(target, config);

        // Later, you can stop observing
        //observer.disconnect();

        setTimeout(function() {
            $('.CookieDeclaration').find('td').each(function() {
                $(this).attr("data-label", $(this).closest('table').find('tr:first-child').find('th').eq($(this).index()).text());
            });
        }, 2000);
    });

})(jQuery);