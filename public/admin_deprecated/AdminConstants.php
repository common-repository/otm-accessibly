<?php

namespace AccessiblyApp\Admin;

class AdminConstants
{
    /**
     * @return array
     */
    public static function getGlobalConfig(): array
    {
        return [
            'adminUrl' => admin_url(),
            'restUrl' => get_rest_url(),
            'iframeUrl' => $_ENV['IFRAME_URL'],
            'pluginPath' => constant('OTM_AC_PATH'),
            'domain' => parse_url(get_site_url(), PHP_URL_HOST),
            'siteUrl' => get_bloginfo('url'), // Question - is this the correct way?!
        ];
    }
}
