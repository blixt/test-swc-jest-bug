module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  testRegex: "\\.test\\.tsx?$",
  transform: {
    "\\.tsx?$": "@swc/jest",
  },
};
