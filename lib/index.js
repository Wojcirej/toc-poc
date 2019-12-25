const { s3 } = require("./aws");
const S3Adapter = require("./s3Adapter");

const s3Adapter = new S3Adapter(s3);

module.exports = { s3, s3Adapter };
