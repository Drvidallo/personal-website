import moduleAlias from 'module-alias'
import * as path from 'path'

const myCwd = __dirname

moduleAlias.addAliases({
  '@src': path.join(myCwd),
  '@api/helpers': path.join(myCwd, 'helpers', 'index'),
  '@api/controllers': path.join(myCwd, 'api', 'controller', 'index'),
  '@api/entities': path.join(myCwd, 'api', 'dao', 'entities', 'index'),
  '@api/services': path.join(myCwd, 'api', 'services'),
  '@api/constants': path.join(myCwd, 'lib', 'constants', 'index'),
  '@api/constants/main': path.join(myCwd, 'lib', 'constants', 'main'),
})
