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

const buildFiles = async (filesToBuild) => {
    const rootDir = await pkgDir(__dirname)
    for (const file of filesToBuild) {
        const inPath  = path.join(rootDir, ...file.inPath)
        const outPath = path.join(rootDir, ...file.outPath)
        await convertJson(inPath, outPath)
    }
}

const filesToBuild = [
    {
        "inPath":  ["src", "json", "schema", "schema.jsonc"],
        "outPath": ["out", "report-theme.schema.json"],
    },
    {
        "inPath":  ["src", "json", "theme.jsonc"],
        "outPath": ["out", "dark-plus-report-theme.json"],
    },
]

async function main() {
    try {
        await buildFiles(filesToBuild)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

(async () => {
    await main()
})()
