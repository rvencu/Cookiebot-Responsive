<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://vencu.ro
 * @since      1.0.0
 *
 * @package    Cookiebot_Responsive
 * @subpackage Cookiebot_Responsive/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Cookiebot_Responsive
 * @subpackage Cookiebot_Responsive/includes
 * @author     Richard Vencu <richard@vencu.ro>
 */
class Cookiebot_Responsive_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'cookiebot-responsive',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
