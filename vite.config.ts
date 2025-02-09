import { defineConfig } from 'vite'
import { pluginOptions } from './vite.plugin'
import * as path from 'path';

export default defineConfig({
    plugins: pluginOptions,
    build:{
        lib:{
            entry: path.join(__dirname,"src","jquery-mousetrack.ts"),
            name:"jquery-mousetrack",
            fileName:(format)=>`jquery-mousetrack.${format}.js`,
            formats:['umd',"es","cjs"]
        }
    }
})