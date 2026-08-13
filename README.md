# plus-minus

[![Playwright Tests](https://github.com/bahrus/plus-minus/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/plus-minus/actions/workflows/CI.yml)
[![NPM version](https://badge.fury.io/js/plus-minus.png)](http://badge.fury.io/js/plus-minus)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/plus-minus)](https://bundlephobia.com/result?p=plus-minus)
<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/plus-minus?compression=gzip">

Web component that provides toggling plus/minus buttons, useful for expand/collapse functionality.

Is designed from the ground up to be SSR/SSG compatible.



## Installation

Via node_modules / ES modules / import maps

```html
<script type=importmap>
<script type="importmap">
    {
        "imports": {
            "blow-dry/": "/node_modules/blow-dry/",
            "imp-h/": "/node_modules/imp-h/",
            "mount-observer/": "/node_modules/mount-observer/",
            "trans-render/": "/node_modules/trans-render/",
            "xtal-element/": "/node_modules/xtal-element/",
            "plus-minus/": "/node_modules/plus-minus"
        }
    }
</script>
</script>
<plus-minus imp-h="plus-minus/root.html"></plus-minus>
<plus-minus aria-controls=i-am-here></plus-minus>
<section id=i-am-here>
    hello
</section>
```

Via CDN:

```html
<plus-minus imp-h="plus-minus/root.html"></plus-minus>
<plus-minus aria-controls=i-am-here></plus-minus>
<section id=i-am-here>
    hello
</section>
<script type=importmap>
    {
        "imports": {
            "plus-minus/": "https://cdn.jsdelivr.net/npm/plus-minus@0.0.13/",
            "trans-render/": "https://esm.sh/trans-render@0.0.960/"
        }
    }
</script>
<script type=module src=https://esm.sh/be-importing@0.0.101/emc.js crossorigin=anonymous></script>
<script type=module src=https://esm.sh/xtal-element@0.0.635/index.js crossorigin=anonymous></script>
```

## SSR/SSG

Simply embed root.html in the HTML stream for the first instance, and just the *plus-minus* tag or subsequent instances.  Or if you prefer, embed root.html for each instance of the web component on the server (performance may vary with each approach)

## Viewing Demos Locally

1. Install git
2. Fork/clone this repo
3. Install node.js
4. Open command window to folder where you cloned this repo
5. > git submodule add https://github.com/bahrus/types.git types
6. > git submodule update --init --recursive
7. > npm install
8. > npm run serve
9. Open http://localhost:8000/ in a modern browser

