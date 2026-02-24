import toIco from 'to-ico'
import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const png32 = readFileSync(join(publicDir, 'favicon-32.png'))
const png16 = readFileSync(join(publicDir, 'favicon-16.png'))

const ico = await toIco([png32, png16])
writeFileSync(join(publicDir, 'favicon.ico'), ico)
console.log('Generated favicon.ico')
