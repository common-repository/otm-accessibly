<?php

namespace AccessiblyApp\Api;

class BaseApiController
{
    /**
     * Register a route with given parameters
     *
     * @param string $path The path for the route to register the service on.
     * @param string $methods Comma seperated list of methods allowed for this route.
     * @param array  $callback Method to execute when this endpoint is requested.
     */
    public static function registerRoute($path, $methods, $callback)
    {
        register_rest_route(
            'otm-ac/v1',
            $path,
            [
                'methods' => $methods,
                'callback' => $callback,
                'permission_callback' => '__return_true',
            ]
        );
    }
}
