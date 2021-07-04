const I = 0;
const Q = -1;
const N = -2;
const D = 1;

const p = {
  ux: Q,
  ui: Q,
  base: Q,
  web: Q,
  react: Q,
  docs: Q,
  comment: ""
}

const a11y = {name: "Accessibility", ...p};
const i18n = {name: "Internationalization", ...p};
const l10n = {name: "Localization", ...p};
const layout = {name: "Layout", ...p};
const themes = {name: "Themes", ...p};
const style = {name: "Base style", ...p};

const items = [a11y, i18n, l10n, layout, themes, style];

module.exports = {
  enum: {
    InProgress: I,
    Queued: Q,
    NotApplicable: N,
    Done: D,
  },
  items,
};
