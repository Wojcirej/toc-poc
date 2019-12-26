const config = require("./../../config/application.json")[process.env.NODE_ENV];
const { s3BucketName, awsRegion } = config;

const { s3Adapter } = require("../../lib");
const { setupBucket } = require("./setupBucket");
const { setupWebsiteConfig } = require("./setupWebsiteConfig");
const { setupStaticPages } = require("./setupStaticPages");

const setup = async (bucketName, awsRegion) => {
  await setupBucket(bucketName, awsRegion, s3Adapter);
  await setupWebsiteConfig(bucketName, s3Adapter);
  await setupStaticPages(bucketName, "index.html", "error.html", s3Adapter);
  console.log(
    `Visit your website at http://${bucketName}.s3-website-${awsRegion}.amazonaws.com/`
  );
};

setup(s3BucketName, awsRegion);
