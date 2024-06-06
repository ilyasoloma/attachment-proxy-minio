/**
 * A special config for stress test
 */
module.exports = {
	logLevel: 'none',
	logFile: '',
	port: 8084,
	s3:  {
		params: {
			Bucket: 'test'
		},
		endpoint: 'http://localhost:4000',
		s3ForcePathStyle: true
	},
	secret: '123456',
	zipCacheTime: 10,
	zipMaxFiles: 1000,
	zipMaxFileSize: 128 * 1024 * 1024,
	tmpDir: './tmp/',
	connectionTimeout: 30
};
