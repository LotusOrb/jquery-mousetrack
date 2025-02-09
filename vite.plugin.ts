import { PluginOption } from "vite";
import pluginDTS from 'vite-plugin-dts'

export const pluginOptions:PluginOption[] = [pluginDTS({tsconfigPath:'tsconfig.lib.json'})]