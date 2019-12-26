const setupBucket = async (bucketName, region, s3Adapter) => {
  const bucketExists = await s3Adapter.bucketExists(bucketName);
  if (bucketExists) {
    console.log(`Bucket ${bucketName} exists...`);
  } else {
    const bucketCreated = await s3Adapter.createBucket(bucketName, region);
    if (bucketCreated) {
      console.log(`Created new S3 bucket ${bucketName}...`);
    }
  }
};

module.exports = { setupBucket };
