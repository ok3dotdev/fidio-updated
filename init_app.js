const fs = require('fs');
const path = require('path');

const f1 = 'customModules/middleware/Middleware.js';
if (fs.existsSync(f1)) {
  // Add your commands here
  console.log(
    `${f1} File exists on`,
    process.platform,
    fs.constants.COPYFILE_EXCL
  );
} else {
  fs.copyFileSync('customModules/middleware/Middleware_backup.js', f1);
  console.log(`${f1} File does not exist on`, process.platform);
}

const f2 = 'customModules/index.js';
if (fs.existsSync(f2)) {
  // Add your commands here
  console.log(`${f2} File exists on`, process.platform);
} else {
  fs.copyFileSync(
    'customModules/index_backup.js',
    f2,
    fs.constants.COPYFILE_EXCL
  );
  console.log(`${f2} File does not exist on`, process.platform);
}

const f3 = 'src/styles/styles.scss';
if (fs.existsSync(f3)) {
  // Add your commands here
  console.log(
    `${f3} File exists on`,
    process.platform,
    fs.constants.COPYFILE_EXCL
  );
} else {
  fs.writeFile(f3, '', (err) => {
    console.log(err);
  });
  console.log(`${f3} File does not exist on`, process.platform);
}
