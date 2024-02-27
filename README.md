# plus-minus

[![Playwright Tests](https://github.com/bahrus/plus-minus/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/plus-minus/actions/workflows/CI.yml)
[![NPM version](https://badge.fury.io/js/plus-minus.png)](http://badge.fury.io/js/plus-minus)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/plus-minus)](https://bundlephobia.com/result?p=plus-minus)
<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/plus-minus?compression=gzip">

Web component that provides toggling plus/minus buttons, useful for expand/collapse functionality.

## Installation

Via node_modules / ES modules / import maps

```html
<script type=importmap>
{
    "imports": {
        "be-based/": "../node_modules/be-based/",
        "be-decorated/": "../node_modules/be-decorated/",
        "be-definitive/": "../node_modules/be-definitive/",
        "be-exportable/": "../node_modules/be-exportable/",
        "be-having/": "../node_modules/be-having/",
        "be-hive/": "../node_modules/be-hive/",
        "be-importing/": "../node_modules/be-importing/",
        "be-written/": "../node_modules/be-written/",
        "plus-minus/": "../node_modules/plus-minus/",
        "stream-orator/": "../node_modules/stream-orator/",
        "trans-render/": "../node_modules/trans-render/",
        "xtal-element/": "../node_modules/xtal-element/"
    }
}
</script>
<plus-minus enh-be-importing=plus-minus/root.html></plus-minus>
```

Via CDN:

```html
<plus-minus enh-be-importing="plus-minus/root.html"></plus-minus>
<plus-minus></plus-minus>
<script type=importmap>
    {
        "imports": {
            "plus-minus/": "https://cdn.jsdelivr.net/npm/plus-minus@0.0.11/"
        }
    }
</script>
<script type=module src=https://esm.run/be-importing@0.0.77/behivior.js crossorigin=anonymous></script>
<script type=module src=https://esm.run/xtal-element@0.0.596/xtal-element.js crossorigin=anonymous></script>
```

