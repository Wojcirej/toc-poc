const setupStaticPages = async (bucketName, indexKey, errorKey, s3Adapter) => {
  indexKeyExists = await s3Adapter.isObjectPresent(bucketName, indexKey);
  if (indexKeyExists) {
    console.log(
      `Index key '${indexKey}' exists on bucket ${bucketName}, skipping...`
    );
  } else {
    const indexFileStream = readFile(indexKey);
    indexKeyCreated = await s3Adapter.uploadObject(
      bucketName,
      indexKey,
      "text/html",
      indexFileStream
    );
    if (indexKeyCreated) {
      console.log(
        `Created default index key ${indexKey} on bucket ${bucketName}...`
      );
    }
  }

  errorKeyExists = await s3Adapter.isObjectPresent(bucketName, errorKey);
  if (errorKeyExists) {
    console.log(
      `Error key '${errorKey}' exists on bucket ${bucketName}, skipping...`
    );
  } else {
    const errorFileStream = readFile(errorKey);
    errorKeyCreated = await s3Adapter.uploadObject(
      bucketName,
      errorKey,
      "text/html",
      errorFileStream
    );
    if (errorKeyCreated) {
      console.log(
        `Created default error key ${errorKey} on bucket ${bucketName}...`
      );
    }
  }
};

const fs = require("fs");
const path = require("path");
const readFile = name => {
  return fs.readFileSync(path.join(__dirname, `./assets/${name}`));
};

module.exports = { setupStaticPages };
