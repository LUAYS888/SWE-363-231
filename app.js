const fs = require('fs');
const path = require('path');

// Check command-line arguments
if (process.argv.length !== 4) {
    console.error('Usage: node filesystem.js <directory>');
    process.exit(1);
}

const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];

// Read the directory
fs.readdir(sourceDirectory, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        process.exit(1);
    }

    // Filter for specific file extension (e.g., .txt)
    const fileExtensionToCount = '.pdf';
    const matchingFiles = files.filter((file) =>
        file.endsWith(fileExtensionToCount)
        
    );
    console.log("reach")
    matchingFiles.forEach((file) => {
        fs.copyFile(path.join(sourceDirectory, file), path.join(targetDirectory, file),0,(err) => {
            if(!err){
            console.log(file + " has been copied!");
          }})
    } )
    //console.log(`Number of ${fileExtensionToCount} files: ${matchingFiles.length}`);
});