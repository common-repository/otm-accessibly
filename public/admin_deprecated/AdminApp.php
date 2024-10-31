<?php

namespace AccessiblyApp\Admin;

use AccessiblyApp\AssetsManager;

class AdminApp
{
    const REDIRECT_TRANSIENT = 'ac_redirect_after_activation';

    /**
     * Class constructor. Adds hooks.
     */
    public function __construct()
    {
        add_action('admin_init', [ $this, 'redirectAfterActivation' ]);
        add_action('admin_enqueue_scripts', [ $this, 'enqueueScripts' ]);
        add_action('admin_menu', [ $this, 'buildMenu' ]);

        add_action('otm_ac_redirect', [ $this, 'setRedirectTransient' ]);
        add_action('otm_ac_activate', [ $this, 'doRedirectAction' ], 100);

        register_activation_hook(OTM_AC_BASE_PATH, [ $this, 'doActivateAction' ]);
    }

    /**
     * Handler called on plugin activation.
     */
    public function doActivateAction()
    {
        \do_action('otm_ac_activate');
    }

    /**
     * Handler for the leadin_activate action.
     */
    public function doRedirectAction()
    {
        \do_action('otm_ac_redirect');
    }

    /**
     * Set transient after activating the plugin.
     */
    public function setRedirectTransient()
    {
        set_transient(self::REDIRECT_TRANSIENT, true, 60);
    }

    /**
     * Lead scripts for the admin page.
     *
     * @return void
     */
    public function enqueueScripts(): void
    {
        AssetsManager::registerAssets();
        AssetsManager::enqueueAdminAssets();
    }

    /**
     * Build the admin menu.
     *
     * @return void
     */
    public function buildMenu()
    {
        $icon = AssetsManager::getIconMarkup('menu-icon');

        add_menu_page(
            __('Accessibly App', 'otm-accessibly'),
            __('Accessibly App', 'otm-accessibly'),
            'manage_options',
            'accessibly-otm',
            [ $this, 'buildApp' ],
            'data:image/svg+xml;base64,' . base64_encode($icon),
            100
        );
    }

    /**
     * Redirect to the dashboard after activation.
     */
    public function redirectAfterActivation()
    {
        if (get_transient(self::REDIRECT_TRANSIENT)) {
            delete_transient(self::REDIRECT_TRANSIENT);
            wp_safe_redirect(admin_url('admin.php?page=accessibly-otm'));
            exit;
        }
    }

    /**
     * Renders the leadin admin page.
     */
    public function buildApp()
    {
        AssetsManager::enqueueBridgeAssets();
        self::renderApp();
    }

    /**
     * Renders the app.
     *
     * @return void
     */
    public function renderApp(): void
    {
        ?>
            <div id="accessibly-iframe-fallback-container"></div>
            <div id="accessibly-iframe-container"></div>
        <?php
    }
}
