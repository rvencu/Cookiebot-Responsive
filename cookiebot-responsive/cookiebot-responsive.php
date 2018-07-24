<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://vencu.ro
 * @since             1.0.0
 * @package           Cookiebot_Responsive
 *
 * @wordpress-plugin
 * Plugin Name:       Cookiebot Responsive
 * Plugin URI:        https://github.com/rvencu/Cookiebot-Responsive
 * Description:       This plugin will enhance Cookiebot tables responsivness. Just install, no settings required.
 * Version:           1.1.0
 * Author:            Richard Vencu
 * Author URI:        https://vencu.ro
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       cookiebot-responsive
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'PLUGIN_NAME_VERSION', '1.1.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-cookiebot-responsive-activator.php
 */
function activate_cookiebot_responsive() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-cookiebot-responsive-activator.php';
	Cookiebot_Responsive_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-cookiebot-responsive-deactivator.php
 */
function deactivate_cookiebot_responsive() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-cookiebot-responsive-deactivator.php';
	Cookiebot_Responsive_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_cookiebot_responsive' );
register_deactivation_hook( __FILE__, 'deactivate_cookiebot_responsive' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-cookiebot-responsive.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_cookiebot_responsive() {

	$plugin = new Cookiebot_Responsive();
	$plugin->run();

}
run_cookiebot_responsive();
