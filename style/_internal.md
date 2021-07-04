```
src/
  _mixins/
  _functions/
  _placeholders/
  _settings/
    {settingFile}.scss
  _themes/
    {themeFile}.scss
  core/
    _references.scss
    index.scss
    {...}
  {distFile}.scss
  {distFile}.tsx
```


## `{distFile}.scss`

```tsx
@import "_settings/{settingFile.scss}";
@import "_themes/{themeFile.scss}";
@import "core/main.scss";
```

## `{distFile}.tsx`

```tsx
import "./{distFile}.scss";
```

## `_settings/{settingFile}.scss`

```scss
$z-setting-{ns}-{key}: {value} !default;
...
```

### Parameters
* `ns` - The namespace of the value. See list of namespaces.
* `key` - The key of the value
* `value` - The value

**Namespaces**

* `fs` - `font-size`

## `_themes/{themeFile}.scss`
```scss
$z-slot-{slotName}: {color} !default;
```

### Parameters
* `slotName` - The name of the slot. See list of slots.

**Slots**

* `bg` - The base `background-color`.

## `core/_references.scss`

```scss
@import "../_function";
@import "../_mixins";
@import "../_placeholders";

$slots: () !default;
$slots: map-merge((
  bg: $z-slots-bg,
  ...
), $slots);
```

## `core/index.scss`

```scss
@import "_references";
@import "..."; // Sub styles
```

