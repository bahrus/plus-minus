# Planning

---

 ## Human Ask

 I'm planning to upgrade the custom element in this folder/package to follow the same approach as was done for the [scratch-box](/scratch-box/README.md), as explained in [](./types/NewCustomElement.md).

 A few questions:

 1.  Is the use of aria-controls a proper of use of that attribute?  This specifies the id(s) of element(s) to hide / show when the custom element is in expanded / collapsed state?
 2.  Is the use of the aria-expanded attribute, setting it to true when the the target element(s) are shown / false when the target element(s) are hidden accurate?
 3.  Any other aria attributes should be used?
 4.  Are there any other reusable  features that should be added to [el-maker](https://raw.githubusercontent.com/bahrus/el-maker/refs/heads/baseline/README.md) that seems like it be realistically reused by a significant number of other web components, so that this custom element can be code free?

## AI Thoughts

1. **Yes — `aria-controls` is being used correctly.** It is meant to identify the id(s) of elements whose content is controlled by the current element. For a disclosure / expand-collapse button, pointing `aria-controls` at the section(s) that are shown or hidden is the intended use.

2. **Yes — `aria-expanded` semantics are correct.** Set it to `true` when the controlled content is visible and `false` when it is hidden. The current `plus-minus` mapping in `base.js` / `root.html` (expanded ↔ aria-expanded=true, collapsed ↔ aria-expanded=false) matches the ARIA disclosure pattern.

3. **A few ARIA / accessibility tweaks to consider:**
   - **Put the ARIA attributes on the actual focusable button.** Right now `aria-expanded` and `aria-controls` live on the host `<plus-minus>` custom element, but the interactive element users tab to and activate is the internal `<button>` in the shadow DOM. Screen readers generally expect these attributes on the control that has focus. A cleaner design would keep `aria-controls` / `aria-expanded` on the internal `<button>` (or duplicate them there).
   - **`role="button"` is not needed on the host** because the real `<button>` is inside the shadow root. What matters is that keyboard activation, focus, and the accessible name are associated with that inner button.
   - **Make sure the button has an accessible name.** The current buttons use `aria-label="Expand"` / `aria-label="Collapse"`. That works, but consider updating the label as state changes (e.g. "Show details" / "Hide details") or adding visible text so sighted users also know what the button does.
   - **If the plus-minus is only one item in a larger set (e.g. an accordion), the outer grouping may need additional roles/attributes**, but those belong to the consuming page, not this component.

4. **What would need to be added to `el-maker` to make `plus-minus` code-free?**

   The `scratch-box` approach works because all behavior is covered by existing `ElementMaker` features (`truthSourcer`, `faceUp`, `roundabout`, `fontMgr`, `templateMaker`). `plus-minus` has one extra behavior that is not covered today: **parsing `aria-controls`, resolving the referenced elements, toggling their `hidden` state (including `hidden="until-found"`), and listening for `beforematch` events to re-expand.**

   That logic currently lives in `plus-minus/base.js` (`onAriaControls`, `changeVisibility`, `addBeforeMatchListeners`). To make `plus-minus` code-free, `el-maker` would need a reusable disclosure-controller feature that can be configured from JSON, e.g.:

   ```json
   {
       "disclosureController": {
           "customData": {
               "controlsAttr": "aria-controls",
               "expandedProp": "expanded",
               "hiddenUntilFound": true
           }
       }
   }
   ```

   This is a genuinely reusable pattern — accordions, tabs, tree views, detail/summary replacements, and expandable search filters all need a host element to show/hide one or more target elements by id. So adding a small "controlled visibility" feature to `el-maker` (or as a standalone feature package) would be reasonable and would let `plus-minus` drop its custom JS class.

   In the meantime, the pragmatic migration path is the `time-ticker` style: keep `plus-minus` as an `ElementMaker`-based custom element with a tiny custom feature that handles the controlled-element toggling. That already gives you the `scratch-box` architecture (feature injection, declarative shadow DOM template, SSR-friendly `root.html`) without pretending the component has no unique behavior.
