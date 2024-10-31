<?php

namespace AccessiblyApp\Admin;

use AccessiblyApp\Api\BaseApiController;
use AccessiblyApp\Data\AccessiblyOptions;

class AdminApi extends BaseApiController
{
    /**
     * @return void
     */
    public function __construct()
    {
        $this->registerRoute('/update-app-config', 'POST', [ $this, 'updateAppConfig' ]);
        $this->registerRoute('/update-widget-options', 'POST', [ $this, 'updateWidgetOptions' ]);
    }

    /**
     * @return AdminApi
     */
    public static function register(): self
    {
        return new static();
    }

    /**
     * Update the app config
     *
     * @param mixed $request
     * @return WP_REST_Response
     */
    public function updateAppConfig($request)
    {
        $data = json_decode($request->get_body(), true);

        $appConfig = $data['appConfig']['widgetOptions'] ?? [];
        $user = $data['appConfig']['user'] ?? [];

        if (empty($appConfig) || empty($user)) {
            return new \WP_REST_Response([
                'error' => 'Invalid data',
            ], 400);
        }

        AccessiblyOptions::setAppUser($user);
        AccessiblyOptions::setAppConfig($appConfig);

        return new \WP_REST_Response([
            'data' => [
                'appConfig' => AccessiblyOptions::getAppConfig(),
                'user' => AccessiblyOptions::getAppUser(),
            ],
        ], 200);
    }

    /**
     * Update the status of the widget
     *
     * @param mixed $request
     * @return WP_REST_Response
     */
    public function updateWidgetOptions($request)
    {
        $data = json_decode($request->get_body(), true);

        $updatedConfig = AccessiblyOptions::updateAppConfig($data);

        return new \WP_REST_Response([
            'status' => 'success',
            'message' => 'Widget options updated',
            'payload' => $updatedConfig,
        ], 200);
    }
}
