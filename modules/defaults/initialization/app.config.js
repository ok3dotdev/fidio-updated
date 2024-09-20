const appSchema = require('./app.schema')
const pageDefaults = appSchema.pageDefaults

const resolveVariables = () => {
    return {
        apiUrl: process.env.NEXT_PUBLIC_API_URL ?? '',
        corsdefault: process.env.NEXT_PUBLIC_CORS_DEFAULT ?? '',
        dborigin: process.env.NEXT_PUBLIC_DBORIGIN ?? '',
        devAddress: process.env.NEXT_PUBLIC_DEV_ADDRESS ?? '',
        domainKey: process.env.NEXT_PUBLIC_DOMAIN_KEY ?? '',
        domainUrl: process.env.NEXT_PUBLIC_DOMAIN_URL ?? '',
        googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
        socketpath: process.env.NEXT_PUBLIC_SOCKET_PATH ?? '',
        socketPort: process.env.NEXT_PUBLIC_SOCKET_PORT ?? '',
        socketUrl: process.env.NEXT_PUBLIC_SOCKET_URL ?? '',
        siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE ?? '',
        dev: process.env.NEXT_PUBLIC_DEV === 'true',
        devLocal: process.env.NEXT_PUBLIC_DEV_LOCAL === 'true',
        doShowLogs: process.env.NEXT_PUBLIC_DO_SHOW_LOGS === 'true',
        menuConfig: appSchema.predefined.MenuConfig,
        chatConfig: appSchema.predefined.ChatConfig,
        paymentConfig: appSchema.predefined.PaymentConfig,
        helpIndex: appSchema.predefined.HelpIndex,
        settingsConfig: appSchema.predefined.SettingsConfig,
        feedbackConfig: appSchema.predefined.FeedbackConfig
    }
}

export default appSchema.resolveConfig

export {
    resolveVariables,
    pageDefaults
}