import fs from 'fs';
const readLineBySeparateLines = (fileName: fs.PathOrFileDescriptor) => {
    let data = fs.readFileSync(fileName)
    console.log('File as b<te buffer: ')
    console.log(data)

    console.log('File as strings:')
    console.log(data.toString())
    return data
}
const path = 'src/2024-12-09log.text';
readLineBySeparateLines(path);
process.stdin.on('data', function(data) {
    let path2 = data.toString();
    path2 = path2.replace(/(\r\n|\n|\r)/gm, "");
    readLineBySeparateLines(path2);
})