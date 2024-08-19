import globalEmailStyles from './globalEmailStyles'
import masterEmailStyles from '/modules/utility/mail/masterEmailStyles'
import footer from './footer'


/**
 * Fires on new user registration
 */
export default props => {
    const payload = {
        subject: `Welcome to ${props?.siteTitle ?? ''}`,
        content: `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                ${masterEmailStyles}
                ${globalEmailStyles}
            </head>
            <body>
                <div class="container" style='height: 100vh; margin: 0 auto; padding: 20px; background-color: #000; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding-bottom: 150px;'>
                    <div class="header" style='text-align: center; color: #fff;'>
                        <a href='${props?.domainUrl ?? ''}'>
                            <img src="${props?.logo ?? ''}" alt="Logo" style='max-width: 100px; margin: 0 auto; max-height: 400px;'>
                        </a>
                        <h1 class="bg-primary">Welcome to ${props?.siteTitle ?? ''}</h1>
                        <p>Checkout more content on the platform</p>
                        <a href="${props?.domainUrl ?? ''}" class="watch-live-button">See More</a>
                    </div>
                    <div class='divider'></div>
                    ${footer(props, true, props?.social)}
                </div>
            </body>
        </html>`
    }
    return payload
}