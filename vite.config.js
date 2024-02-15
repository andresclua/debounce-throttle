import {resolve} from 'path';
export default{
    build: {
        lib: {
            entry: [
                resolve(__dirname,'src/debounce-trottle.js'),
            ],
            name: 'dt',
            formats: ["es", "umd"],
            fileName: (format,name) => `${name}.${format}.js`,
        },
    },
}