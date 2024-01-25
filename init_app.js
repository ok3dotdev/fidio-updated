const fs = require('fs');
const path = require('path');

let useFile = 'customModules/middleware/Middleware.js'
if (fs.existsSync(useFile)) {
    // Add your commands here
    console.log(useFile, 'File exists on', process.platform)
} else {
    fs.copyFileSync('customModules/middleware/Middleware_backup.js', 'customModules/middleware/Middleware.js')
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

useFile = 'src/styles/styles.module.scss'
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