const Minio = require('minio');

const minioClient = new Minio.Client({
  endPoint: '192.168.62.111',
  port: 8082,
  useSSL: false,
  accessKey: 'zotero',
  secretKey: 'zoterodocker',
})

let size = 0
const dataStream = minioClient.getObject('zotero', '4b41a3475132bd861b30a878e30aa56a', function(err, dataStream) {
 if (err) {
  return console.log(err)
 }
 dataStream.on('data', function(chunk) {
  size += chunk.length
 })
 dataStream.on('end', function() {
  console.log('End. Total size = ' + size)
  //console.log(dataStream)
 })
 dataStream.on('error', function(err) {
  console.log(err)
 })
})

console.log(dataStream);
