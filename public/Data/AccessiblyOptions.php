<?php

namespace AccessiblyApp\Data;

class AccessiblyOptions
{
    const APP_CONFIG = OTM_AC_PREFIX . 'app_config';
    const APP_USER = OTM_AC_PREFIX . 'app_user';

    /**
     * @return bool
     */
    public static function isAppEnabled(): bool
    {
        $appConfig = self::getAppConfig();

        if (empty($appConfig)) {
            return false;
        }

        return $appConfig['appIsEnabled'] ?? false;
    }

    /**
     * @return null|string
     */
    public static function getAppScriptSrc(): ?string
    {
        $appConfig = self::getAppConfig();

        if (empty($appConfig)) {
            return null;
        }

        return $appConfig['widgetSrc'] ?? null;
    }

    /**
     * @return array
     */
    public static function getAppConfig(): array
    {
        return (array) get_option(self::APP_CONFIG, []);
    }

    /**
     * @param array $config
     * @return bool
     */
    public static function setAppConfig(array $config): array
    {
        update_option(self::APP_CONFIG, $config);

        return $config;
    }

    /**
     * Merges with the current config and updates the app config
     *
     * @param array $config
     * @return bool
     */
    public static function updateAppConfig(array $config): array
    {
        $currentConfig = self::getAppConfig();

        $config = array_merge($currentConfig, $config);

        update_option(self::APP_CONFIG, $config);

        return $config;
    }

    /**
     * @return bool
     */
    public static function deleteAppConfig(): bool
    {
        return delete_option(self::APP_CONFIG);
    }

    /**
     * @return array
     */
    public static function getAppUser(): array
    {
        return (array) get_option(self::APP_USER, []);
    }

    /**
     * @param array $user
     * @return bool
     */
    public static function setAppUser(array $user): bool
    {
        return update_option(self::APP_USER, $user);
    }

    /**
     * @return bool
     */
    public static function deleteAppUser(): bool
    {
        return delete_option(self::APP_USER);
    }
}
