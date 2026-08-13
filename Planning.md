# Planning

---

 ## Human Ask

 I'm planning to upgrade the custom element in this folder/package to follow the same approach as was done for the [scratch-box](/scratch-box/README.md), as explained in [](./types/NewCustomElement.md).

 A few questions:

 1.  Is the use of aria-controls a proper of use of that attribute?  This specifies the id(s) of element(s) to hide / show when the custom element is in expanded / collapsed state?
 2.  Is the use of the aria-expanded attribute, setting it to true when the the target element(s) are shown / false when the target element(s) are hidden accurate?
 3.  Any other aria attributes should be used?
 4.  Are there any other reusable  features that should be added to [el-maker](https://raw.githubusercontent.com/bahrus/el-maker/refs/heads/baseline/README.md) that seems like it be realistically reused by a significant number of other web components, so that this custom element can be code free?
