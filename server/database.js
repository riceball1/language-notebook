exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL;

exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/simple-code';

exports.PORT = process.env.PORT || 5000;