import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const serverDir = path.join(projectRoot, 'dist', 'server')

await mkdir(serverDir, { recursive: true })
await writeFile(
  path.join(serverDir, 'index.js'),
  "export default { async fetch(request, env) { return env.ASSETS.fetch(request) } }\n",
  'utf8',
)
