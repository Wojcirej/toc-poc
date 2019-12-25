class S3Adapter {
  constructor(s3Service) {
    this.s3Service = s3Service;
  }

  async bucketExists(bucketName) {
    const params = {
      Bucket: bucketName
    };

    try {
      return !!(await this.s3Service.headBucket(params).promise());
    } catch (error) {
      return false;
    }
  }

  async createBucket(bucketName) {
    const params = {
      Bucket: bucketName
    };

    try {
      return !!(await this.s3Service.createBucket(params).promise());
    } catch (error) {
      return false;
    }
  }

  async websiteConfigExists(bucketName) {
    const params = {
      Bucket: bucketName
    };

    try {
      const result = await this.s3Service.getBucketWebsite(params).promise();
      return {
        configExists: true,
        config: result
      };
    } catch (error) {
      return {
        configExists: false,
        errorMessage: error.message
      };
    }
  }

  async createWebsiteConfig(bucketName) {
    const params = {
      Bucket: bucketName,
      WebsiteConfiguration: {
        ErrorDocument: {
          Key: "error.html"
        },
        IndexDocument: {
          Suffix: "index.html"
        }
      }
    };

    try {
      await this.s3Service.putBucketWebsite(params).promise();
      return true;
    } catch (error) {
      return false;
    }
  }

  async isObjectPresent(bucketName, key) {
    const params = {
      Bucket: bucketName,
      Key: key
    };

    try {
      return !!(await this.s3Service.headObject(params).promise());
    } catch (error) {
      return false;
    }
  }

  async uploadObject(bucketName, targetKey, contentType, fileStream) {
    const params = {
      Body: fileStream,
      Bucket: bucketName,
      Key: targetKey,
      ContentType: contentType
    };

    try {
      return !!(await this.s3Service.putObject(params).promise());
    } catch (error) {
      return false;
    }
  }
}

module.exports = S3Adapter;
