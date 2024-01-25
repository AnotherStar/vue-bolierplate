import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import alias from '@rollup/plugin-alias';
import Pages from 'vite-plugin-pages';

const projectRootDir = resolve(__dirname);

console.log(process.env.VITE_APP_SERVER_URL);

export default ({ command, mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return defineConfig({
        plugins: [
            vue(),
            Pages({
                dirs: 'src/pages',
                extensions: ['vue'],
                exclude: ['**/components/*.vue'],
            }),
            Components({
                directoryAsNamespace: true,
                dts: 'components.d.ts',
                dirs: ['src/components'],
            }),
            Components({
                directoryAsNamespace: false,
                dts: 'components-headlessui.d.ts',
                dirs: ['node_modules/@headlessui/vue/dist/components'],
            }),
            alias(),
        ],

        server: {
            port: 3201,
            strictPort: true,
            proxy: {},
        },

        preview: {
            port: 8000,
            strictPort: true,
        },

        resolve: {
            alias: {
                '@composables': resolve(projectRootDir, 'src/composables'),
                '@assets': resolve(projectRootDir, 'src/assets'),
            },
        },

        publicDir: 'public',
    });
};
