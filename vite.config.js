import {resolve} from 'path';
export default{
    build: {
        lib: {
            entry: [
                resolve(__dirname,'src/debounce-throttle.js'),
            ],
            name: 'dt',
            formats: ["es", "umd"],
            fileName: (format,name) => `${name}.${format}.js`,
        },
    },
}