/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto'],
            },
            colors: {
                black: '#030b09',
                background: '#f8fdfb',
                primary: '#00aa80',
                secondary: '#99d8c8',
                accent: '#AA0080',
            },
        },
    },
};
