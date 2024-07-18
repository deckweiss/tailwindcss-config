import defaultTheme from 'tailwindcss/defaultTheme';
import { colors } from '@deckweiss/tailwindcss-config';

export default {
    content: ['./src/index.html'],
    theme: {
        extend: {
            colors,
            fontFamily: {
                sans: ['"Inter"', ...defaultTheme.fontFamily.sans]
            }
        }
    }
};
