const setupWebsiteConfig = async (bucketName, s3Adapter) => {
  const result = await s3Adapter.websiteConfigExists(bucketName);
  if (result.configExists) {
    console.log(`Bucket ${bucketName} is configured as website already...`);
  } else {
    const websiteConfigCreated = await s3Adapter.createWebsiteConfig(
      bucketName
    );
    if (websiteConfigCreated) {
      console.log(`Created new website config on bucket ${bucketName}`);
      console.log("with 'index.html' key as index document");
      console.log("and 'error.html' key as error document.");
    }
  }
};

module.exports = { setupWebsiteConfig };
