<?php

namespace AccessiblyApp;

use AccessiblyApp\Admin\AdminConstants;
use AccessiblyApp\Data\AccessiblyOptions;

class AssetsManager
{
    const ADMIN_JS = 'accessiblyJs';
    const ADMIN_RUNTIME_JS = 'accessiblyRuntimeJs';
    const ADMIN_CSS = 'accessiblyCss';
    const MENU_JS = 'accessiblyMenuJs';
    const APP_ENTRY_CSS = 'accessiblyAppCss';
    const APP_CONFIG = 'accessiblyConfig';

    /**
     * Register all assets.
     *
     * @return void
     */
    public static function registerAssets(): void
    {
        wp_register_script(self::ADMIN_RUNTIME_JS, OTM_AC_BUILD_PATH . '/js/runtime.js', [], OTM_AC_PLUGIN_VERSION, true);
        wp_register_script(self::ADMIN_JS, OTM_AC_BUILD_PATH . '/js/app.js', [], OTM_AC_PLUGIN_VERSION, true);
        wp_register_style(self::ADMIN_CSS, OTM_AC_BUILD_PATH . '/css/app.css', [], OTM_AC_PLUGIN_VERSION);
        wp_localize_script(
            self::ADMIN_JS,
            self::APP_CONFIG,
            AdminConstants::getGlobalConfig()
        );
    }
    /**
     * Enqueue the assets needed in the admin section.
     *
     * @return void
     */
    public static function enqueueAdminAssets(): void
    {
        if (isset($_GET['page']) && $_GET['page'] === 'accessibly-otm') {
            wp_enqueue_script(self::ADMIN_JS);
            wp_enqueue_style(self::ADMIN_CSS);
        }
    }

    /**
     * Enqueue the assets needed to correctly render the plugin's iframe.
     */
    public static function enqueueBridgeAssets()
    {
        wp_enqueue_script(self::ADMIN_JS);
        wp_enqueue_style(self::APP_ENTRY_CSS);
        wp_enqueue_script(self::ADMIN_RUNTIME_JS);
    }

    /**
     * Enqueue the assets needed for the accessibly frontend plugin.
     */
    public static function enqueueFrontendScripts()
    {
        $scriptSrc = AccessiblyOptions::getAppScriptSrc();

        wp_enqueue_script('accessibly-app', $scriptSrc, [], OTM_AC_PLUGIN_VERSION, true);
    }

    /**
     * @param string $icon
     * @return string|false
     */
    public static function getIconMarkup(string $icon)
    {
        return file_get_contents(OTM_AC_ASSETS_PATH . "/images/$icon.svg");
    }
}
