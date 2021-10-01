const fs     = require("fs").promises
const path   = require("path")

const pkgDir = require("pkg-dir")
const JSON5  = require("json5")

const buildSchema = async () => {
    try {
        const rootDir = await pkgDir(__dirname)

        const schemaInPath  = path.join(rootDir, "src", "json", "schema", "schema.jsonc")
        const schemaOutPath = path.join(rootDir, "out", "report-theme.schema.json")

        const oldSchemaFileContent = await fs.readFile(schemaInPath, "utf8")
        const oldSchemaJSONContent = JSON5.parse(oldSchemaFileContent)
        const newSchemaJSONContent = JSON.stringify(oldSchemaJSONContent, null, 4)

        await fs.writeFile(schemaOutPath, newSchemaJSONContent)
    
        console.log(`file written: ${schemaOutPath}`)
    } catch (error) {
       console.log(error)
       process.exit(1)
    }
}

const buildTheme = async () => {
    try {
        const rootDir = await pkgDir(__dirname)

        const inPath  = path.join(rootDir, "src", "json", "theme.jsonc")
        const outPath = path.join(rootDir, "out", "dark-plus-report-theme.json")

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

async function main() {
    await buildTheme()
    await buildSchema()
}

(async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)    
        process.exit(1)
    }
})()
