<?php
/**
 * Plugin Name:       Accessibly App
 * Description:       The Accessibly app makes it easier for you to meet WCAG 2.1 and ADA compliance standards on your WordPress site with a few clicks!
 * Requires at least: 5.5
 * Requires PHP:      7.0
 * Version:           3.0.3
 * Author:            Accessiblyapp.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       accessibly
 * Author URI: https://accessiblyapp.com/
 * Plugin URI: https://wordpress.org/plugins/otm-accessibly/
 */

// If this file is called directly, abort.
if (! defined('WPINC')) {
    die;
}

/**
 * Define Constants
 */
if (! defined('OTM_AC_BASE_PATH')) {
    define('OTM_AC_BASE_PATH', __FILE__);
}

if (! defined('OTM_AC_PATH')) {
    define('OTM_AC_PATH', untrailingslashit(plugins_url('', OTM_AC_BASE_PATH)));
}

if (! defined('OTM_AC_ASSETS_PATH')) {
    define('OTM_AC_ASSETS_PATH', untrailingslashit(plugins_url('', OTM_AC_BASE_PATH) . '/public/assets'));
}

if (! defined('OTM_AC_BUILD_PATH')) {
    define('OTM_AC_BUILD_PATH', untrailingslashit(plugins_url('', OTM_AC_BASE_PATH) . '/frontend/build'));
}

if (! defined('OTM_AC_JS_BASE_PATH')) {
    define('OTM_AC_JS_BASE_PATH', untrailingslashit(plugins_url('', OTM_AC_BUILD_PATH) . '/js'));
}

if (! defined('OTM_AC_PLUGIN_DIR')) {
    define('OTM_AC_PLUGIN_DIR', untrailingslashit(dirname(OTM_AC_BASE_PATH)));
}

if (! defined('OTM_AC_PLUGIN_VERSION')) {
    // define('OTM_AC_PLUGIN_VERSION', '2.0.0');
    define('OTM_AC_PLUGIN_VERSION', time());
}

if (! defined('OTM_AC_PREFIX')) {
    define('OTM_AC_PREFIX', 'otm_ac_');
}

/**
 * Initialize composer autoloader
 */
require_once OTM_AC_PLUGIN_DIR . '/vendor/autoload.php';

/**
 * Use Dotenv to set required environment variables and load .env file in root
 * .env.local will override .env if it exists
 */
$env_files = file_exists(OTM_AC_BASE_PATH . '/.env.local')
    ? ['.env', '.env.local']
    : ['.env'];

$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__, $env_files, false);

if (file_exists(__DIR__ . '/.env')) {
    $dotenv->load();
}

$app = new AccessiblyApp\AccessiblyApp();
