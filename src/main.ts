#!/usr/bin/env node
import { readJSONSync, writeFileSync, statSync, existsSync, mkdirpSync } from 'fs-extra'
import { resolve, join } from 'path'
import { generateLinkshelf } from './generate'

const [configPath, outputDirectory] = process.argv.slice(2)

function printUsage (): void {
  console.error('Usage: linkshelf-ng [config] [outDir]')
  process.exit(1)
}

if (!configPath || !outputDirectory) {
  printUsage()
}

const outputDirectoryPath = resolve(process.cwd(), outputDirectory)

if (!existsSync(outputDirectoryPath)) {
  console.log(`Creating output directory ${outputDirectoryPath}/...`)
  mkdirpSync(outputDirectoryPath)
}

if (!statSync(outputDirectoryPath).isDirectory) {
  console.error(`${outputDirectoryPath} is not a directory`)
  printUsage()
}

for (const { name, content } of generateLinkshelf(readJSONSync(configPath))) {
  const path = join(outputDirectoryPath, name)
  console.log(`Exporting ${path}...`)
  writeFileSync(path, content)
}
