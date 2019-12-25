const awsRegion = require("./../../config/application.json").awsRegion;

const AWS = require("aws-sdk");
const s3 = new AWS.S3({ region: awsRegion });

module.exports = { s3 };
