/**
 * Use index.ts
 * Only here for iOS Release build bundling
 */

import { AppRegistry } from 'react-native'

import { name } from './app.json'
import Root from './src/App'

AppRegistry.registerComponent(name, () => Root)
