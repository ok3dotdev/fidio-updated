const fs = require('fs');
const path = require('path');

let useFile = 'customModules/middleware/Middleware.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('customModules/middleware/defaults/Middleware_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'customModules/middleware/MiddlewareFunctions.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('customModules/middleware/defaults/MiddlewareFunctions_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'customModules/middleware/index.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('customModules/middleware/defaults/index_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'customModules/index.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('customModules/index_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'customModules/admin/index.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('customModules/admin/index_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'styles/styles.scss'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.writeFile(useFile, '', err => {
        console.log(err)
    })
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'public/doc'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.mkdirSync(useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'public/doc/internal'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.mkdirSync(useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'public/doc/internal/privacy'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    const data = 'import React from \'react\'; const MyComponent = () => { return <div>Privacy</div> }; export default MyComponent'
    fs.writeFile(useFile + '.js', data, err => {
        console.log(err)
    })
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'public/doc/internal/terms'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    const data = 'import React from \'react\'; const MyComponent = () => { return <div>Terms</div> }; export default MyComponent'
    fs.writeFile(useFile + '.js', data, err => {
        console.log(err)
    })
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'appServer/serverProps.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('appServer/defaults/serverProps_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/index.js'
fs.copyFileSync('modules/defaults/index_backup.js', useFile)
console.log(useFile, 'Copied file on', process.platform)

useFile = 'layout/Cart.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/Cart_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/Profile.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/Profile_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/Watch.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/Watch_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/Article.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/Article_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/DropMenu.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/DropMenu_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/Menu.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/Menu_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/Help.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/Help_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/Order.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/Order_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/StreamManager.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/StreamManager_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/chat'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.mkdirSync(useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/chat/index.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/chat/index_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/chat/ChatLog.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/chat/ChatLog_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/chat/DonationsLedger.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/chat/DonationsLedger_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/chat/ChatCommandBar.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/chat/ChatCommandBar_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/chat/Chat.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/chat/Chat_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/product'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.mkdirSync(useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/product/index.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/product/index_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/product/Product.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/product/Product_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/mail'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.mkdirSync(useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/mail/footer.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/mail/footer_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/mail/globalEmailStyles.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/mail/globalEmailStyles_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/mail/userRegistration.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('modules/defaults/mail/userRegistration_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

const pages = [ 'upload', 'w', 'p', 'pr', 'e', 'a' ] // Default pages

for (let i = 0; i < pages.length; i++) {
    useFile = `pages/${pages[i]}.js`
    if (fs.existsSync(useFile)) {
        // Add your commands here
        console.log(useFile, 'File exists on', process.platform)
    } else {
        const page = `/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import { AppConfigLayout, PageContainer } from '/modules/internal'
import { pageDefaults } from '/app.config'
import { getServerSidePropsDefault } from '/modules/utility.js'
import { getServerSidePropsFunc } from '/appServer/serverProps'
import { Menu } from '/modules/menu/'

const pageName = '${pages[i]}'

export const page = props => {
    return (
        <React.Fragment>
            <PageContainer { ...props } pageName={pageName}>
                <Menu></Menu>
                <AppConfigLayout></AppConfigLayout>
            </PageContainer>
        </React.Fragment>
    )
}

export const getServerSideProps = async (context) => {
    let currentProps = await getServerSidePropsDefault(context, pageDefaults[pageName])
    return await getServerSidePropsFunc(currentProps, context)
}

export default page`

        fs.writeFileSync(useFile, page, 'utf-8')
        console.log(useFile, 'File does not exist on', process.platform)
    }
}