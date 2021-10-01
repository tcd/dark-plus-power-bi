const path = require("path")
const pkgDir = require("pkg-dir")
 
(async () => {
    const rootDir = await pkgDir(__dirname)

    const outFolderPath = path.join(rootDir, "out")

    const schemaInPath = path.join(rootDir, "src", "json", "schema", "power-bi-report-theme.schema.json")
 
    console.log(rootDir)
    //=> "/Users/sindresorhus/foo"
})()