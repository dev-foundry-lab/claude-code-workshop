
# React Accessibility Review Guidelines

## Purpose

Provide accessibility review criteria for React components.

Identify accessibility barriers supported by concrete
code evidence. Do not assume runtime behavior that
has not been verified.

## 1. Semantic HTML

Prefer native semantic HTML elements when they
provide the required behavior.

Check for:
- Clickable div or span elements used as buttons.
- Incorrect heading hierarchy.
- Missing semantic structure for lists.
- Incorrect use of interactive elements.

Prefer native buttons and links over custom
interactive containers.

## 2. Keyboard Accessibility

Verify that interactive controls can be operated
using a keyboard.

Check for:
- Click handlers without keyboard equivalents.
- Missing or incorrect keyboard interactions.
- Keyboard traps.
- Custom controls without expected key behavior.

Do not recommend adding keyboard handlers when
a native HTML element already provides them.

## 3. Forms and Labels

Check that form controls have accessible names.

Look for:
- Inputs without associated labels.
- Placeholder text used as the only label.
- Missing accessible names on icon-only buttons.
- Validation errors that are not communicated to assistive technologies.

Prefer visible labels when appropriate.

## 4. Focus Management

Check whether focus behavior is appropriate
for the component.

Consider:
- Focus visibility.
- Focus order.
- Focus restoration after dialogs close.
- Focus handling when content changes dynamically.

Do not claim a focus-management defect without
sufficient evidence about the component behavior.

## 5. ARIA

Apply the principle: native HTML first.

Check for:
- Unnecessary ARIA roles.
- Invalid ARIA attributes.
- Incorrect ARIA states.
- Missing accessible names where required.

Do not add ARIA attributes when native HTML
already provides the necessary semantics.

## 6. Reporting Rules

For each accessibility finding:
- Identify the affected file and location.
- Describe the accessibility barrier.
- Explain who may be affected and how.
- Recommend a semantic, keyboard-accessible fix.
- Distinguish verified defects from potential risks.

Do not modify source files.
Do not claim accessibility testing was performed
unless the relevant tests were actually executed.
