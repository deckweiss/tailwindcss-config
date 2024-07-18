const defaultTheme = require('tailwindcss/defaultTheme');
import { colors } from './src';

module.exports = {
    content: ['./test-setup/index.html'],
    theme: {
        extend: {
            colors,
            fontFamily: {
                sans: ['"Inter"', ...defaultTheme.fontFamily.sans]
            }
        }
    }
};
