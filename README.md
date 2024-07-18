# TailwindCSS Configuration
Copy and paste everything you need in your next project. Preferably, colors are copied as a whole to guarantee compatibility with figma design prototypes. The colors are optimized to work with shadcn.
## Installation
### 1. Install packages
```sh
pnpm i @deckweiss/tailwindcss-config
pnpm i -D postcss-import
```

### 2. Update tailwind.config
```javascript
import { colors } from '@deckweiss/tailwindcss-config';

export default {
    theme: {
        extend: {
            colors
        }
    }
}
 
```

### 2. Update postcss.config.js
```javascript
// /postcss.config.js
module.exports = {
    plugins: {
        "postcss-import": {}
    }
}
```

### 3. Replace TailwindCSS statements
```css
/* root css file */
@import "tailwindcss/base"; /* used to be `@tailwind base;` */
@import "tailwindcss/components"; /* used to be `@tailwind components;` */
@import "tailwindcss/utilities"; /* used to be `@tailwind utilities;` */

@import "@deckweiss/tailwindcss-config/variables";
```

# Contribution
Please create a tag for every substantial change to keep track of compatibility.
