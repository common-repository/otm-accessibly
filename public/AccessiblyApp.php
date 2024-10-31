<?php

namespace AccessiblyApp;

require_once OTM_AC_PLUGIN_DIR . '/public/ApiLoader.php';

use AccessiblyApp\Admin\AdminApp;
use AccessiblyApp\Data\AccessiblyOptions;

class AccessiblyApp
{
    /**
     * Everything starts here.
     *
     * @return void
     */
    public function __construct()
    {
        add_action('wp_enqueue_scripts', [ $this, 'prepareFrontendScripts' ]);

        if (is_admin()) {
            new AdminApp();
        }
    }

    /**
     * @return void
     */
    public function prepareFrontendScripts(): void
    {
        if (! AccessiblyOptions::isAppEnabled()) {
            return;
        }

        AssetsManager::enqueueFrontendScripts();
    }
}
