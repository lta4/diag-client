Bandsintown widget hacks

Why these hacks exist
- The Bandsintown embeddable widget injects DOM with inline styles, duplicated anchors, and inconsistent element order.
- To make the widget match our site's layout and maintain accessibility, we apply a few defensive overrides (CSS + minimal DOM surgery).

What we changed (quick summary)
- Widget CSS (Widget.css)
  - Consolidated and applied a grid layout for each `.bit-event` (date | middle | actions).
  - Forced venue + location to appear inline on desktop and stacked on mobile.
  - Defensive rules to override injected inline styles and hide duplicate venue elements visually.
  - Rules to show/hide desktop vs mobile duplicate location anchors.

- Widget JS (Widget.jsx)
  - MutationObserver strips inline `style` attributes injected by the widget to allow our CSS to control layout.
  - A DOM-reorder step moves `.bit-titleWrapper` before `.bit-details` to ensure semantic reading order (improves screen reader behavior).
  - Note: We removed destructive dedupe (physical node removal) and rely on CSS visual hiding.

Risks and notes
- Because this is a third-party widget, our CSS uses `!important` in places to reliably override inline styles. This is intentional but makes the rules brittle if Bandsintown changes their class names.
- The DOM reordering moves nodes after the widget renders; this is low-risk but should be tested after any widget version upgrade.

How to revert or modify
- To revert CSS changes: edit or remove `src/components/Widget/Widget.css`.
- To remove DOM surgery: edit `src/components/Widget/Widget.jsx` and remove the MutationObserver logic.

Contact
- If the widget updates and layout breaks, start by disabling the CSS overrides and re-checking injected DOM in DevTools, then reintroduce minimal fixes here.
