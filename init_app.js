const fs = require('fs');
const path = require('path');

if (fs.existsSync('customModules/middleware/Middleware.js')) {
    // Add your commands here
    console.log('File exists on', process.platform)
} else {
    fs.copyFileSync('customModules/middleware/Middleware_backup.js', 'customModules/middleware/Middleware.js')
    console.log('File does not exist on', process.platform)
}

if (fs.existsSync('customModules/index.js')) {
    // Add your commands here
    console.log('File exists on', process.platform)
} else {
    fs.copyFileSync('customModules/index_backup.js', 'customModules/index.js')
    console.log('File does not exist on', process.platform)
}

if (fs.existsSync('src/styles/styles.scss.js')) {
    // Add your commands here
    console.log('File exists on', process.platform)
} else {
    fs.writeFile('src/styles/styles.scss', '', err => {
        console.log(err)
    })
    console.log('File does not exist on', process.platform)
}