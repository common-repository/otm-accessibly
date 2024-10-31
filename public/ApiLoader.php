<?php

namespace AccessiblyApp;

use AccessiblyApp\Admin\AdminApi;

add_action(
    'rest_api_init',
    'AccessiblyApp\\register_routes'
);

/**
 * Register api endpoints.
 */
function register_routes()
{
    AdminApi::register();
}
