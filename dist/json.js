export function generateJSON(ipInfo, geolocationInfo, systemInfo) {
    return {
        ipInfo: {
            ip: ipInfo.ip,
            network: ipInfo.network,
            version: ipInfo.version,
            city: ipInfo.city,
            region: ipInfo.region,
            region_code: ipInfo.region_code,
            country: ipInfo.country,
            country_name: ipInfo.country_name,
            country_code: ipInfo.country_code,
            country_code_iso3: ipInfo.country_code_iso3,
            country_capital: ipInfo.country_capital,
            country_tld: ipInfo.country_tld,
            continent_code: ipInfo.continent_code,
            in_eu: ipInfo.in_eu,
            postal: ipInfo.postal,
            latitude: ipInfo.latitude,
            longitude: ipInfo.longitude,
            timezone: ipInfo.timezone,
            utc_offset: ipInfo.utc_offset,
            country_calling_code: ipInfo.country_calling_code,
            currency: ipInfo.currency,
            currency_name: ipInfo.currency_name,
            languages: ipInfo.languages,
            country_area: ipInfo.country_area,
            country_population: ipInfo.country_population,
            asn: ipInfo.asn,
            org: ipInfo.org
        },
        geolocationInfo: {
            ip: geolocationInfo.ip,
            country_code: geolocationInfo.country_code,
            country_name: geolocationInfo.country_name,
            region_code: geolocationInfo.region_code,
            region_name: geolocationInfo.region_name,
            city: geolocationInfo.city,
            zip_code: geolocationInfo.zip_code,
            time_zone: geolocationInfo.time_zone,
            latitude: geolocationInfo.latitude,
            longitude: geolocationInfo.longitude,
            metro_code: geolocationInfo.metro_code
        },
        systemInfo: {
            userAgent: systemInfo.userAgent,
            platform: systemInfo.platform,
            languages: systemInfo.languages,
            cookieEnabled: systemInfo.cookieEnabled,
            doNotTrack: systemInfo.doNotTrack,
            screenWidth: systemInfo.screenWidth,
            screenHeight: systemInfo.screenHeight,
            colorDepth: systemInfo.colorDepth,
            timeZone: systemInfo.timeZone,
            browserPlugins: systemInfo.browserPlugins,
            javaEnabled: systemInfo.javaEnabled,
            battery: systemInfo.battery,
            hardwareConcurrency: systemInfo.hardwareConcurrency,
            deviceMemory: systemInfo.deviceMemory,
            webGLRenderer: systemInfo.webGLRenderer
        }
    };
}
