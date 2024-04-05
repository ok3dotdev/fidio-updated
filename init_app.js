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
    fs.copyFileSync('customModules/index_backup.js', 'customModules/index.js')
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

useFile = 'src/styles/styles.scss'
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
    fs.copyFileSync('appServer/defaults/serverProps_backup.js', 'appServer/serverProps.js')
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/index.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('layout/defaults/index_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/Cart.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('layout/defaults/Cart_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/Profile.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('layout/defaults/Profile_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/Watch.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('layout/defaults/Watch_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/Article.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('layout/defaults/Article_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}

useFile = 'layout/DropMenu.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('layout/defaults/DropMenu_backup.js', useFile)
    console.log(useFile, 'File does not exist on', process.platform)
}
