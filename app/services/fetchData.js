const fs = require("fs");
const path = require("path");

const fetchData = () => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, "./../../data.json")));
};

module.exports = { fetchData };
