import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const paths = {
  build: path.join(__dirname, '../build/'),
  config: path.join(__dirname, '../config/'),
  files: path.join(__dirname, '../public/'),
  nodeModules: path.join(__dirname, '../node_modules/'),
  scripts: path.join(__dirname, '../scripts/'),
  src: path.join(__dirname, '../src/'),
}

export const files = {
  yarnrc: path.join(__dirname, '../.yarnrc.yml'),
}

const errorColor = '\x1b[31m'
const defaultColor = '\x1b[0m'

export const handleError = (error) => {
  if (error) {
    console.error(`${errorColor}An error occurred:${defaultColor}\n`)
    throw error
  }
}
