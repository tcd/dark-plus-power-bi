// Node
const fs     = require("fs").promises
const path   = require("path")
// NPM
const pkgDir = require("pkg-dir")
const JSON5  = require("json5")

/**
 * @param {string} inPath 
 * @param {string} outPath 
 */
const convertJson = async (inPath, outPath) => {
    try {
        const oldFileContent = await fs.readFile(inPath, "utf8")
        const oldJSONContent = JSON5.parse(oldFileContent)
        const newJSONContent = JSON.stringify(oldJSONContent, null, 4)

        await fs.writeFile(outPath, newJSONContent)
    
        console.log(`file written: ${outPath}`)
    } catch (error) {
       console.log(error)
       process.exit(1)
    }
}

const buildSchema = async () => {
    const rootDir = await pkgDir(__dirname)
    const inPath  = path.join(rootDir, "src", "json", "schema", "schema.json5")
    const outPath = path.join(rootDir, "out", "report-theme.schema.json")
    await convertJson(inPath, outPath)
}

const buildTheme = async () => {
    const rootDir = await pkgDir(__dirname)
    const inPath  = path.join(rootDir, "src", "json", "theme.json5")
    const outPath = path.join(rootDir, "out", "dark-plus-report-theme.json")
    await convertJson(inPath, outPath)
}

async function main() {
    try {
        await buildTheme()
        await buildSchema()
    } catch (error) {
        console.log(error)    
        process.exit(1)
    }
}

(async () => {
    await main()
})()
