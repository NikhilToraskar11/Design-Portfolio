/* @ds-bundle: {"format":4,"namespace":"FlexiLoansDesignSystem_be63d1","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Fab","sourcePath":"components/actions/Fab.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"SegmentedButtons","sourcePath":"components/actions/SegmentedButtons.jsx"},{"name":"Avatar","sourcePath":"components/brand/Avatar.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Typography","sourcePath":"components/brand/Typography.jsx"},{"name":"Card","sourcePath":"components/containment/Card.jsx"},{"name":"Dialog","sourcePath":"components/containment/Dialog.jsx"},{"name":"Divider","sourcePath":"components/containment/Divider.jsx"},{"name":"ListRow","sourcePath":"components/containment/ListRow.jsx"},{"name":"Sheet","sourcePath":"components/containment/Sheet.jsx"},{"name":"Thumbnail","sourcePath":"components/containment/Thumbnail.jsx"},{"name":"TableAppBar","sourcePath":"components/data/TableAppBar.jsx"},{"name":"TableHeader","sourcePath":"components/data/TableHeader.jsx"},{"name":"TableRow","sourcePath":"components/data/TableRow.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Note","sourcePath":"components/feedback/Note.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Snackbar","sourcePath":"components/feedback/Snackbar.jsx"},{"name":"STATUS","sourcePath":"components/feedback/StatusChip.jsx"},{"name":"StatusChip","sourcePath":"components/feedback/StatusChip.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Chip","sourcePath":"components/forms/Chip.jsx"},{"name":"Dropdown","sourcePath":"components/forms/Dropdown.jsx"},{"name":"InputField","sourcePath":"components/forms/InputField.jsx"},{"name":"OtpField","sourcePath":"components/forms/OtpField.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"BottomAppBar","sourcePath":"components/navigation/BottomAppBar.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"NavigationBar","sourcePath":"components/navigation/NavigationBar.jsx"},{"name":"NavigationDrawer","sourcePath":"components/navigation/NavigationDrawer.jsx"},{"name":"NavigationRail","sourcePath":"components/navigation/NavigationRail.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"ProfileSection","sourcePath":"components/navigation/ProfileSection.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopAppBar","sourcePath":"components/navigation/TopAppBar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"236cd68e7993","components/actions/Fab.jsx":"dec3d516514a","components/actions/IconButton.jsx":"a2148cba3196","components/actions/SegmentedButtons.jsx":"218b2e1d2c4b","components/brand/Avatar.jsx":"e306e303d7d9","components/brand/Icon.jsx":"dcfee98636e2","components/brand/Logo.jsx":"b806b05276db","components/brand/Typography.jsx":"ca002d800234","components/containment/Card.jsx":"8908b6774762","components/containment/Dialog.jsx":"2320fe9f126e","components/containment/Divider.jsx":"898f0a382d1c","components/containment/ListRow.jsx":"f859f493bf82","components/containment/Sheet.jsx":"fb3883622b97","components/containment/Thumbnail.jsx":"e84c67158de4","components/data/TableAppBar.jsx":"a50d85a46f68","components/data/TableHeader.jsx":"2d8f3a33d02d","components/data/TableRow.jsx":"b518d8900b2d","components/feedback/Badge.jsx":"ed79a21eb359","components/feedback/Note.jsx":"e9455a096503","components/feedback/Progress.jsx":"6105ca508d92","components/feedback/Snackbar.jsx":"3ad3a6b15f02","components/feedback/StatusChip.jsx":"1af792d82e5b","components/feedback/Tooltip.jsx":"1694fd6bff68","components/forms/Checkbox.jsx":"7d3edb1f411a","components/forms/Chip.jsx":"a513cb405531","components/forms/Dropdown.jsx":"29364b87963b","components/forms/InputField.jsx":"cfbc63484db8","components/forms/OtpField.jsx":"a21ff34bc854","components/forms/Radio.jsx":"d190f9aa7ed6","components/forms/SearchBar.jsx":"b1bca05c2030","components/forms/Slider.jsx":"1efb5347d6f9","components/forms/Switch.jsx":"52e5682e8090","components/navigation/BottomAppBar.jsx":"db03768a37b3","components/navigation/Breadcrumbs.jsx":"53810acda4a0","components/navigation/Menu.jsx":"9b16a13c61ad","components/navigation/NavigationBar.jsx":"e1c4759d5751","components/navigation/NavigationDrawer.jsx":"46100d4a5983","components/navigation/NavigationRail.jsx":"0799d1158bcf","components/navigation/Pagination.jsx":"c9a78fa4f587","components/navigation/ProfileSection.jsx":"b113c41c758e","components/navigation/Tabs.jsx":"d92025499053","components/navigation/TopAppBar.jsx":"d2dea8125907","ui_kits/credit_ops/ApplicationSheet.jsx":"c4c5cfe3130b","ui_kits/credit_ops/Charts.jsx":"a60ec88b67f3","ui_kits/credit_ops/CreditOpsApp.jsx":"693d9590a585","ui_kits/credit_ops/KpiRow.jsx":"ecc8c520606b","ui_kits/credit_ops/QueueSection.jsx":"96ba3101747c","ui_kits/field_app/FieldApp.jsx":"7c32d530e056","ui_kits/field_app/InboxScreen.jsx":"9c46102cdf42","ui_kits/field_app/SignInScreen.jsx":"0097b6072fc4","ui_kits/field_app/VisitDetailScreen.jsx":"35b28f46bfef","ui_kits/field_app/VisitsScreen.jsx":"979597e6d4fd","ui_kits/supply_chain/InvoiceBook.jsx":"24f050efa605","ui_kits/supply_chain/InvoiceSheet.jsx":"e7c42594c376","ui_kits/supply_chain/LimitCharts.jsx":"63d51fcd101c","ui_kits/supply_chain/ProgrammeHeader.jsx":"b682e8f2c51b","ui_kits/supply_chain/ScfApp.jsx":"e78d84bf6a8f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FlexiLoansDesignSystem_be63d1 = window.FlexiLoansDesignSystem_be63d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const V = {
  v1: {
    fill: {
      bg: "#0A3254",
      hover: "#265074",
      press: "#416E93",
      fg: "#FFFFFF",
      ring: "#020A11"
    },
    quiet: {
      fg: "#0A3254",
      fgActive: "#0A3254",
      hover: "#ECFAFF",
      press: "#B4EBFF",
      stroke: "#0A3254",
      ring: "#0A3254"
    }
  },
  v2: {
    fill: {
      bg: "#00B9F1",
      hover: "#33C7F4",
      press: "#0094C1",
      fg: "#FFFFFF",
      ring: "#004A60"
    },
    quiet: {
      fg: "#00B9F1",
      fgActive: "#0A3254",
      hover: "#E6F8FE",
      press: "#CCF1FC",
      stroke: "#00B9F1",
      ring: "#004A60"
    }
  }
};
const SZ = {
  40: {
    h: 40,
    px: 16,
    py: 10,
    gap: 8
  },
  32: {
    h: 32,
    px: 12,
    py: 6,
    gap: 4
  }
};
function Button({
  children,
  type = "primary",
  version = "v2",
  size = 40,
  icon,
  trailingIcon,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = V[version] || V.v2;
  const s = SZ[size] || SZ[40];
  const filled = type === "primary";
  const c = filled ? v.fill : v.quiet;
  let bg = "transparent",
    fg = c.fg,
    border = "none";
  if (filled) {
    bg = press ? c.press : hover ? c.hover : c.bg;
    fg = c.fg;
  } else {
    bg = press ? c.press : hover ? c.hover : "transparent";
    fg = hover || press ? c.fgActive : c.fg;
    if (type === "secondary") border = "1px solid " + c.stroke;
  }
  if (disabled) {
    bg = filled ? "var(--fl-btn-disabled-bg)" : "transparent";
    fg = "var(--fl-btn-disabled-fg)";
    border = type === "secondary" ? "1px solid var(--fl-btn-disabled-stroke)" : "none";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      boxSizing: "border-box",
      height: s.h,
      width: "fit-content",
      padding: s.py + "px " + s.px + "px",
      border: border,
      borderRadius: "var(--fl-button-radius)",
      background: bg,
      color: fg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      font: "500 14px/20px var(--fl-font-plain)",
      letterSpacing: "0.25px",
      cursor: disabled ? "default" : "pointer",
      whiteSpace: "nowrap",
      transition: "background-color 100ms var(--md-sys-motion-easing-standard)",
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, icon) : null, children, trailingIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, trailingIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Fab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SZ = {
  sm: 40,
  md: 48,
  lg: 56,
  xl: 92
};
function Fab({
  children,
  label,
  size = "md",
  extended = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [press, setPress] = React.useState(false);
  const px = SZ[size] || SZ.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": extended ? undefined : label,
    disabled: disabled,
    onClick: onClick,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false)
  }, rest, {
    style: {
      height: px,
      width: extended ? "fit-content" : px,
      minWidth: px,
      padding: extended ? "0 20px" : 0,
      border: 0,
      borderRadius: extended ? "var(--fl-button-radius)" : "50%",
      background: disabled ? "var(--fl-btn-disabled-bg)" : "var(--fl-fab-bg)",
      color: disabled ? "var(--fl-btn-disabled-fg)" : "var(--fl-fab-fg)",
      boxShadow: disabled ? "none" : press ? "var(--md-elevation-1)" : "var(--fl-fab-shadow)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      font: "500 14px/20px var(--fl-font-plain)",
      letterSpacing: "0.25px",
      cursor: disabled ? "default" : "pointer",
      flex: "none",
      ...style
    }
  }), children, extended ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Fab.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  children,
  label,
  disabled = false,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const layer = press ? 0.12 : hover ? 0.08 : 0;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    "aria-pressed": selected ? true : undefined,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      width: 48,
      height: 48,
      flex: "none",
      padding: 0,
      border: 0,
      background: "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "default" : "pointer",
      position: "relative",
      color: disabled ? "var(--md-sys-color-disabled-content)" : selected ? "var(--md-sys-color-primary)" : "var(--md-sys-color-on-surface)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: selected ? "var(--md-sys-color-primary-container)" : "currentColor",
      opacity: selected ? 1 : layer,
      pointerEvents: "none",
      transition: "opacity 100ms var(--md-sys-motion-easing-standard)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/SegmentedButtons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SegmentedButtons({
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group"
  }, rest, {
    style: {
      display: "inline-flex",
      height: 40,
      ...style
    }
  }), options.map((o, i) => {
    const val = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    const on = val === value;
    const first = i === 0,
      last = i === options.length - 1;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      "aria-pressed": on,
      onClick: () => onChange && onChange(val),
      style: {
        boxSizing: "border-box",
        height: 40,
        padding: on ? "0 16px 0 12px" : "0 16px",
        border: "1px solid var(--md-sys-color-outline)",
        borderLeftWidth: first ? 1 : 0,
        borderRadius: first ? "9999px 0 0 9999px" : last ? "0 9999px 9999px 0" : 0,
        background: on ? "var(--md-sys-color-secondary-container)" : "transparent",
        color: on ? "var(--md-sys-color-on-secondary-container)" : "var(--md-sys-color-on-surface)",
        font: "500 14px/20px var(--fl-font-plain)",
        letterSpacing: "0.1px",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
        whiteSpace: "nowrap"
      }
    }, on ? /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        width: 18,
        height: 18,
        fill: "currentColor",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
    })) : null, label);
  }));
}
Object.assign(__ds_scope, { SegmentedButtons });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/SegmentedButtons.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  18: 18,
  20: 20,
  24: 24,
  40: 40,
  48: 48
};

/** Material Symbols glyph, standing in for the FlexiLoans Figma icon library. */
function Icon({
  name,
  size = 24,
  filled = false,
  weight = 400,
  color = "currentColor",
  style,
  ...rest
}) {
  const px = SIZES[size] || size;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      fontFamily: "'Material Symbols Outlined'",
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: px + "px",
      lineHeight: 1,
      width: px + "px",
      height: px + "px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      color: color,
      userSelect: "none",
      fontVariationSettings: "'FILL' " + (filled ? 1 : 0) + ", 'wght' " + weight + ", 'GRAD' 0, 'opsz' " + px,
      ...style
    }
  }), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const S = {
  xs: {
    box: 24,
    glyph: 18,
    font: "500 12px/16px var(--fl-font-plain)",
    ls: "0.5px"
  },
  sm: {
    box: 32,
    glyph: 20,
    font: "500 14px/20px var(--fl-font-plain)",
    ls: "0.1px"
  },
  md: {
    box: 40,
    glyph: 24,
    font: "400 16px/24px var(--fl-font-plain)",
    ls: "0.5px"
  },
  lg: {
    box: 48,
    glyph: 40,
    font: "400 22px/28px var(--fl-font-plain)",
    ls: "0px"
  }
};
function Avatar({
  initials = "FL",
  size = "md",
  type = "monogram",
  disabled = false,
  style,
  ...rest
}) {
  const s = S[size] || S.md;
  const bg = disabled ? "var(--fl-avatar-bg-disabled)" : "var(--fl-avatar-bg)";
  const fg = disabled ? "var(--fl-avatar-fg-disabled)" : "var(--fl-avatar-fg)";
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      width: s.box,
      height: s.box,
      flex: "none",
      borderRadius: "50%",
      background: bg,
      color: fg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      font: s.font,
      letterSpacing: s.ls,
      ...style
    }
  }), type === "profile" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "person",
    size: s.glyph,
    color: "currentColor"
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  navy: "var(--md-sys-color-secondary)",
  white: "#FFFFFF",
  cyan: "var(--md-sys-color-primary)",
  accent: "var(--md-sys-color-accent)"
};
const SIZES = {
  sm: 16,
  md: 22,
  lg: 28,
  xl: 40
};

/**
 * TYPE-ONLY LOCKUP. No FlexiLoans logo artwork was supplied with the sources,
 * so the wordmark is set in the brand typeface rather than reconstructed.
 */
function Logo({
  color = "navy",
  size = "md",
  tagline = false,
  orientation = "horizontal",
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const c = COLORS[color] || color;
  const col = orientation === "vertical";
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      flexDirection: col ? "column" : "row",
      alignItems: col ? "center" : "baseline",
      gap: col ? 4 : 8,
      color: c,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 " + px + "px/1 var(--fl-font-brand)",
      letterSpacing: "-0.02em"
    }
  }, "FlexiLoans"), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 " + Math.max(9, Math.round(px * 0.42)) + "px/1.2 var(--fl-font-plain)",
      letterSpacing: "0.06em",
      opacity: 0.8
    }
  }, "Sapne Tere Ye"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Typography.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// The Figma Typography set's three axes: Type × Size × Weight.
// Sizes are the file's own 14; every role carries all five weights.
const SCALE = {
  display: {
    large: {
      size: 57,
      line: 64,
      track: -0.25
    },
    medium: {
      size: 45,
      line: 52,
      track: 0
    },
    small: {
      size: 36,
      line: 44,
      track: 0
    }
  },
  headline: {
    large: {
      size: 32,
      line: 40,
      track: 0
    },
    medium: {
      size: 28,
      line: 36,
      track: 0
    },
    small: {
      size: 24,
      line: 32,
      track: 0
    }
  },
  title: {
    large: {
      size: 22,
      line: 28,
      track: 0
    },
    medium: {
      size: 18,
      line: 26,
      track: 0
    },
    small: {
      size: 16,
      line: 24,
      track: 0.15
    }
  },
  body: {
    large: {
      size: 16,
      line: 24,
      track: 0.5
    },
    medium: {
      size: 14,
      line: 20,
      track: 0.25
    },
    small: {
      size: 12,
      line: 16,
      track: 0.4
    }
  },
  label: {
    large: {
      size: 14,
      line: 20,
      track: 0.1
    },
    medium: {
      size: 12,
      line: 16,
      track: 0.5
    },
    small: {
      size: 11,
      line: 16,
      track: 0.5
    }
  }
};
const WEIGHTS = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

// Product defaults per type: display/headline/title-large sit at Regular,
// title-small and every label at Medium.
const DEFAULT_WEIGHT = {
  display: 400,
  headline: 400,
  title: 400,
  body: 400,
  label: 500
};
function Typography({
  children,
  type = "body",
  size = "medium",
  weight,
  color,
  align,
  mono = false,
  as,
  truncate = false,
  style,
  ...rest
}) {
  const group = SCALE[type] || SCALE.body;
  const s = group[size] || group.medium;
  const w = weight === undefined ? type === "title" && size === "small" ? 500 : DEFAULT_WEIGHT[type] || 400 : WEIGHTS[weight] || weight;
  const family = mono ? "var(--fl-font-mono)" : type === "display" || type === "headline" ? "var(--fl-font-brand)" : "var(--fl-font-plain)";
  const Tag = as || (type === "display" || type === "headline" ? "h2" : "p");
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      margin: 0,
      fontFamily: family,
      fontSize: s.size + "px",
      lineHeight: s.line + "px",
      fontWeight: w,
      letterSpacing: s.track + "px",
      color: color || "var(--md-sys-color-on-surface)",
      textAlign: align,
      overflow: truncate ? "hidden" : undefined,
      textOverflow: truncate ? "ellipsis" : undefined,
      whiteSpace: truncate ? "nowrap" : undefined,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Typography });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Typography.jsx", error: String((e && e.message) || e) }); }

// components/containment/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = "filled",
  interactive = false,
  disabled = false,
  selected = false,
  padding = 16,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const bg = disabled ? "var(--fl-card-bg-disabled)" : interactive && press ? "var(--fl-card-bg-pressed)" : interactive && hover ? "var(--fl-card-bg-hover)" : "var(--fl-card-bg)";
  const border = selected ? "1px solid var(--fl-card-outline-focused)" : variant === "outlined" ? "1px solid var(--fl-card-outline)" : "none";
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => interactive && setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
      boxSizing: "border-box",
      background: bg,
      border: border,
      borderRadius: "var(--fl-card-radius)",
      overflow: "hidden",
      boxShadow: variant === "elevated" ? "var(--fl-card-shadow)" : "none",
      color: disabled ? "var(--fl-card-text-disabled)" : "var(--fl-card-text)",
      padding: padding,
      cursor: interactive && !disabled ? "pointer" : "default",
      transition: "background-color 100ms var(--md-sys-motion-easing-standard)",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Card.jsx", error: String((e && e.message) || e) }); }

// components/containment/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  children,
  icon,
  actions,
  onClose,
  width = 400,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgb(var(--scrim-rgb) / .32)"
    }
  }), /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true"
  }, rest, {
    style: {
      position: "relative",
      width: width,
      maxWidth: "calc(100% - 48px)",
      boxSizing: "border-box",
      background: "var(--md-sys-color-surface)",
      color: "var(--md-sys-color-on-surface)",
      borderRadius: "var(--md-sys-shape-corner-extra-large)",
      boxShadow: "var(--md-elevation-3)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 16px",
      borderBottom: actions ? "1px solid var(--md-sys-color-outline-variant)" : "none"
    }
  }, icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 16,
      color: "var(--md-sys-color-primary)"
    }
  }, icon) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      textAlign: icon ? "center" : "left",
      font: "400 24px/32px var(--fl-font-brand)",
      color: "var(--md-sys-color-on-surface)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/20px var(--fl-font-plain)",
      letterSpacing: "0.25px",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, children)), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: "16px 24px 24px"
    }
  }, actions) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/containment/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  orientation = "horizontal",
  color = "grey",
  inset = 0,
  style,
  ...rest
}) {
  const c = color === "blue" ? "var(--fl-divider-blue)" : "var(--fl-divider-grey)";
  const v = orientation === "vertical";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "separator"
  }, rest, {
    style: {
      display: "block",
      flex: "none",
      width: v ? 1 : "auto",
      height: v ? "auto" : 1,
      alignSelf: v ? "stretch" : "auto",
      background: c,
      marginLeft: v ? 0 : inset,
      marginRight: v ? 0 : inset,
      marginTop: v ? inset : 0,
      marginBottom: v ? inset : 0,
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Divider.jsx", error: String((e && e.message) || e) }); }

// components/containment/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ListRow({
  headline,
  supportingText,
  leading,
  trailing,
  trailingText,
  divider = false,
  selected = false,
  disabled = false,
  onClick,
  minHeight = 72,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick && !disabled;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: clickable ? onClick : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      gap: 16,
      minHeight: minHeight,
      padding: "12px 16px",
      background: selected ? "var(--md-sys-color-secondary-container)" : clickable && hover ? "var(--fl-card-bg-hover)" : "transparent",
      borderBottom: divider ? "1px solid var(--md-sys-color-outline-variant)" : "none",
      cursor: clickable ? "pointer" : "default",
      color: disabled ? "var(--md-sys-color-disabled-content)" : "var(--md-sys-color-on-surface)",
      ...style
    }
  }), leading, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 16px/24px var(--fl-font-plain)",
      letterSpacing: "0.15px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, headline), supportingText ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 14px/20px var(--fl-font-plain)",
      letterSpacing: "0.1px",
      color: disabled ? "var(--md-sys-color-disabled-content)" : "var(--md-sys-color-on-surface-variant)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, supportingText) : null), trailingText ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 14px/20px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)",
      flex: "none",
      fontFamily: "var(--fl-font-mono)"
    }
  }, trailingText) : null, trailing);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/containment/Sheet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Sheet({
  open = false,
  side = "right",
  title,
  children,
  footer,
  onClose,
  width = 400,
  style,
  ...rest
}) {
  const right = side === "right";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      background: "rgb(var(--scrim-rgb) / .32)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity 250ms var(--md-sys-motion-easing-standard)"
    }
  }), /*#__PURE__*/React.createElement("aside", _extends({
    "aria-hidden": !open
  }, rest, {
    style: {
      position: "fixed",
      top: 0,
      bottom: 0,
      zIndex: 51,
      width: width,
      maxWidth: "100%",
      left: right ? "auto" : 0,
      right: right ? 0 : "auto",
      background: "var(--md-sys-color-surface)",
      color: "var(--md-sys-color-on-surface)",
      boxShadow: "var(--md-elevation-2)",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      transform: open ? "none" : "translateX(" + (right ? "100%" : "-100%") + ")",
      transition: "transform 300ms var(--md-sys-motion-easing-emphasized-decelerate)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      minHeight: 64,
      padding: "0 8px 0 24px",
      borderBottom: "1px solid var(--md-sys-color-outline-variant)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      flex: 1,
      font: "500 16px/24px var(--fl-font-plain)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      width: 48,
      height: 48,
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "inherit",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 24,
      height: 24,
      fill: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 24
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: 16,
      borderTop: "1px solid var(--md-sys-color-outline-variant)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/containment/Thumbnail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Thumbnail({
  width = "100%",
  height = 188,
  kind = "image",
  src,
  alt = "",
  radius = 0,
  style,
  ...rest
}) {
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: alt
    }, rest, {
      style: {
        width,
        height,
        objectFit: "cover",
        display: "block",
        borderRadius: radius,
        ...style
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width,
      height,
      background: "var(--fl-card-thumb-bg)",
      borderRadius: radius,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: kind === "video" ? "movie" : "image",
    size: height >= 120 ? 48 : 40,
    color: "var(--fl-card-thumb-fg)"
  }));
}
Object.assign(__ds_scope, { Thumbnail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/containment/Thumbnail.jsx", error: String((e && e.message) || e) }); }

// components/data/TableAppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TableAppBar({
  title,
  status,
  actions,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      gap: 12,
      minHeight: 64,
      padding: "0 8px 0 16px",
      background: "var(--md-sys-color-surface)",
      borderBottom: "1px solid var(--fl-bar-outline)",
      borderRadius: "var(--fl-card-radius) var(--fl-card-radius) 0 0",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 16px/24px var(--fl-font-plain)",
      letterSpacing: "0.15px",
      color: "var(--md-sys-color-on-surface)"
    }
  }, title), status, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), actions);
}
Object.assign(__ds_scope, { TableAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TableAppBar.jsx", error: String((e && e.message) || e) }); }

// components/data/TableHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TableHeader({
  columns = [],
  sort,
  onSort,
  selectable = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "row"
  }, rest, {
    style: {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      gap: 16,
      minHeight: 48,
      padding: "0 16px",
      background: "var(--md-sys-color-surface-container-low)",
      borderBottom: "1px solid var(--md-sys-color-outline-variant)",
      font: "500 12px/16px var(--fl-font-plain)",
      letterSpacing: "0.5px",
      color: "var(--md-sys-color-on-surface-variant)",
      textTransform: "uppercase",
      ...style
    }
  }), selectable ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      flex: "none"
    }
  }) : null, columns.map(c => {
    const key = typeof c === "string" ? c : c.key;
    const label = typeof c === "string" ? c : c.label;
    const width = typeof c === "string" ? undefined : c.width;
    const align = typeof c === "string" ? undefined : c.align;
    const sortable = typeof c === "string" ? false : !!c.sortable;
    const active = sort && sort.key === key;
    return /*#__PURE__*/React.createElement("span", {
      key: key,
      role: "columnheader",
      onClick: sortable && onSort ? () => onSort(key) : undefined,
      style: {
        flex: width ? "none" : 1,
        width: width,
        minWidth: 0,
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        justifyContent: align === "right" ? "flex-end" : "flex-start",
        cursor: sortable ? "pointer" : "default",
        color: active ? "var(--md-sys-color-on-surface)" : "inherit"
      }
    }, label, sortable ? /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        width: 16,
        height: 16,
        fill: "currentColor",
        opacity: active ? 1 : 0.4,
        transform: active && sort.dir === "desc" ? "rotate(180deg)" : "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 8l5 6H7z"
    })) : null);
  }));
}
Object.assign(__ds_scope, { TableHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TableHeader.jsx", error: String((e && e.message) || e) }); }

// components/data/TableRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TableRow({
  columns = [],
  row = {},
  selected = false,
  onSelect,
  onClick,
  selectable = false,
  trailing,
  divider = true,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "row",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      gap: 16,
      minHeight: 72,
      padding: "0 16px",
      background: selected ? "var(--md-sys-color-primary-container)" : hover ? "var(--fl-card-bg-hover)" : "transparent",
      borderBottom: divider ? "1px solid var(--md-sys-color-outline-variant)" : "none",
      cursor: onClick ? "pointer" : "default",
      color: "var(--md-sys-color-on-surface)",
      font: "400 14px/20px var(--fl-font-plain)",
      ...style
    }
  }), selectable ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onSelect && onSelect(!selected);
    },
    style: {
      flex: "none",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      boxSizing: "border-box",
      borderRadius: 2,
      border: "2px solid " + (selected ? "var(--md-sys-color-primary)" : "var(--md-sys-color-on-surface-variant)"),
      background: selected ? "var(--md-sys-color-primary)" : "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, selected ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 14,
      height: 14,
      fill: "var(--md-sys-color-on-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  })) : null)) : null, columns.map(c => {
    const key = typeof c === "string" ? c : c.key;
    const width = typeof c === "string" ? undefined : c.width;
    const align = typeof c === "string" ? undefined : c.align;
    const mono = typeof c === "string" ? false : !!c.mono;
    return /*#__PURE__*/React.createElement("span", {
      key: key,
      style: {
        flex: width ? "none" : 1,
        width: width,
        minWidth: 0,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        justifyContent: align === "right" ? "flex-end" : "flex-start",
        fontFamily: mono ? "var(--fl-font-mono)" : "inherit",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, row[key]);
  }), trailing);
}
Object.assign(__ds_scope, { TableRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TableRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  count,
  dot = false,
  max = 99,
  style,
  ...rest
}) {
  if (dot) {
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        width: 6,
        height: 6,
        borderRadius: 3,
        background: "var(--fl-badge-bg)",
        display: "inline-block",
        flex: "none",
        ...style
      }
    }));
  }
  const n = Number(count) || 0;
  const label = n > max ? "999+" : String(n);
  const w = label.length === 1 ? 16 : label.length === 2 ? 22 : "auto";
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      boxSizing: "border-box",
      height: 16,
      minWidth: 16,
      width: w,
      padding: "0 4px",
      borderRadius: 8,
      background: "var(--fl-badge-bg)",
      color: "var(--fl-badge-fg)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      font: "500 11px/16px var(--fl-font-plain)",
      letterSpacing: "0.5px",
      ...style
    }
  }), label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Progress({
  variant = "linear",
  value,
  size = 40,
  thickness = 4,
  label,
  style,
  ...rest
}) {
  const indeterminate = value === undefined || value === null;
  if (variant === "circular") {
    const r = (size - thickness) / 2;
    const c = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      style: {
        display: "inline-flex",
        ...style
      }
    }), /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 " + size + " " + size,
      role: "img",
      "aria-label": label || "Loading",
      style: {
        animation: indeterminate ? "fl-spin 1.4s linear infinite" : "none"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--md-sys-color-surface-container-highest)",
      strokeWidth: thickness
    }), /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--md-sys-color-primary)",
      strokeWidth: thickness,
      strokeLinecap: "round",
      strokeDasharray: c,
      strokeDashoffset: indeterminate ? c * 0.75 : c * (1 - Math.min(1, Math.max(0, value / 100))),
      transform: "rotate(-90 " + size / 2 + " " + size / 2 + ")"
    })), /*#__PURE__*/React.createElement("style", null, "@keyframes fl-spin{to{transform:rotate(360deg)}}"));
  }
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "block",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: 4,
      borderRadius: 2,
      overflow: "hidden",
      background: "var(--md-sys-color-surface-container-highest)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: "100%",
      borderRadius: 2,
      background: "var(--md-sys-color-primary)",
      width: indeterminate ? "40%" : Math.min(100, Math.max(0, value)) + "%",
      transition: "width 300ms var(--md-sys-motion-easing-standard)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 6,
      font: "400 12px/16px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATUS = {
  approved: {
    icon: "check_circle",
    bg: "var(--md-sys-color-success-container)",
    fg: "var(--md-sys-color-on-success-container)",
    base: "var(--md-sys-color-success)",
    on: "var(--md-sys-color-on-success)"
  },
  disbursed: {
    icon: "download",
    bg: "var(--md-sys-color-success)",
    fg: "var(--md-sys-color-on-success)",
    base: "var(--md-sys-color-success)",
    on: "var(--md-sys-color-on-success)"
  },
  pending: {
    icon: "schedule",
    bg: "var(--md-sys-color-warning-container)",
    fg: "var(--md-sys-color-on-warning-container)",
    base: "var(--md-sys-color-warning)",
    on: "var(--md-sys-color-on-warning)"
  },
  important: {
    icon: "priority_high",
    bg: "var(--md-sys-color-important-container)",
    fg: "var(--md-sys-color-on-important-container)",
    base: "var(--md-sys-color-important)",
    on: "var(--md-sys-color-on-important)"
  },
  inprogress: {
    icon: "autorenew",
    bg: "var(--md-sys-color-info-container)",
    fg: "var(--md-sys-color-on-info-container)",
    base: "var(--md-sys-color-info)",
    on: "var(--md-sys-color-on-info)"
  },
  rejected: {
    icon: "cancel",
    bg: "var(--md-sys-color-error-container)",
    fg: "var(--md-sys-color-on-error-container)",
    base: "var(--md-sys-color-error)",
    on: "var(--md-sys-color-on-error)"
  },
  neutral: {
    icon: "info",
    bg: "var(--md-sys-color-surface-container)",
    fg: "var(--md-sys-color-on-surface-variant)",
    base: "var(--md-sys-color-outline)",
    on: "var(--md-sys-color-on-surface)"
  }
};
function StatusChip({
  children,
  status = "neutral",
  variant = "tonal",
  size = "md",
  showIcon = true,
  style,
  ...rest
}) {
  const s = STATUS[status] || STATUS.neutral;
  const solid = variant === "solid";
  const outlined = variant === "outlined";
  const h = size === "sm" ? 24 : 32;
  const glyph = size === "sm" ? 18 : 18;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      boxSizing: "border-box",
      height: h,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: showIcon ? "0 " + (size === "sm" ? 10 : 16) + "px 0 " + (size === "sm" ? 6 : 8) + "px" : "0 " + (size === "sm" ? 10 : 16) + "px",
      borderRadius: 9999,
      background: outlined ? "transparent" : solid ? s.base : s.bg,
      color: outlined ? s.fg : solid ? s.on : s.fg,
      border: "1px solid " + (outlined ? s.base : "transparent"),
      font: (size === "sm" ? "500 12px/16px" : "500 14px/20px") + " var(--fl-font-plain)",
      letterSpacing: size === "sm" ? "0.5px" : "0.1px",
      whiteSpace: "nowrap",
      ...style
    }
  }), showIcon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: glyph,
    color: "currentColor"
  }) : null, children);
}
Object.assign(__ds_scope, { STATUS, StatusChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusChip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Note.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Note({
  children,
  title,
  status = "neutral",
  quiet = false,
  actions,
  onDismiss,
  style,
  ...rest
}) {
  const s = __ds_scope.STATUS[status] || __ds_scope.STATUS.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: 16,
      borderRadius: "var(--md-sys-shape-corner-medium)",
      background: quiet ? "var(--md-sys-color-surface)" : s.bg,
      color: quiet ? "var(--md-sys-color-on-surface)" : s.fg,
      border: quiet ? "1px solid var(--md-sys-color-outline-variant)" : "none",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 24,
    color: quiet ? s.base : "currentColor",
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "500 14px/20px var(--fl-font-plain)",
      letterSpacing: "0.1px"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: title ? "4px 0 0" : 0,
      font: "400 14px/20px var(--fl-font-plain)",
      letterSpacing: "0.25px",
      color: quiet ? "var(--md-sys-color-on-surface-variant)" : "currentColor",
      opacity: quiet ? 1 : 0.92
    }
  }, children), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, actions) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "inherit",
      padding: 0,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 20,
    color: "currentColor"
  })) : null);
}
Object.assign(__ds_scope, { Note });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Note.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Snackbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Snackbar({
  children,
  status = "neutral",
  action,
  actionLabel,
  onDismiss,
  open = true,
  style,
  ...rest
}) {
  if (!open) return null;
  const s = __ds_scope.STATUS[status] || __ds_scope.STATUS.neutral;
  const inverse = status === "neutral";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      boxSizing: "border-box",
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      minHeight: 48,
      padding: "8px 8px 8px 16px",
      maxWidth: 560,
      borderRadius: "var(--md-sys-shape-corner-extra-small)",
      background: inverse ? "var(--md-sys-color-inverse-surface)" : s.bg,
      color: inverse ? "var(--md-sys-color-inverse-on-surface)" : s.fg,
      boxShadow: "var(--md-elevation-3)",
      font: "400 14px/20px var(--fl-font-plain)",
      letterSpacing: "0.25px",
      ...style
    }
  }), !inverse ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 20,
    color: "currentColor"
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, children), actionLabel ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: action,
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: inverse ? "var(--md-sys-color-inverse-primary)" : "currentColor",
      font: "500 14px/20px var(--fl-font-plain)",
      padding: "0 8px",
      height: 32,
      flex: "none"
    }
  }, actionLabel) : null, onDismiss ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "inherit",
      padding: 4,
      flex: "none",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 20,
    color: "currentColor"
  })) : null);
}
Object.assign(__ds_scope, { Snackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  children,
  label,
  title,
  body,
  actionLabel,
  onAction,
  placement = "top",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const rich = !!(title || body);
  const pos = placement === "bottom" ? {
    top: "calc(100% + 8px)"
  } : {
    bottom: "calc(100% + 8px)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest, {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }), children, open ? rich ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      left: 0,
      zIndex: 70,
      width: 280,
      boxSizing: "border-box",
      padding: "12px 16px",
      textAlign: "left",
      background: "var(--md-sys-color-surface-container-low)",
      color: "var(--md-sys-color-on-surface)",
      border: "1px solid var(--md-sys-color-outline-variant)",
      borderRadius: "var(--md-sys-shape-corner-medium)",
      boxShadow: "var(--md-elevation-2)"
    }
  }, title ? /*#__PURE__*/React.createElement("b", {
    style: {
      display: "block",
      font: "500 14px/20px var(--fl-font-plain)"
    }
  }, title) : null, body ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 4,
      font: "400 12px/16px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, body) : null, actionLabel ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      marginTop: 8,
      border: 0,
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      color: "var(--md-sys-color-primary-text)",
      font: "500 14px/20px var(--fl-font-plain)"
    }
  }, actionLabel) : null) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      ...pos,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 70,
      padding: "4px 8px",
      whiteSpace: "nowrap",
      background: "var(--md-sys-color-inverse-surface)",
      color: "var(--md-sys-color-inverse-on-surface)",
      borderRadius: "var(--md-sys-shape-corner-extra-small)",
      font: "500 12px/16px var(--fl-font-plain)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  label,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  const box = disabled ? "rgb(var(--on-surface-rgb) / .38)" : on ? "var(--md-sys-color-primary)" : "var(--md-sys-color-on-surface-variant)";
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "default" : "pointer",
      color: disabled ? "rgb(var(--on-surface-rgb) / .38)" : "var(--md-sys-color-on-surface)",
      font: "400 14px/20px var(--fl-font-plain)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "none",
      boxSizing: "border-box",
      borderRadius: 2,
      border: "2px solid " + box,
      background: on ? box : "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--md-sys-color-on-primary)"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 14,
      height: 14,
      fill: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 11h12v2H6z"
  })) : checked ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 14,
      height: 14,
      fill: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  })) : null), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  children,
  type = "filter",
  selected = false,
  onClick,
  onRemove,
  leadingIcon,
  avatar,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const on = selected && type === "filter";
  const bg = disabled ? "transparent" : on ? "var(--md-sys-color-secondary-container)" : hover ? "var(--md-sys-color-primary-container)" : "transparent";
  const fg = disabled ? "var(--md-sys-color-disabled-content)" : on ? "var(--md-sys-color-on-secondary-container)" : "var(--md-sys-color-on-surface)";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    "aria-pressed": type === "filter" ? selected : undefined,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      boxSizing: "border-box",
      height: 32,
      padding: "0 " + (onRemove ? 8 : 16) + "px 0 " + (leadingIcon || avatar || on ? 8 : 16) + "px",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      borderRadius: 9999,
      border: "1px solid " + (on ? "transparent" : disabled ? "var(--md-sys-color-disabled-outline)" : "var(--md-sys-color-outline-variant)"),
      background: bg,
      color: fg,
      cursor: disabled ? "default" : "pointer",
      whiteSpace: "nowrap",
      font: "500 14px/20px var(--fl-font-plain)",
      letterSpacing: "0.1px",
      ...style
    }
  }), avatar, on ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 18,
      height: 18,
      fill: "currentColor",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  })) : leadingIcon, children, onRemove ? /*#__PURE__*/React.createElement("span", {
    role: "button",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: "inline-flex",
      width: 18,
      height: 18,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 18,
      height: 18,
      fill: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }))) : null);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Dropdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dropdown({
  label,
  options = [],
  value,
  onChange,
  multiple = false,
  disabled = false,
  variant = "filled",
  width = 300,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [hoverIdx, setHoverIdx] = React.useState(-1);
  const outlined = variant === "outlined";
  const vals = multiple ? Array.isArray(value) ? value : [] : [];
  const shown = multiple ? vals.join(", ") : value || "";
  const pick = v => {
    if (!multiple) {
      onChange && onChange(v);
      setOpen(false);
      return;
    }
    onChange && onChange(vals.includes(v) ? vals.filter(x => x !== v) : vals.concat(v));
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: "relative",
      width: width,
      minWidth: width,
      ...style
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(!open),
    style: {
      position: "relative",
      boxSizing: "border-box",
      width: "100%",
      minHeight: 56,
      padding: "0 16px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      textAlign: "left",
      background: outlined ? "transparent" : disabled ? "rgb(var(--on-surface-rgb) / .04)" : "var(--md-sys-color-surface-container-highest)",
      border: outlined ? "1px solid " + (disabled ? "rgb(var(--on-surface-rgb) / .12)" : open ? "var(--md-sys-color-primary)" : "var(--md-sys-color-outline)") : 0,
      borderBottom: outlined ? undefined : (open ? 3 : 1) + "px solid " + (open ? "var(--md-sys-color-primary)" : "var(--md-sys-color-on-surface-variant)"),
      boxShadow: outlined && open ? "inset 0 0 0 1px var(--md-sys-color-primary)" : "none",
      borderRadius: outlined ? "var(--md-sys-shape-corner-extra-small)" : "4px 4px 0 0",
      cursor: disabled ? "default" : "pointer",
      color: disabled ? "var(--md-sys-color-disabled-content)" : "var(--md-sys-color-on-surface)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      paddingTop: !outlined && shown ? 6 : 0
    }
  }, label ? outlined ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: shown || open ? -8 : 16,
      padding: "0 4px",
      background: "var(--md-sys-color-surface)",
      pointerEvents: "none",
      font: shown || open ? "400 12px/16px var(--fl-font-plain)" : "400 16px/24px var(--fl-font-plain)",
      color: open ? "var(--md-sys-color-primary)" : "var(--md-sys-color-on-surface-variant)",
      transition: "top 200ms var(--md-sys-motion-easing-standard)"
    }
  }, label) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: shown || open ? "400 12px/16px var(--fl-font-plain)" : "400 16px/24px var(--fl-font-plain)",
      color: open ? "var(--md-sys-color-primary)" : "var(--md-sys-color-on-surface-variant)"
    }
  }, label) : null, shown ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 16px/24px var(--fl-font-plain)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, shown) : null), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 24,
      height: 24,
      fill: "currentColor",
      flex: "none",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform 150ms"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }))), open ? /*#__PURE__*/React.createElement("ul", {
    style: {
      position: "absolute",
      zIndex: 20,
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      margin: 0,
      listStyle: "none",
      padding: "8px 0",
      maxHeight: 240,
      overflowY: "auto",
      background: "var(--md-sys-color-surface-container-low)",
      borderRadius: "var(--md-sys-shape-corner-extra-small)",
      boxShadow: "var(--md-elevation-2)"
    }
  }, options.map((o, i) => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    const on = multiple ? vals.includes(v) : v === value;
    const hovered = hoverIdx === i;
    return /*#__PURE__*/React.createElement("li", {
      key: v
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => pick(v),
      onMouseEnter: () => setHoverIdx(i),
      onMouseLeave: () => setHoverIdx(-1),
      style: {
        width: "100%",
        minHeight: 48,
        padding: "0 12px",
        border: 0,
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: 12,
        cursor: "pointer",
        background: on && !multiple ? "var(--md-sys-color-secondary-container)" : hovered ? "var(--fl-card-bg-hover)" : "transparent",
        color: "var(--md-sys-color-on-surface)",
        font: "400 16px/24px var(--fl-font-plain)",
        transition: "background-color 100ms var(--md-sys-motion-easing-standard)"
      }
    }, multiple ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        flex: "none",
        borderRadius: 2,
        boxSizing: "border-box",
        border: "2px solid " + (on ? "var(--md-sys-color-primary)" : "var(--md-sys-color-on-surface-variant)"),
        background: on ? "var(--md-sys-color-primary)" : "transparent"
      }
    }) : null, l));
  })) : null);
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/InputField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function InputField({
  label,
  value,
  onChange,
  placeholder = " ",
  supportingText,
  error = false,
  errorText,
  disabled = false,
  variant = "filled",
  leadingIcon,
  trailingIcon,
  type = "text",
  width = 300,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const filled = variant === "filled";
  const floated = focus || value !== undefined && value !== null && String(value).length > 0;
  const accent = error ? "var(--md-sys-color-error)" : "var(--md-sys-color-primary)";
  const idleLine = hover ? "var(--md-sys-color-on-surface)" : "var(--md-sys-color-on-surface-variant)";
  const line = disabled ? "rgb(var(--on-surface-rgb) / .38)" : error ? "var(--md-sys-color-error)" : focus ? accent : idleLine;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: width,
      width: width,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box",
      minHeight: 56,
      padding: leadingIcon ? "0 16px 0 12px" : "0 16px",
      background: disabled ? filled ? "rgb(var(--on-surface-rgb) / .04)" : "transparent" : filled ? hover ? "var(--md-sys-color-surface-container-high)" : "var(--md-sys-color-surface-container-highest)" : "transparent",
      borderRadius: filled ? "4px 4px 0 0" : "var(--md-sys-shape-corner-extra-small)",
      border: filled ? "none" : "1px solid " + line,
      boxShadow: !filled && focus ? "inset 0 0 0 1px " + line : "none",
      pointerEvents: disabled ? "none" : "auto"
    }
  }, leadingIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 16,
      color: "var(--md-sys-color-on-surface-variant)",
      display: "inline-flex"
    }
  }, leadingIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      height: 56,
      border: 0,
      background: "transparent",
      outline: "none",
      padding: label ? "24px 0 8px" : "16px 0",
      color: disabled ? "rgb(var(--on-surface-rgb) / .38)" : "var(--md-sys-color-on-surface)",
      caretColor: accent,
      font: "400 16px/24px var(--fl-font-plain)",
      letterSpacing: "0.5px"
    }
  })), trailingIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 16,
      color: error ? "var(--md-sys-color-error)" : "var(--md-sys-color-on-surface-variant)",
      display: "inline-flex"
    }
  }, trailingIcon) : null, label ? /*#__PURE__*/React.createElement("label", {
    style: {
      position: "absolute",
      pointerEvents: "none",
      left: leadingIcon ? 52 : 16,
      top: floated ? filled ? 8 : -8 : 16,
      padding: !filled && floated ? "0 4px" : 0,
      background: !filled && floated ? "var(--md-sys-color-surface)" : "transparent",
      color: disabled ? "rgb(var(--on-surface-rgb) / .38)" : error ? "var(--md-sys-color-on-error-container)" : focus ? accent : "var(--md-sys-color-on-surface-variant)",
      font: floated ? "400 12px/16px var(--fl-font-plain)" : "400 16px/24px var(--fl-font-plain)",
      letterSpacing: floated ? "0.4px" : "0.5px",
      transition: "top 200ms var(--md-sys-motion-easing-standard), font-size 200ms var(--md-sys-motion-easing-standard)"
    }
  }, label) : null, filled ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: focus ? 3 : 1,
      background: line,
      pointerEvents: "none"
    }
  }) : null), errorText && error || supportingText ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      padding: "0 16px",
      color: error ? "var(--md-sys-color-on-error-container)" : "var(--md-sys-color-on-surface-variant)",
      font: "400 12px/16px var(--fl-font-plain)",
      letterSpacing: "0.4px"
    }
  }, error && errorText ? errorText : supportingText) : null);
}
Object.assign(__ds_scope, { InputField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InputField.jsx", error: String((e && e.message) || e) }); }

// components/forms/OtpField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function OtpField({
  length = 6,
  value = "",
  onChange,
  error = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focusIdx, setFocusIdx] = React.useState(-1);
  const chars = String(value).slice(0, length).split("");
  const set = (i, ch) => {
    const next = chars.slice();
    while (next.length < length) next.push("");
    next[i] = ch.replace(/\D/g, "").slice(-1);
    onChange && onChange(next.join("").trim());
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      gap: 12,
      ...style
    }
  }), Array.from({
    length
  }).map((_, i) => {
    const active = focusIdx === i;
    const border = disabled ? "var(--md-sys-color-disabled-outline)" : error ? "var(--md-sys-color-error)" : active ? "var(--md-sys-color-primary)" : "var(--md-sys-color-outline-variant)";
    return /*#__PURE__*/React.createElement("input", {
      key: i,
      inputMode: "numeric",
      maxLength: 1,
      disabled: disabled,
      value: chars[i] || "",
      onChange: e => set(i, e.target.value),
      onFocus: () => setFocusIdx(i),
      onBlur: () => setFocusIdx(-1),
      style: {
        boxSizing: "border-box",
        width: 56,
        height: 56,
        textAlign: "center",
        borderRadius: "var(--fl-input-radius)",
        border: (active || error ? 2 : 1) + "px solid " + border,
        background: disabled ? "var(--md-sys-color-disabled-container)" : "var(--md-sys-color-surface)",
        color: disabled ? "var(--md-sys-color-disabled-content)" : "var(--md-sys-color-on-surface)",
        font: "500 22px/28px var(--fl-font-plain)",
        outline: "none"
      }
    });
  }));
}
Object.assign(__ds_scope, { OtpField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/OtpField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  value,
  style,
  ...rest
}) {
  const c = disabled ? "rgb(var(--on-surface-rgb) / .38)" : checked ? "var(--md-sys-color-primary)" : "var(--md-sys-color-on-surface-variant)";
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "default" : "pointer",
      color: disabled ? "rgb(var(--on-surface-rgb) / .38)" : "var(--md-sys-color-on-surface)",
      font: "400 14px/20px var(--fl-font-plain)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: "none",
      boxSizing: "border-box",
      borderRadius: "50%",
      border: "2px solid " + c,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: c
    }
  }) : null), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchBar({
  value,
  onChange,
  placeholder = "Search",
  width = 360,
  trailing,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      gap: 12,
      height: 48,
      width: width,
      padding: "0 16px",
      borderRadius: 9999,
      background: "var(--md-sys-color-surface-container-low)",
      border: "1px solid " + (focus ? "var(--md-sys-color-primary)" : "transparent"),
      color: "var(--md-sys-color-on-surface-variant)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 24,
      height: 24,
      fill: "currentColor",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  })), /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      background: "transparent",
      outline: "none",
      color: "var(--md-sys-color-on-surface)",
      font: "400 16px/24px var(--fl-font-plain)"
    }
  }), trailing);
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slider({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  onChange,
  label,
  valueLabel,
  disabled = false,
  style,
  ...rest
}) {
  const pct = max === min ? 0 : (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      minWidth: 200,
      ...style
    }
  }), label || valueLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "500 12px/16px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--fl-font-mono)"
    }
  }, valueLabel)) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      height: 20,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 8,
      left: 0,
      right: 0,
      height: 4,
      borderRadius: 2,
      background: "var(--md-sys-color-surface-container-highest)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 8,
      left: 0,
      width: pct + "%",
      height: 4,
      borderRadius: 2,
      background: disabled ? "var(--md-sys-color-disabled-content)" : "var(--md-sys-color-primary)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: "calc(" + pct + "% - 8px)",
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: disabled ? "var(--md-sys-color-disabled-content)" : "var(--md-sys-color-primary)",
      boxShadow: "var(--md-elevation-1)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      margin: 0,
      opacity: 0,
      cursor: disabled ? "default" : "pointer"
    }
  })));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  icon = false,
  style,
  ...rest
}) {
  const track = disabled ? "var(--md-sys-color-disabled-fill)" : checked ? "var(--md-sys-color-primary)" : "var(--md-sys-color-surface-container-highest)";
  const knob = disabled ? "var(--md-sys-color-disabled-content)" : checked ? "var(--md-sys-color-on-primary)" : "var(--md-sys-color-outline)";
  const control = /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 50,
      height: 28,
      flex: "none",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 9999,
      background: track,
      transition: "background-color 150ms var(--md-sys-motion-easing-standard)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 9999,
      pointerEvents: "none",
      border: checked ? "none" : "1px solid var(--md-sys-color-outline)",
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 4,
      left: checked ? 26 : 4,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: knob,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "left 150ms var(--md-sys-motion-easing-emphasized-decelerate)"
    }
  }, icon && checked ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 14,
      height: 14,
      fill: "var(--md-sys-color-primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  })) : null));
  return /*#__PURE__*/React.createElement("label", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "default" : "pointer",
      color: disabled ? "var(--md-sys-color-disabled-content)" : "var(--md-sys-color-on-surface)",
      font: "400 14px/20px var(--fl-font-plain)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), control, label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomAppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BottomAppBar({
  children,
  fab,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 80,
      padding: "12px 16px 12px 4px",
      background: "var(--md-sys-color-surface)",
      border: "1px solid var(--fl-bar-outline)",
      boxShadow: "var(--fl-bottom-app-bar-shadow)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 0
    }
  }, children), fab);
}
Object.assign(__ds_scope, { BottomAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomAppBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb"
  }, rest, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap",
      font: "400 12px/16px var(--fl-font-plain)",
      letterSpacing: "0.4px",
      color: "var(--md-sys-color-on-surface-variant)",
      ...style
    }
  }), items.map((it, i) => {
    const label = typeof it === "string" ? it : it.label;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label + i
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        color: "var(--md-sys-color-on-surface)",
        fontWeight: 500
      }
    }, label) : /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onNavigate && onNavigate(typeof it === "string" ? it : it.value || label),
      style: {
        border: 0,
        background: "transparent",
        padding: 0,
        cursor: "pointer",
        color: "var(--md-sys-color-primary-text)",
        font: "inherit",
        textDecoration: "none"
      }
    }, label), !last ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        opacity: 0.6
      }
    }, "/") : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Menu({
  items = [],
  onSelect,
  open = true,
  width = 240,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "menu"
  }, rest, {
    style: {
      minWidth: width,
      padding: "8px 0",
      boxSizing: "border-box",
      background: "var(--md-sys-color-surface-container-low)",
      borderRadius: "var(--md-sys-shape-corner-extra-small)",
      boxShadow: "var(--md-elevation-2)",
      ...style
    }
  }), items.map((it, i) => it === "divider" ? /*#__PURE__*/React.createElement("div", {
    key: "d" + i,
    style: {
      height: 1,
      background: "var(--md-sys-color-outline-variant)",
      margin: "8px 0"
    }
  }) : /*#__PURE__*/React.createElement("button", {
    key: it.value || it.label,
    role: "menuitem",
    onClick: () => onSelect && onSelect(it.value || it.label),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      minHeight: 48,
      padding: "0 12px",
      border: 0,
      background: "transparent",
      cursor: "pointer",
      textAlign: "left",
      color: it.destructive ? "var(--md-sys-color-on-error-container)" : "var(--md-sys-color-on-surface)",
      font: "400 14px/20px var(--fl-font-plain)",
      letterSpacing: "0.1px"
    }
  }, it.icon, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, it.label), it.trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, it.trailing) : null)));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavigationBar({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      boxSizing: "border-box",
      display: "flex",
      height: 80,
      alignItems: "center",
      background: "var(--md-sys-color-surface-container)",
      borderTop: "1px solid var(--fl-bar-outline)",
      ...style
    }
  }), items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      "aria-current": on ? "page" : undefined,
      onClick: () => onChange && onChange(it.value),
      style: {
        flex: 1,
        minWidth: 0,
        height: "100%",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        color: on ? "var(--md-sys-color-on-secondary-container)" : "var(--md-sys-color-on-surface-variant)",
        font: "500 12px/16px var(--fl-font-plain)",
        letterSpacing: "0.5px",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 64,
        height: 32,
        borderRadius: 16,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: on ? "var(--md-sys-color-secondary-container)" : "transparent",
        position: "relative"
      }
    }, it.icon, it.badge ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 2,
        right: 14
      }
    }, it.badge) : null), /*#__PURE__*/React.createElement("span", null, it.label));
  }));
}
Object.assign(__ds_scope, { NavigationBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationDrawer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavigationDrawer({
  open = false,
  header,
  groups = [],
  value,
  onChange,
  onClose,
  dark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 40,
      background: "rgb(var(--scrim-rgb) / .32)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity 250ms var(--md-sys-motion-easing-standard)"
    }
  }), /*#__PURE__*/React.createElement("aside", _extends({
    "aria-hidden": !open
  }, rest, {
    style: {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 41,
      width: 300,
      boxSizing: "border-box",
      background: dark ? "var(--md-sys-color-secondary)" : "var(--md-sys-color-surface-container-low)",
      color: dark ? "#FFFFFF" : "var(--md-sys-color-on-surface)",
      borderRadius: "0 16px 16px 0",
      overflowY: "auto",
      padding: "12px 0",
      transform: open ? "none" : "translateX(-100%)",
      transition: "transform 300ms var(--md-sys-motion-easing-emphasized-decelerate)",
      ...style
    }
  }), header ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "4px 12px 12px 16px"
    }
  }, header) : null, groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi
  }, g.label ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 28px 8px",
      font: "500 14px/20px var(--fl-font-plain)",
      color: dark ? "rgb(255 255 255 / .7)" : "var(--md-sys-color-on-surface-variant)"
    }
  }, g.label) : null, (g.items || []).map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      "aria-current": on ? "page" : undefined,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "calc(100% - 24px)",
        margin: "0 12px",
        height: 56,
        padding: "0 16px",
        border: 0,
        cursor: "pointer",
        borderRadius: 9999,
        textAlign: "left",
        background: on ? dark ? "rgb(255 255 255 / .12)" : "var(--md-sys-color-secondary-container)" : "transparent",
        color: on && !dark ? "var(--md-sys-color-on-secondary-container)" : "inherit",
        font: "500 14px/20px var(--fl-font-plain)",
        letterSpacing: "0.1px"
      }
    }, it.icon, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, it.label), it.trailing ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--fl-font-mono)",
        font: "400 12px/16px var(--fl-font-mono)"
      }
    }, it.trailing) : null);
  })))));
}
Object.assign(__ds_scope, { NavigationDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationDrawer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavigationRail({
  items = [],
  value,
  onChange,
  fab,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      boxSizing: "border-box",
      width: 80,
      flex: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      padding: "12px 0",
      background: "var(--md-sys-color-surface)",
      borderRight: "1px solid var(--fl-bar-outline)",
      ...style
    }
  }), fab ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, fab) : null, items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      "aria-current": on ? "page" : undefined,
      onClick: () => onChange && onChange(it.value),
      style: {
        width: 72,
        border: 0,
        background: "transparent",
        cursor: "pointer",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        color: on ? "var(--md-sys-color-on-secondary-container)" : "var(--md-sys-color-on-surface-variant)",
        font: "500 12px/16px var(--fl-font-plain)",
        letterSpacing: "0.5px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 56,
        height: 32,
        borderRadius: 16,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: on ? "var(--md-sys-color-secondary-container)" : "transparent"
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", null, it.label));
  }));
}
Object.assign(__ds_scope, { NavigationRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationRail.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pagination({
  page = 1,
  pageCount = 1,
  rowsPerPage,
  rowsPerPageOptions = [10, 25, 50],
  rangeLabel,
  onPage,
  onRowsPerPage,
  style,
  ...rest
}) {
  const nav = (label, icon, target, disabled) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: () => onPage && onPage(target),
    style: {
      width: 40,
      height: 40,
      border: 0,
      borderRadius: "50%",
      background: "transparent",
      cursor: disabled ? "default" : "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: disabled ? "var(--md-sys-color-disabled-content)" : "var(--md-sys-color-on-surface-variant)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: 20,
      height: 20,
      fill: "currentColor"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: icon
  })));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap",
      font: "400 12px/16px var(--fl-font-plain)",
      letterSpacing: "0.4px",
      color: "var(--md-sys-color-on-surface-variant)",
      ...style
    }
  }), rowsPerPage ? /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, "Rows per page", /*#__PURE__*/React.createElement("select", {
    value: rowsPerPage,
    onChange: e => onRowsPerPage && onRowsPerPage(Number(e.target.value)),
    style: {
      height: 32,
      borderRadius: 4,
      padding: "0 8px",
      font: "inherit",
      border: "1px solid var(--md-sys-color-outline-variant)",
      background: "var(--md-sys-color-surface)",
      color: "var(--md-sys-color-on-surface)"
    }
  }, rowsPerPageOptions.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o)))) : null, rangeLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--fl-font-mono)"
    }
  }, rangeLabel) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, nav("First page", "M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z", 1, page <= 1), nav("Previous page", "M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z", page - 1, page <= 1), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "0 8px",
      fontFamily: "var(--fl-font-mono)"
    }
  }, page, " / ", pageCount), nav("Next page", "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z", page + 1, page >= pageCount), nav("Last page", "M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z", pageCount, page >= pageCount)));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ProfileSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProfileSection({
  name,
  role,
  initials,
  chevron = true,
  onClick,
  size = "md",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const auto = (name || "").split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "4px 8px",
      border: 0,
      borderRadius: 9999,
      cursor: onClick ? "pointer" : "default",
      background: hover && onClick ? "var(--md-sys-color-primary-container)" : "transparent",
      color: "var(--md-sys-color-on-surface)",
      textAlign: "left",
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    initials: initials || auto || "FL",
    size: size
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 16px/24px var(--fl-font-plain)",
      letterSpacing: "0.15px",
      whiteSpace: "nowrap"
    }
  }, name), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/20px var(--fl-font-plain)",
      letterSpacing: "0.1px",
      color: "var(--md-sys-color-on-surface-variant)",
      whiteSpace: "nowrap"
    }
  }, role) : null), chevron ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "expand_more",
    size: 20,
    color: "var(--md-sys-color-on-surface-variant)"
  }) : null);
}
Object.assign(__ds_scope, { ProfileSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ProfileSection.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = "primary",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: "flex",
      gap: 0,
      borderBottom: "1px solid var(--md-sys-color-outline-variant)",
      overflowX: "auto",
      ...style
    }
  }), tabs.map(t => {
    const v = typeof t === "string" ? t : t.value;
    const l = typeof t === "string" ? t : t.label;
    const icon = typeof t === "string" ? null : t.icon;
    const count = typeof t === "string" ? null : t.count;
    const on = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        position: "relative",
        height: 48,
        padding: "0 16px",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        whiteSpace: "nowrap",
        color: on ? "var(--md-sys-color-primary-text)" : "var(--md-sys-color-on-surface-variant)",
        font: "500 14px/20px var(--fl-font-plain)",
        letterSpacing: "0.1px"
      }
    }, icon, l, count !== null && count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.7
      }
    }, count) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: variant === "primary" ? 16 : 0,
        right: variant === "primary" ? 16 : 0,
        bottom: 0,
        height: on ? 3 : 0,
        borderRadius: "3px 3px 0 0",
        background: "var(--md-sys-color-primary-indicator)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopAppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopAppBar({
  title,
  leading,
  trailing,
  size = "small",
  centered = false,
  dark = false,
  style,
  ...rest
}) {
  const h = size === "large" ? 152 : size === "medium" ? 112 : 64;
  const tall = size !== "small";
  return /*#__PURE__*/React.createElement("header", _extends({}, rest, {
    style: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: tall ? "column" : "row",
      alignItems: tall ? "stretch" : "center",
      justifyContent: tall ? "flex-end" : "flex-start",
      gap: tall ? 0 : 4,
      height: h,
      padding: tall ? "0 4px 20px" : "0 4px",
      background: dark ? "var(--md-sys-color-secondary)" : "var(--md-sys-color-surface)",
      color: dark ? "#FFFFFF" : "var(--md-sys-color-on-surface)",
      borderBottom: "1px solid var(--fl-bar-outline)",
      ...style
    }
  }), tall ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      height: 64,
      flex: "none"
    }
  }, leading, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), trailing), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      padding: "0 12px",
      font: (size === "large" ? "400 32px/40px" : "400 28px/36px") + " var(--fl-font-brand)"
    }
  }, title)) : /*#__PURE__*/React.createElement(React.Fragment, null, leading, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: leading ? "0 4px" : "0 12px",
      textAlign: centered ? "center" : "left",
      font: "400 22px/28px var(--fl-font-brand)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), trailing));
}
Object.assign(__ds_scope, { TopAppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopAppBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/credit_ops/ApplicationSheet.jsx
try { (() => {
const sheetDS = window.FlexiLoansDesignSystem_be63d1 || {};
function ApplicationSheet({
  app,
  onClose
}) {
  const {
    Sheet,
    Tabs,
    InputField,
    Radio,
    Checkbox,
    Button,
    StatusChip,
    ListRow,
    Avatar,
    Icon,
    Note,
    Divider
  } = sheetDS;
  const [tab, setTab] = React.useState("summary");
  const [dec, setDec] = React.useState("approve");
  const [notify, setNotify] = React.useState(true);
  return /*#__PURE__*/React.createElement(Sheet, {
    open: !!app,
    title: app ? app.id : "Application",
    onClose: onClose,
    width: 440,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      type: "tertiary",
      onClick: onClose
    }, "Close"), /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "Record decision"))
  }, app ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: app.initials,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 22px/28px var(--fl-font-brand)"
    }
  }, app.who), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/20px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, app.city, " \xB7 ", app.prd, " \xB7 ", app.id))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: app.status
  }, app.statusLabel)), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "summary",
      label: "Summary"
    }, {
      value: "docs",
      label: "Documents",
      count: 3
    }, {
      value: "decision",
      label: "Decision"
    }]
  }), tab === "summary" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement(InputField, {
    label: "Requested amount",
    variant: "outlined",
    value: app.amt,
    width: "100%"
  }), /*#__PURE__*/React.createElement(InputField, {
    label: "GSTIN",
    variant: "outlined",
    value: "27AAECF1234",
    error: true,
    errorText: "GSTIN must be 15 characters",
    width: "100%"
  }), /*#__PURE__*/React.createElement(InputField, {
    label: "Monthly bank credits",
    variant: "outlined",
    value: "\u20B918,40,000",
    supportingText: "6-month average, HDFC current account",
    width: "100%"
  }), /*#__PURE__*/React.createElement(Note, {
    quiet: true,
    status: "inprogress",
    title: "Bureau pulled 19 Aug"
  }, "CIBIL 731 \xB7 no overdue accounts \xB7 2 enquiries in 90 days.")) : null, tab === "docs" ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    divider: true,
    headline: "GST returns \xB7 Q1 FY26",
    supportingText: "Verified 19 Aug",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "check_circle",
      filled: true,
      color: "var(--md-sys-color-success)"
    })
  }), /*#__PURE__*/React.createElement(ListRow, {
    divider: true,
    headline: "Bank statement \xB7 6 months",
    supportingText: "Awaiting upload",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "schedule",
      color: "var(--md-sys-color-warning)"
    })
  }), /*#__PURE__*/React.createElement(ListRow, {
    headline: "Rent agreement",
    supportingText: "Rejected \u2014 expired",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "cancel",
      filled: true,
      color: "var(--md-sys-color-error)"
    })
  })) : null, tab === "decision" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "kpi-lbl"
  }, "Recommended action"), /*#__PURE__*/React.createElement(Radio, {
    name: "dec",
    value: "approve",
    checked: dec === "approve",
    onChange: setDec,
    label: "Approve at \u20B910,00,000"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "dec",
    value: "docs",
    checked: dec === "docs",
    onChange: setDec,
    label: "Request bank statements"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "dec",
    value: "decline",
    checked: dec === "decline",
    onChange: setDec,
    label: "Decline \u2014 policy breach"
  }), /*#__PURE__*/React.createElement(Divider, {
    inset: 0,
    style: {
      margin: "4px 0"
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: notify,
    onChange: setNotify,
    label: "Notify the relationship manager"
  })) : null) : null);
}
Object.assign(window, {
  ApplicationSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credit_ops/ApplicationSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/credit_ops/Charts.jsx
try { (() => {
const chartsDS = window.FlexiLoansDesignSystem_be63d1 || {};
const SERIES = [9, 11, 10, 13, 12, 14, 13, 16, 15, 14, 17, 16, 18, 17, 19, 18, 20, 19, 21, 20, 22, 21, 23, 22, 24, 23, 25, 24, 23, 24];
const STAGES = [{
  label: "Submitted",
  n: 1963,
  fill: "#004A60"
}, {
  label: "Documents verified",
  n: 1420,
  fill: "#006F91"
}, {
  label: "Underwriting",
  n: 892,
  fill: "#0094C1"
}, {
  label: "Approved",
  n: 547,
  fill: "#33C7F4"
}];
function LineChart() {
  const w = 720,
    h = 230,
    pad = 28;
  const max = Math.max(...SERIES),
    min = Math.min(...SERIES);
  const x = i => pad + i * (w - pad * 2) / (SERIES.length - 1);
  const y = v => h - pad - (v - min) / (max - min) * (h - pad * 2);
  const line = SERIES.map((v, i) => (i ? "L" : "M") + x(i).toFixed(1) + " " + y(v).toFixed(1)).join(" ");
  const area = line + " L " + x(SERIES.length - 1).toFixed(1) + " " + (h - pad) + " L " + pad + " " + (h - pad) + " Z";
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 " + w + " " + h,
    style: {
      width: "100%",
      height: 230,
      display: "block"
    },
    role: "img",
    "aria-label": "Daily disbursals in rupees lakh over the last 30 days, rising from about 9 to about 24"
  }, [0, 0.25, 0.5, 0.75, 1].map(t => /*#__PURE__*/React.createElement("line", {
    key: t,
    x1: pad,
    x2: w - pad,
    y1: pad + t * (h - pad * 2),
    y2: pad + t * (h - pad * 2),
    stroke: "var(--md-sys-color-outline-variant)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "var(--md-sys-color-primary-container)",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "var(--md-sys-color-primary-indicator)",
    strokeWidth: "2.5",
    strokeLinejoin: "round"
  }), SERIES.map((v, i) => i % 6 === 0 || i === SERIES.length - 1 ? /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(v),
    r: "3.5",
    fill: "var(--md-sys-color-surface)",
    stroke: "var(--md-sys-color-primary-indicator)",
    strokeWidth: "2"
  }) : null), /*#__PURE__*/React.createElement("text", {
    x: pad,
    y: h - 8,
    fill: "var(--md-sys-color-on-surface-variant)",
    style: {
      font: "400 11px var(--fl-font-mono)"
    }
  }, "27 Jul"), /*#__PURE__*/React.createElement("text", {
    x: w - pad,
    y: h - 8,
    textAnchor: "end",
    fill: "var(--md-sys-color-on-surface-variant)",
    style: {
      font: "400 11px var(--fl-font-mono)"
    }
  }, "25 Aug"));
}
function Funnel() {
  const max = STAGES[0].n;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "6px 0"
    }
  }, STAGES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "400 12px/16px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--fl-font-mono)"
    }
  }, s.n.toLocaleString("en-IN"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      borderRadius: 4,
      background: "var(--md-sys-color-surface-container)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: (s.n / max * 100).toFixed(1) + "%",
      height: "100%",
      borderRadius: 4,
      background: s.fill
    }
  })))));
}
function Charts() {
  const {
    Card,
    Tooltip,
    IconButton,
    Icon
  } = chartsDS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.9fr) minmax(0, 1fr)",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "outlined"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "card-t"
  }, "Daily disbursals"), /*#__PURE__*/React.createElement("p", {
    className: "card-s"
  }, "\u20B9 lakh \xB7 last 30 days")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Daily disbursals",
    body: "Value released to borrower accounts, dated on the day the NEFT settles rather than the day the facility is sanctioned.",
    actionLabel: "Open definition"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "About this metric"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  }))))), /*#__PURE__*/React.createElement(LineChart, null)), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined"
  }, /*#__PURE__*/React.createElement("p", {
    className: "card-t"
  }, "Pipeline by stage"), /*#__PURE__*/React.createElement("p", {
    className: "card-s"
  }, "Applications in flight \xB7 ordered stages"), /*#__PURE__*/React.createElement(Funnel, null), /*#__PURE__*/React.createElement("p", {
    className: "kpi-f",
    style: {
      marginTop: 8
    }
  }, "One hue, monotone lightness \u2014 a hue per stage would fail, every non-status FL ramp is blue-adjacent.")));
}
Object.assign(window, {
  Charts,
  LineChart,
  Funnel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credit_ops/Charts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/credit_ops/CreditOpsApp.jsx
try { (() => {
const appDS = window.FlexiLoansDesignSystem_be63d1 || {};
function CreditOpsApp() {
  const {
    TopAppBar,
    NavigationRail,
    NavigationDrawer,
    Breadcrumbs,
    SearchBar,
    IconButton,
    Icon,
    ProfileSection,
    Badge,
    Button,
    SegmentedButtons,
    Fab,
    Tooltip,
    Snackbar,
    Logo
  } = appDS;
  const [drawer, setDrawer] = React.useState(false);
  const [sec, setSec] = React.useState("overview");
  const [range, setRange] = React.useState("30 days");
  const [app, setApp] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(TopAppBar, {
    title: "Lending Operations",
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30
    },
    leading: /*#__PURE__*/React.createElement(IconButton, {
      label: "Open navigation menu",
      onClick: () => setDrawer(true)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "menu"
    })),
    trailing: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchBar, {
      width: 340,
      placeholder: "Search applications, borrowers, GSTIN"
    }), /*#__PURE__*/React.createElement(Tooltip, {
      label: "7 unread alerts"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Notifications, 7 unread"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "notifications"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 8,
        right: 8,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      count: 7
    })))), /*#__PURE__*/React.createElement(Tooltip, {
      label: "Queue updated"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Tasks"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "task_alt"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 10,
        right: 12,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      dot: true
    })))), /*#__PURE__*/React.createElement(ProfileSection, {
      name: "Snehal Gaware",
      role: "Credit Ops",
      onClick: () => {},
      size: "sm"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(NavigationRail, {
    value: sec,
    onChange: setSec,
    style: {
      position: "sticky",
      top: 64,
      height: "calc(100vh - 64px)"
    },
    fab: /*#__PURE__*/React.createElement(Fab, {
      label: "New application",
      size: "md",
      onClick: () => setToast(true)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "add"
    })),
    items: [{
      value: "overview",
      label: "Overview",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "dashboard",
        filled: sec === "overview"
      })
    }, {
      value: "queue",
      label: "Queue",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        filled: sec === "queue"
      })
    }, {
      value: "portfolio",
      label: "Portfolio",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "show_chart",
        filled: sec === "portfolio"
      })
    }, {
      value: "risk",
      label: "Risk",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "shield",
        filled: sec === "risk"
      })
    }, {
      value: "team",
      label: "Team",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "group",
        filled: sec === "team"
      })
    }]
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: "18px 24px 48px"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: ["Home", "Credit Ops", "Lending Operations"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 16,
      flexWrap: "wrap",
      margin: "10px 0 18px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "400 32px/40px var(--fl-font-brand)"
    }
  }, "Today at a glance"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      font: "400 14px/20px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, "Mumbai \xB7 Credit Ops \xB7 updated 2 minutes ago")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SegmentedButtons, {
    options: ["7 days", "30 days", "Quarter"],
    value: range,
    onChange: setRange
  }), /*#__PURE__*/React.createElement(Button, {
    type: "secondary",
    size: 40,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bookmark",
      size: 20
    })
  }, "Saved views"), /*#__PURE__*/React.createElement(Button, {
    type: "secondary",
    size: 40,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "person_add",
      size: 20
    })
  }, "Assign"), /*#__PURE__*/React.createElement(Button, {
    size: 40,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 20
    }),
    onClick: () => setToast(true)
  }, "Start review"))), /*#__PURE__*/React.createElement(KpiRow, null), /*#__PURE__*/React.createElement("div", {
    className: "sec-h"
  }, /*#__PURE__*/React.createElement("h2", null, "Trend and pipeline"), /*#__PURE__*/React.createElement("span", null, "Single series needs no legend")), /*#__PURE__*/React.createElement(Charts, null), /*#__PURE__*/React.createElement("div", {
    className: "sec-h"
  }, /*#__PURE__*/React.createElement("h2", null, "Underwriting queue"), /*#__PURE__*/React.createElement("span", null, "Click a row to open the application")), /*#__PURE__*/React.createElement(QueueSection, {
    onOpen: setApp
  }))), /*#__PURE__*/React.createElement(ApplicationSheet, {
    app: app,
    onClose: () => setApp(null)
  }), /*#__PURE__*/React.createElement(NavigationDrawer, {
    open: drawer,
    onClose: () => setDrawer(false),
    value: "queue",
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Logo, {
      size: "md"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      label: "Close navigation",
      onClick: () => setDrawer(false)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "close"
    }))),
    groups: [{
      label: "Operations",
      items: [{
        value: "overview",
        label: "Overview",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "dashboard"
        })
      }, {
        value: "queue",
        label: "Underwriting queue",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "mail"
        }),
        trailing: "147"
      }, {
        value: "disb",
        label: "Disbursals",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "download"
        }),
        trailing: "31"
      }, {
        value: "portfolio",
        label: "Portfolio",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "show_chart"
        })
      }]
    }, {
      label: "Controls",
      items: [{
        value: "risk",
        label: "Risk policy",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "shield"
        })
      }, {
        value: "settings",
        label: "Settings",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "settings"
        })
      }]
    }]
  }), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Snackbar, {
    actionLabel: "Undo",
    action: () => setToast(false),
    onDismiss: () => setToast(false)
  }, "6 applications queued for review")) : null);
}
Object.assign(window, {
  CreditOpsApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credit_ops/CreditOpsApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/credit_ops/KpiRow.jsx
try { (() => {
const kpiDS = window.FlexiLoansDesignSystem_be63d1 || {};
const KPIS = [{
  lbl: "Disbursed this month",
  v: "₹4.82 Cr",
  d: "12.4% vs last month",
  up: true,
  pct: 78,
  f: "78% of ₹6.2 Cr target"
}, {
  lbl: "Awaiting underwriting",
  v: "147",
  d: "23 older than SLA",
  up: false,
  pct: 84,
  f: "84% within 48h SLA"
}, {
  lbl: "Approval rate",
  v: "61.3%",
  d: "2.1 pts vs last month",
  up: true,
  pct: 61,
  f: "1,204 decided of 1,963"
}, {
  lbl: "Portfolio at risk",
  v: "2.9%",
  d: "0.4 pts improvement",
  up: true,
  pct: 29,
  f: "₹1.41 Cr of ₹48.6 Cr book"
}];
function KpiRow() {
  const {
    Card,
    Progress,
    Icon
  } = kpiDS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: 14
    }
  }, KPIS.map(k => /*#__PURE__*/React.createElement(Card, {
    key: k.lbl,
    variant: "elevated"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kpi-lbl"
  }, k.lbl), /*#__PURE__*/React.createElement("p", {
    className: "kpi-v"
  }, k.v), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      display: "flex",
      alignItems: "center",
      gap: 4,
      font: "400 12px/16px var(--fl-font-plain)",
      color: k.up ? "var(--md-sys-color-on-success-container)" : "var(--md-sys-color-on-important-container)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: k.up ? "arrow_upward" : "arrow_downward",
    size: 18,
    color: "currentColor"
  }), k.d), /*#__PURE__*/React.createElement(Progress, {
    value: k.pct,
    label: k.f
  }))));
}
Object.assign(window, {
  KpiRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credit_ops/KpiRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/credit_ops/QueueSection.jsx
try { (() => {
const queueDS = window.FlexiLoansDesignSystem_be63d1 || {};
const COLS = [{
  key: "who",
  label: "Borrower"
}, {
  key: "prd",
  label: "Product",
  width: 140
}, {
  key: "amt",
  label: "Requested",
  width: 130,
  align: "right",
  mono: true,
  sortable: true
}, {
  key: "stt",
  label: "Status",
  width: 170
}];
const ROWS = [{
  id: "FL-2291",
  who: "Mehta Textiles",
  initials: "MT",
  city: "Andheri East",
  prd: "Working capital",
  amt: "₹12,00,000",
  status: "pending",
  statusLabel: "Pending review"
}, {
  id: "FL-2288",
  who: "Shree Kirana",
  initials: "SK",
  city: "Vile Parle",
  prd: "Term loan",
  amt: "₹4,50,000",
  status: "approved",
  statusLabel: "Approved"
}, {
  id: "FL-2284",
  who: "Ganesh Auto Parts",
  initials: "GA",
  city: "Bhiwandi",
  prd: "Invoice finance",
  amt: "₹27,80,000",
  status: "important",
  statusLabel: "Escalated"
}, {
  id: "FL-2279",
  who: "Nalanda Print House",
  initials: "NP",
  city: "Thane",
  prd: "Line of credit",
  amt: "₹8,40,000",
  status: "inprogress",
  statusLabel: "In progress"
}, {
  id: "FL-2276",
  who: "Anand Dairy",
  initials: "AD",
  city: "Pune",
  prd: "Working capital",
  amt: "₹15,20,000",
  status: "rejected",
  statusLabel: "Rejected"
}, {
  id: "FL-2271",
  who: "Krishna Hardware",
  initials: "KH",
  city: "Nashik",
  prd: "Term loan",
  amt: "₹6,00,000",
  status: "pending",
  statusLabel: "Pending review"
}];
const ACTIVITY = [{
  who: "Priya Nair",
  what: "approved FL-2288 at ₹4,50,000",
  when: "2 min"
}, {
  who: "System",
  what: "pulled bureau for FL-2291",
  when: "6 min"
}, {
  who: "Rohit Sharma",
  what: "escalated FL-2284 to policy",
  when: "18 min"
}, {
  who: "System",
  what: "disbursed ₹8,40,000 to FL-2279",
  when: "41 min"
}];
function FilterCard({
  q,
  setQ,
  owner,
  setOwner,
  amt,
  setAmt,
  filters,
  setFilters,
  auto,
  setAuto
}) {
  const {
    Card,
    InputField,
    Dropdown,
    Slider,
    Chip,
    Switch,
    Divider,
    Avatar,
    Icon
  } = queueDS;
  return /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(InputField, {
    label: "Borrower or GSTIN",
    value: q,
    onChange: setQ,
    supportingText: "Partial match is fine",
    width: 240
  }), /*#__PURE__*/React.createElement(Dropdown, {
    label: "Assigned to",
    options: ["Anyone", "Me", "Rohit Sharma", "Priya Nair"],
    value: owner,
    onChange: setOwner,
    width: 200
  }), /*#__PURE__*/React.createElement(Slider, {
    min: 0,
    max: 5000000,
    step: 100000,
    value: amt,
    onChange: setAmt,
    label: "Minimum ticket size",
    valueLabel: "₹" + amt.toLocaleString("en-IN"),
    style: {
      width: 240,
      paddingTop: 6
    }
  })), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: "16px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, [["pending", "Pending review"], ["inprogress", "In progress"], ["important", "Escalated"]].map(([k, l]) => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    selected: !!filters[k],
    onClick: () => setFilters({
      ...filters,
      [k]: !filters[k]
    })
  }, l)), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(Chip, {
    type: "assist",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "schedule",
      size: 18
    })
  }, "Breaching SLA (23)"), /*#__PURE__*/React.createElement(Chip, {
    type: "input",
    onRemove: () => {}
  }, "Region: West"), /*#__PURE__*/React.createElement(Chip, {
    type: "input",
    avatar: /*#__PURE__*/React.createElement(Avatar, {
      initials: "PN",
      size: "xs"
    }),
    onRemove: () => {}
  }, "Priya Nair"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: auto,
    onChange: setAuto,
    label: "Auto-refresh"
  }))));
}
function QueueSection({
  onOpen
}) {
  const {
    Card,
    Tabs,
    TableAppBar,
    TableHeader,
    TableRow,
    Pagination,
    StatusChip,
    Avatar,
    IconButton,
    Icon,
    Button,
    Menu,
    Progress,
    ListRow,
    Divider
  } = queueDS;
  const [q, setQ] = React.useState("");
  const [owner, setOwner] = React.useState("Me");
  const [amt, setAmt] = React.useState(500000);
  const [filters, setFilters] = React.useState({
    pending: true
  });
  const [auto, setAuto] = React.useState(true);
  const [tab, setTab] = React.useState("all");
  const [sel, setSel] = React.useState({});
  const [dense, setDense] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [sort, setSort] = React.useState({
    key: "amt",
    dir: "desc"
  });
  const active = Object.keys(filters).filter(k => filters[k]);
  let rows = ROWS.filter(r => active.length ? active.indexOf(r.status) > -1 : true);
  if (q) rows = rows.filter(r => r.who.toLowerCase().indexOf(q.toLowerCase()) > -1);
  if (tab === "esc") rows = rows.filter(r => r.status === "important");
  if (tab === "ret") rows = rows.filter(r => r.status === "rejected");
  const selCount = Object.keys(sel).filter(k => sel[k]).length;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 2.1fr) minmax(0, 1fr)",
      gap: 14,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FilterCard, {
    q,
    setQ,
    owner,
    setOwner,
    amt,
    setAmt,
    filters,
    setFilters,
    auto,
    setAuto
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: 0
  }, /*#__PURE__*/React.createElement(TableAppBar, {
    title: "Underwriting queue",
    status: /*#__PURE__*/React.createElement(StatusChip, {
      status: "inprogress",
      size: "sm"
    }, "Live"),
    actions: /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Download queue"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download"
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Row density",
      onClick: () => setMenu(!menu),
      selected: menu
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more_vert"
    })), menu ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 46,
        right: 0,
        zIndex: 30
      }
    }, /*#__PURE__*/React.createElement(Menu, {
      items: [{
        value: "comfortable",
        label: "Comfortable rows",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: dense ? "check_box_outline_blank" : "check",
          size: 20
        })
      }, {
        value: "compact",
        label: "Compact rows",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: dense ? "check" : "check_box_outline_blank",
          size: 20
        })
      }, "divider", {
        value: "export",
        label: "Export queue",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "download",
          size: 20
        })
      }],
      onSelect: v => {
        if (v === "comfortable") setDense(false);
        if (v === "compact") setDense(true);
        setMenu(false);
      }
    })) : null)
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    style: {
      padding: "0 8px"
    },
    tabs: [{
      value: "all",
      label: "All",
      count: 147
    }, {
      value: "mine",
      label: "Mine",
      count: 38
    }, {
      value: "esc",
      label: "Escalated",
      count: 9
    }, {
      value: "ret",
      label: "Returned",
      count: 4
    }]
  }), /*#__PURE__*/React.createElement(TableHeader, {
    columns: COLS,
    selectable: true,
    sort: sort,
    onSort: k => setSort({
      key: k,
      dir: sort.dir === "asc" ? "desc" : "asc"
    })
  }), rows.map((r, i) => /*#__PURE__*/React.createElement(TableRow, {
    key: r.id,
    columns: COLS,
    selectable: true,
    selected: !!sel[r.id],
    divider: i < rows.length - 1,
    style: {
      minHeight: dense ? 56 : 72
    },
    onSelect: v => setSel({
      ...sel,
      [r.id]: v
    }),
    onClick: () => onOpen(r),
    trailing: /*#__PURE__*/React.createElement(IconButton, {
      label: "Actions for " + r.id
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more_vert"
    })),
    row: {
      who: /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        initials: r.initials,
        size: "sm"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          flexDirection: "column",
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: "500 14px/20px var(--fl-font-plain)"
        }
      }, r.who), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "400 12px/16px var(--fl-font-plain)",
          color: "var(--md-sys-color-on-surface-variant)"
        }
      }, r.city, " \xB7 ", r.id))),
      prd: r.prd,
      amt: r.amt,
      stt: /*#__PURE__*/React.createElement(StatusChip, {
        status: r.status,
        variant: "outlined",
        size: "sm"
      }, r.statusLabel)
    }
  })), rows.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      textAlign: "center",
      font: "400 14px/20px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, "No applications match these filters.") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      padding: "10px 16px",
      borderTop: "1px solid var(--md-sys-color-outline-variant)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/16px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, selCount ? selCount + " selected" : "No rows selected"), /*#__PURE__*/React.createElement(Button, {
    size: 32,
    type: "tertiary",
    disabled: !selCount
  }, "Assign selected"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: 1,
    pageCount: 25,
    rowsPerPage: 25,
    rangeLabel: "Rows 1–" + rows.length + " of 147",
    onPage: () => {},
    onRowsPerPage: () => {}
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "card-t"
  }, "Live activity"), /*#__PURE__*/React.createElement("p", {
    className: "card-s"
  }, "Auto-refreshing")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    variant: "circular",
    size: 28,
    thickness: 3
  }))), ACTIVITY.map((a, i) => /*#__PURE__*/React.createElement(ListRow, {
    key: i,
    minHeight: 64,
    divider: i < ACTIVITY.length - 1,
    leading: /*#__PURE__*/React.createElement(Avatar, {
      initials: a.who === "System" ? "FL" : a.who.split(" ").map(w => w[0]).join(""),
      size: "sm"
    }),
    headline: a.who,
    supportingText: a.what,
    trailingText: a.when
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined"
  }, /*#__PURE__*/React.createElement("p", {
    className: "card-t"
  }, "Status reference"), /*#__PURE__*/React.createElement("p", {
    className: "card-s"
  }, "Every state carries an icon and a label"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: "approved"
  }, "Approved"), /*#__PURE__*/React.createElement(StatusChip, {
    status: "disbursed",
    variant: "solid"
  }, "Disbursed"), /*#__PURE__*/React.createElement(StatusChip, {
    status: "pending"
  }, "Pending review"), /*#__PURE__*/React.createElement(StatusChip, {
    status: "important"
  }, "Escalated"), /*#__PURE__*/React.createElement(StatusChip, {
    status: "inprogress"
  }, "In progress"), /*#__PURE__*/React.createElement(StatusChip, {
    status: "rejected"
  }, "Rejected")), /*#__PURE__*/React.createElement("p", {
    className: "kpi-f",
    style: {
      marginTop: 12
    }
  }, "Colour is never the only signal \u2014 two of the five FlexiLoans status hues are indistinguishable under protanopia."))));
}
Object.assign(window, {
  QueueSection,
  FilterCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/credit_ops/QueueSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field_app/FieldApp.jsx
try { (() => {
const fieldDS = window.FlexiLoansDesignSystem_be63d1 || {};
function FieldApp() {
  const {
    TopAppBar,
    NavigationBar,
    IconButton,
    Icon,
    Badge,
    Snackbar,
    ProfileSection,
    Card,
    ListRow,
    Divider,
    Switch
  } = fieldDS;
  const [signedIn, setSignedIn] = React.useState(false);
  const [tab, setTab] = React.useState("visits");
  const [visit, setVisit] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  const title = visit ? "Visit" : tab === "visits" ? "Visits" : tab === "home" ? "Today" : tab === "inbox" ? "Inbox" : "Me";
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, !signedIn ? /*#__PURE__*/React.createElement(SignInScreen, {
    onDone: () => setSignedIn(true)
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TopAppBar, {
    title: title,
    leading: visit ? /*#__PURE__*/React.createElement(IconButton, {
      label: "Back",
      onClick: () => setVisit(null)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_back"
    })) : /*#__PURE__*/React.createElement(IconButton, {
      label: "Menu"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "menu"
    })),
    trailing: visit ? /*#__PURE__*/React.createElement(IconButton, {
      label: "More"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more_vert"
    })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      label: "Filter"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "filter_list"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Alerts"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "notifications"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 8,
        right: 8,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      count: 2
    }))))
  }), visit ? /*#__PURE__*/React.createElement(VisitDetailScreen, {
    visit: visit,
    onBack: () => setVisit(null),
    onLogged: () => {
      setVisit(null);
      setToast(true);
    }
  }) : tab === "inbox" ? /*#__PURE__*/React.createElement(InboxScreen, null) : tab === "me" ? /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(ProfileSection, {
    name: "Snehal Gaware",
    role: "Field \xB7 Mumbai West",
    chevron: false,
    size: "lg"
  })), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ListRow, {
    divider: true,
    headline: "Visits this month",
    trailingText: "128",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "place"
    })
  }), /*#__PURE__*/React.createElement(ListRow, {
    divider: true,
    headline: "Conversion",
    trailingText: "41.2%",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "trending_up"
    })
  }), /*#__PURE__*/React.createElement(ListRow, {
    headline: "Offline mode",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "cloud_off"
    }),
    trailing: /*#__PURE__*/React.createElement(Switch, {
      checked: true,
      onChange: () => {}
    })
  }))) : /*#__PURE__*/React.createElement(VisitsScreen, {
    onOpen: setVisit
  }), !visit ? /*#__PURE__*/React.createElement(NavigationBar, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "home",
      label: "Home",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "home",
        filled: tab === "home"
      })
    }, {
      value: "visits",
      label: "Visits",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "place",
        filled: tab === "visits"
      })
    }, {
      value: "inbox",
      label: "Inbox",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        filled: tab === "inbox"
      }),
      badge: /*#__PURE__*/React.createElement(Badge, {
        count: 2
      })
    }, {
      value: "me",
      label: "Me",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "person",
        filled: tab === "me"
      })
    }]
  }) : null), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      right: 12,
      bottom: 96,
      zIndex: 90
    }
  }, /*#__PURE__*/React.createElement(Snackbar, {
    status: "approved",
    onDismiss: () => setToast(false),
    style: {
      width: "100%"
    }
  }, "Visit logged and synced")) : null);
}
Object.assign(window, {
  FieldApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field_app/FieldApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field_app/InboxScreen.jsx
try { (() => {
const inboxDS = window.FlexiLoansDesignSystem_be63d1 || {};
const MSGS = [{
  who: "Priya Nair",
  what: "Approved FL-2288 at ₹4,50,000",
  when: "2 min",
  unread: true
}, {
  who: "Credit Ops",
  what: "FL-2284 escalated to policy — call the borrower",
  when: "18 min",
  unread: true
}, {
  who: "System",
  what: "₹8,40,000 disbursed to FL-2279",
  when: "41 min",
  unread: false
}, {
  who: "Rohit Sharma",
  what: "Can you cover Thane tomorrow?",
  when: "2 h",
  unread: false
}];
function InboxScreen() {
  const {
    Card,
    ListRow,
    Avatar,
    Badge,
    Icon,
    Tabs
  } = inboxDS;
  const [tab, setTab] = React.useState("all");
  return /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "all",
      label: "All",
      count: 4
    }, {
      value: "unread",
      label: "Unread",
      count: 2
    }]
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: 0
  }, MSGS.filter(m => tab === "all" || m.unread).map((m, i, arr) => /*#__PURE__*/React.createElement(ListRow, {
    key: m.who + i,
    minHeight: 72,
    divider: i < arr.length - 1,
    onClick: () => {},
    leading: /*#__PURE__*/React.createElement(Avatar, {
      initials: m.who === "System" || m.who === "Credit Ops" ? "FL" : m.who.split(" ").map(w => w[0]).join(""),
      size: "md"
    }),
    headline: m.who,
    supportingText: m.what,
    trailing: m.unread ? /*#__PURE__*/React.createElement(Badge, {
      dot: true
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "chevron_right",
      size: 20,
      color: "var(--md-sys-color-on-surface-variant)"
    }),
    trailingText: m.when
  }))));
}
Object.assign(window, {
  InboxScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field_app/InboxScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field_app/SignInScreen.jsx
try { (() => {
const signInDS = window.FlexiLoansDesignSystem_be63d1 || {};
function SignInScreen({
  onDone
}) {
  const {
    Logo,
    InputField,
    OtpField,
    Button,
    Note,
    Icon
  } = signInDS;
  const [step, setStep] = React.useState("phone");
  const [phone, setPhone] = React.useState("98200 41127");
  const [otp, setOtp] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    className: "body",
    style: {
      justifyContent: "center",
      gap: 20,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "xl",
    tagline: true,
    orientation: "vertical",
    style: {
      alignSelf: "center",
      marginBottom: 8
    }
  }), step === "phone" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "h1"
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      marginTop: 6
    }
  }, "We will text a six-digit code to your registered number.")), /*#__PURE__*/React.createElement(InputField, {
    label: "Mobile number",
    value: phone,
    onChange: setPhone,
    width: "100%",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "smartphone"
    }),
    supportingText: "The number on your FlexiLoans field ID"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: "100%"
    },
    onClick: () => setStep("otp")
  }, "Send code")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "h1"
  }, "Enter the code"), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      marginTop: 6
    }
  }, "Sent to +91 ", phone, ". It expires in 10 minutes.")), /*#__PURE__*/React.createElement(OtpField, {
    length: 6,
    value: otp,
    onChange: setOtp,
    style: {
      gap: 8
    }
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      width: "100%"
    },
    onClick: onDone
  }, "Verify"), /*#__PURE__*/React.createElement(Button, {
    type: "tertiary",
    style: {
      width: "100%"
    },
    onClick: () => setStep("phone")
  }, "Change number"), /*#__PURE__*/React.createElement(Note, {
    quiet: true,
    status: "neutral"
  }, "Codes are single-use. Ask your branch lead if it does not arrive.")));
}
Object.assign(window, {
  SignInScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field_app/SignInScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field_app/VisitDetailScreen.jsx
try { (() => {
const detailDS = window.FlexiLoansDesignSystem_be63d1 || {};
function VisitDetailScreen({
  visit,
  onBack,
  onLogged
}) {
  const {
    Card,
    Tabs,
    ListRow,
    StatusChip,
    Avatar,
    Icon,
    InputField,
    Checkbox,
    BottomAppBar,
    IconButton,
    Fab,
    Note,
    Divider
  } = detailDS;
  const [tab, setTab] = React.useState("visit");
  const [note, setNote] = React.useState("");
  const [collected, setCollected] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "body",
    style: {
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: visit.initials,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "400 22px/28px var(--fl-font-brand)"
    }
  }, visit.who), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, visit.where, " \xB7 ", visit.at))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: visit.status,
    size: "sm"
  }, visit.label), /*#__PURE__*/React.createElement(StatusChip, {
    status: "neutral",
    size: "sm",
    showIcon: false
  }, visit.amt, " requested")), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "visit",
      label: "Visit"
    }, {
      value: "docs",
      label: "Documents",
      count: 3
    }]
  }), tab === "visit" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    variant: "outlined"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lbl"
  }, "Log the visit"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(InputField, {
    label: "What did you see?",
    value: note,
    onChange: setNote,
    width: "100%",
    supportingText: "Stock levels, footfall, anything the underwriter should know"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: collected,
    onChange: setCollected,
    label: "Collected the bank statements"
  }))), /*#__PURE__*/React.createElement(Note, {
    quiet: true,
    status: "inprogress",
    title: "Last visit 12 Jun"
  }, "Owner asked about a top-up on the existing line.")) : /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: 0
  }, /*#__PURE__*/React.createElement(ListRow, {
    divider: true,
    headline: "GST returns \xB7 Q1 FY26",
    supportingText: "Verified 19 Aug",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "check_circle",
      filled: true,
      color: "var(--md-sys-color-success)"
    })
  }), /*#__PURE__*/React.createElement(ListRow, {
    divider: true,
    headline: "Bank statement \xB7 6 months",
    supportingText: "Awaiting upload",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "schedule",
      color: "var(--md-sys-color-warning)"
    }),
    trailing: /*#__PURE__*/React.createElement(IconButton, {
      label: "Upload"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "photo_camera"
    }))
  }), /*#__PURE__*/React.createElement(ListRow, {
    headline: "Shop photo",
    supportingText: "Take one on site",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "image",
      color: "var(--md-sys-color-on-surface-variant)"
    }),
    trailing: /*#__PURE__*/React.createElement(IconButton, {
      label: "Take photo"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "photo_camera"
    }))
  }))), /*#__PURE__*/React.createElement(BottomAppBar, {
    fab: /*#__PURE__*/React.createElement(Fab, {
      label: "Log the visit",
      size: "md",
      onClick: onLogged
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check"
    }))
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Check in"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "place"
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Attach"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "attach_file"
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Call"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "call"
  }))));
}
Object.assign(window, {
  VisitDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field_app/VisitDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field_app/VisitsScreen.jsx
try { (() => {
const visitsDS = window.FlexiLoansDesignSystem_be63d1 || {};
const VISITS = [{
  id: "v1",
  who: "Mehta Textiles",
  initials: "MT",
  where: "Andheri East",
  at: "11:30",
  status: "approved",
  label: "Done",
  amt: "₹12,00,000"
}, {
  id: "v2",
  who: "Shree Kirana",
  initials: "SK",
  where: "Vile Parle",
  at: "14:00",
  status: "pending",
  label: "Next",
  amt: "₹4,50,000"
}, {
  id: "v3",
  who: "Ganesh Auto Parts",
  initials: "GA",
  where: "Bhiwandi",
  at: "16:15",
  status: "inprogress",
  label: "Scheduled",
  amt: "₹27,80,000"
}, {
  id: "v4",
  who: "Anand Dairy",
  initials: "AD",
  where: "Pune Rd",
  at: "18:00",
  status: "important",
  label: "Docs due",
  amt: "₹15,20,000"
}];
function VisitsScreen({
  onOpen
}) {
  const {
    Card,
    Progress,
    ListRow,
    Avatar,
    StatusChip,
    Chip,
    Note,
    Button,
    Icon
  } = visitsDS;
  const [filter, setFilter] = React.useState("all");
  const shown = filter === "all" ? VISITS : VISITS.filter(v => v.status !== "approved");
  return /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "filled",
    style: {
      background: "var(--md-sys-color-surface-container-low)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "lbl"
  }, "Today's visits"), /*#__PURE__*/React.createElement("p", {
    className: "big"
  }, "6 of 9"), /*#__PURE__*/React.createElement(Progress, {
    value: 66,
    label: "Three left, all within 6 km"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    selected: filter === "all",
    onClick: () => setFilter("all")
  }, "All"), /*#__PURE__*/React.createElement(Chip, {
    selected: filter === "open",
    onClick: () => setFilter("open")
  }, "Still open"), /*#__PURE__*/React.createElement(Chip, {
    type: "assist",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "near_me",
      size: 18
    })
  }, "Nearest first")), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: 0
  }, shown.map((v, i) => /*#__PURE__*/React.createElement(ListRow, {
    key: v.id,
    minHeight: 72,
    divider: i < shown.length - 1,
    onClick: () => onOpen(v),
    leading: /*#__PURE__*/React.createElement(Avatar, {
      initials: v.initials,
      size: "md"
    }),
    headline: v.who,
    supportingText: v.where + " · " + v.at,
    trailing: /*#__PURE__*/React.createElement(StatusChip, {
      status: v.status,
      size: "sm"
    }, v.label)
  }))), /*#__PURE__*/React.createElement(Note, {
    status: "pending",
    title: "Two documents outstanding",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: 32,
      type: "tertiary"
    }, "Chase on WhatsApp")
  }, "Anand Dairy has not uploaded bank statements. Collect them on site if you can."));
}
Object.assign(window, {
  VisitsScreen,
  VISITS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field_app/VisitsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/supply_chain/InvoiceBook.jsx
try { (() => {
const bookDS = window.FlexiLoansDesignSystem_be63d1 || {};
const COLS = [{
  key: "who",
  label: "Counterparty"
}, {
  key: "inv",
  label: "Invoice",
  width: 120,
  mono: true
}, {
  key: "due",
  label: "Due",
  width: 92,
  mono: true
}, {
  key: "amt",
  label: "Value",
  width: 120,
  align: "right",
  mono: true,
  sortable: true
}, {
  key: "stt",
  label: "Status",
  width: 170
}];
const INVOICES = [{
  id: 1,
  inv: "INV-88214",
  who: "Deshmukh Traders",
  initials: "DT",
  city: "Nagpur",
  role: "Dealer",
  amt: "₹18,40,000",
  due: "14 Sep",
  tenor: "60 day",
  anchor: "Bharat Agro Industries",
  status: "pending",
  statusLabel: "Anchor approval"
}, {
  id: 2,
  inv: "INV-88207",
  who: "Raichur Agri Supply",
  initials: "RA",
  city: "Raichur",
  role: "Dealer",
  amt: "₹6,25,000",
  due: "02 Sep",
  tenor: "45 day",
  anchor: "Bharat Agro Industries",
  status: "approved",
  statusLabel: "Approved"
}, {
  id: 3,
  inv: "INV-88198",
  who: "Vaishnavi Seeds",
  initials: "VS",
  city: "Hubli",
  role: "Vendor",
  amt: "₹31,80,000",
  due: "28 Aug",
  tenor: "30 day",
  anchor: "Bharat Agro Industries",
  status: "disbursed",
  statusLabel: "Funded"
}, {
  id: 4,
  inv: "INV-88186",
  who: "Kalyan Farm Equip",
  initials: "KF",
  city: "Solapur",
  role: "Dealer",
  amt: "₹9,60,000",
  due: "22 Aug",
  tenor: "60 day",
  anchor: "Bharat Agro Industries",
  status: "important",
  statusLabel: "Overdue 3 days"
}, {
  id: 5,
  inv: "INV-88175",
  who: "Sahyadri Logistics",
  initials: "SL",
  city: "Pune",
  role: "Vendor",
  amt: "₹4,15,000",
  due: "18 Sep",
  tenor: "90 day",
  anchor: "Bharat Agro Industries",
  status: "inprogress",
  statusLabel: "In funding"
}, {
  id: 6,
  inv: "INV-88162",
  who: "Godavari Chem",
  initials: "GC",
  city: "Aurangabad",
  role: "Vendor",
  amt: "₹12,90,000",
  due: "09 Sep",
  tenor: "45 day",
  anchor: "Bharat Agro Industries",
  status: "rejected",
  statusLabel: "Declined"
}];
const SETTLEMENTS = [{
  who: "Bharat Agro Industries",
  what: "settled ₹4.20 Cr against 31 invoices",
  when: "2 min"
}, {
  who: "System",
  what: "released ₹4.20 Cr of headroom",
  when: "2 min"
}, {
  who: "Deshmukh Traders",
  what: "raised INV-88214 for ₹18,40,000",
  when: "26 min"
}, {
  who: "Priya Nair",
  what: "funded INV-88198 at 90% advance",
  when: "1 h"
}];
const TOP = [{
  who: "Vaishnavi Seeds",
  initials: "VS",
  drawn: "₹2.84 Cr",
  pct: 88
}, {
  who: "Deshmukh Traders",
  initials: "DT",
  drawn: "₹1.96 Cr",
  pct: 64
}, {
  who: "Godavari Chem",
  initials: "GC",
  drawn: "₹1.42 Cr",
  pct: 47
}, {
  who: "Kalyan Farm Equip",
  initials: "KF",
  drawn: "₹0.88 Cr",
  pct: 31
}];
function BookFilters({
  q,
  setQ,
  role,
  setRole,
  amt,
  setAmt,
  filters,
  setFilters,
  auto,
  setAuto
}) {
  const {
    Card,
    InputField,
    Dropdown,
    Slider,
    Chip,
    Switch,
    Divider,
    Avatar,
    Icon
  } = bookDS;
  return /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(InputField, {
    label: "Counterparty or invoice no.",
    variant: "outlined",
    value: q,
    onChange: setQ,
    supportingText: "Partial match is fine",
    width: 250
  }), /*#__PURE__*/React.createElement(Dropdown, {
    label: "Counterparty type",
    variant: "outlined",
    options: ["All", "Dealer", "Vendor"],
    value: role,
    onChange: setRole,
    width: 200
  }), /*#__PURE__*/React.createElement(Slider, {
    min: 0,
    max: 4000000,
    step: 100000,
    value: amt,
    onChange: setAmt,
    label: "Minimum invoice value",
    valueLabel: "₹" + amt.toLocaleString("en-IN"),
    style: {
      width: 230,
      paddingTop: 6
    }
  })), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: "16px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, [["pending", "Anchor approval"], ["inprogress", "In funding"], ["important", "Overdue"]].map(([k, l]) => /*#__PURE__*/React.createElement(Chip, {
    key: k,
    selected: !!filters[k],
    onClick: () => setFilters({
      ...filters,
      [k]: !filters[k]
    })
  }, l)), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(Chip, {
    type: "assist",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "schedule",
      size: 18
    })
  }, "Due inside 7 days (14)"), /*#__PURE__*/React.createElement(Chip, {
    type: "input",
    onRemove: () => {}
  }, "Programme: Agri West"), /*#__PURE__*/React.createElement(Chip, {
    type: "input",
    avatar: /*#__PURE__*/React.createElement(Avatar, {
      initials: "PN",
      size: "xs"
    }),
    onRemove: () => {}
  }, "Priya Nair"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: auto,
    onChange: setAuto,
    label: "Auto-refresh"
  }))));
}
function InvoiceBook({
  onOpen
}) {
  const {
    Card,
    Tabs,
    TableAppBar,
    TableHeader,
    TableRow,
    Pagination,
    StatusChip,
    Avatar,
    IconButton,
    Icon,
    Button,
    Menu,
    Progress,
    ListRow,
    Note
  } = bookDS;
  const [q, setQ] = React.useState("");
  const [role, setRole] = React.useState("All");
  const [amt, setAmt] = React.useState(0);
  const [filters, setFilters] = React.useState({});
  const [auto, setAuto] = React.useState(true);
  const [tab, setTab] = React.useState("all");
  const [sel, setSel] = React.useState({});
  const [dense, setDense] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [sort, setSort] = React.useState({
    key: "amt",
    dir: "desc"
  });
  const active = Object.keys(filters).filter(k => filters[k]);
  let rows = INVOICES.filter(r => active.length ? active.indexOf(r.status) > -1 : true);
  if (role !== "All") rows = rows.filter(r => r.role === role);
  if (q) rows = rows.filter(r => (r.who + " " + r.inv).toLowerCase().indexOf(q.toLowerCase()) > -1);
  if (tab === "due") rows = rows.filter(r => r.status === "pending" || r.status === "inprogress");
  if (tab === "over") rows = rows.filter(r => r.status === "important");
  const selCount = Object.keys(sel).filter(k => sel[k]).length;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 2.1fr) minmax(0, 1fr)",
      gap: 14,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BookFilters, {
    q,
    setQ,
    role,
    setRole,
    amt,
    setAmt,
    filters,
    setFilters,
    auto,
    setAuto
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: 0
  }, /*#__PURE__*/React.createElement(TableAppBar, {
    title: "Invoice book",
    status: /*#__PURE__*/React.createElement(StatusChip, {
      status: "inprogress",
      size: "sm"
    }, "Live"),
    actions: /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Download invoice book"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download"
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Row density",
      onClick: () => setMenu(!menu),
      selected: menu
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more_vert"
    })), menu ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 46,
        right: 0,
        zIndex: 30
      }
    }, /*#__PURE__*/React.createElement(Menu, {
      items: [{
        value: "comfortable",
        label: "Comfortable rows",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: dense ? "check_box_outline_blank" : "check",
          size: 20
        })
      }, {
        value: "compact",
        label: "Compact rows",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: dense ? "check" : "check_box_outline_blank",
          size: 20
        })
      }, "divider", {
        value: "export",
        label: "Export invoice book",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "download",
          size: 20
        })
      }],
      onSelect: v => {
        if (v === "comfortable") setDense(false);
        if (v === "compact") setDense(true);
        setMenu(false);
      }
    })) : null)
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    style: {
      padding: "0 8px"
    },
    tabs: [{
      value: "all",
      label: "All",
      count: 412
    }, {
      value: "due",
      label: "In flight",
      count: 95
    }, {
      value: "over",
      label: "Overdue",
      count: 7
    }, {
      value: "settled",
      label: "Settled",
      count: 310
    }]
  }), /*#__PURE__*/React.createElement(TableHeader, {
    columns: COLS,
    selectable: true,
    sort: sort,
    onSort: k => setSort({
      key: k,
      dir: sort.dir === "asc" ? "desc" : "asc"
    })
  }), rows.map((r, i) => /*#__PURE__*/React.createElement(TableRow, {
    key: r.id,
    columns: COLS,
    selectable: true,
    selected: !!sel[r.id],
    divider: i < rows.length - 1,
    style: {
      minHeight: dense ? 56 : 72
    },
    onSelect: v => setSel({
      ...sel,
      [r.id]: v
    }),
    onClick: () => onOpen(r),
    trailing: /*#__PURE__*/React.createElement(IconButton, {
      label: "Actions for " + r.inv
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more_vert"
    })),
    row: {
      who: /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        initials: r.initials,
        size: "sm"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          flexDirection: "column",
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: "500 14px/20px var(--fl-font-plain)"
        }
      }, r.who), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "400 12px/16px var(--fl-font-plain)",
          color: "var(--md-sys-color-on-surface-variant)"
        }
      }, r.city, " \xB7 ", r.role))),
      inv: r.inv,
      due: r.due,
      amt: r.amt,
      stt: /*#__PURE__*/React.createElement(StatusChip, {
        status: r.status,
        variant: "outlined",
        size: "sm"
      }, r.statusLabel)
    }
  })), rows.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      textAlign: "center",
      font: "400 14px/20px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, "No invoices match these filters.") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      padding: "10px 16px",
      borderTop: "1px solid var(--md-sys-color-outline-variant)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/16px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, selCount ? selCount + " selected" : "No rows selected"), /*#__PURE__*/React.createElement(Button, {
    size: 32,
    type: "tertiary",
    disabled: !selCount
  }, "Fund selected"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: 1,
    pageCount: 17,
    rowsPerPage: 25,
    rangeLabel: "Rows 1–" + rows.length + " of 412",
    onPage: () => {},
    onRowsPerPage: () => {}
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Note, {
    status: "important",
    title: "\u20B956.9 L overdue past 60 days",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: 32,
      type: "tertiary"
    }, "Open recovery list")
  }, "Seven invoices across four dealers. The anchor has confirmed goods receipt on all seven."), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "card-t"
  }, "Settlement activity"), /*#__PURE__*/React.createElement("p", {
    className: "card-s"
  }, "Auto-refreshing")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    variant: "circular",
    size: 28,
    thickness: 3
  }))), SETTLEMENTS.map((a, i) => /*#__PURE__*/React.createElement(ListRow, {
    key: i,
    minHeight: 64,
    divider: i < SETTLEMENTS.length - 1,
    leading: /*#__PURE__*/React.createElement(Avatar, {
      initials: a.who === "System" ? "FL" : a.who.split(" ").map(w => w[0]).join("").slice(0, 2),
      size: "sm"
    }),
    headline: a.who,
    supportingText: a.what,
    trailingText: a.when
  }))), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined"
  }, /*#__PURE__*/React.createElement("p", {
    className: "card-t"
  }, "Top counterparties by drawn balance"), /*#__PURE__*/React.createElement("p", {
    className: "card-s"
  }, "Share of each dealer's own sub-limit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginTop: 14
    }
  }, TOP.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.who,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: t.initials,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/20px var(--fl-font-plain)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, t.who), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      font: "400 12px/16px var(--fl-font-mono)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, t.drawn)), /*#__PURE__*/React.createElement(Progress, {
    value: t.pct,
    style: {
      marginTop: 4
    }
  }))))))));
}
Object.assign(window, {
  InvoiceBook,
  BookFilters,
  INVOICES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/supply_chain/InvoiceBook.jsx", error: String((e && e.message) || e) }); }

// ui_kits/supply_chain/InvoiceSheet.jsx
try { (() => {
const invSheetDS = window.FlexiLoansDesignSystem_be63d1 || {};
function InvoiceSheet({
  invoice,
  onClose
}) {
  const {
    Sheet,
    Tabs,
    InputField,
    Radio,
    Checkbox,
    Button,
    StatusChip,
    ListRow,
    Avatar,
    Icon,
    Note,
    Divider,
    Slider
  } = invSheetDS;
  const [tab, setTab] = React.useState("terms");
  const [dec, setDec] = React.useState("fund");
  const [notify, setNotify] = React.useState(true);
  const [advance, setAdvance] = React.useState(90);
  return /*#__PURE__*/React.createElement(Sheet, {
    open: !!invoice,
    title: invoice ? invoice.inv : "Invoice",
    onClose: onClose,
    width: 440,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      type: "tertiary",
      onClick: onClose
    }, "Close"), /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "Record decision"))
  }, invoice ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: invoice.initials,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 22px/28px var(--fl-font-brand)"
    }
  }, invoice.who), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/20px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, invoice.city, " \xB7 ", invoice.role, " \xB7 ", invoice.inv))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: invoice.status
  }, invoice.statusLabel), /*#__PURE__*/React.createElement(StatusChip, {
    status: "neutral",
    size: "sm",
    showIcon: false
  }, invoice.amt, " invoiced")), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "terms",
      label: "Terms"
    }, {
      value: "chain",
      label: "Approval",
      count: 3
    }, {
      value: "decision",
      label: "Funding"
    }]
  }), tab === "terms" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement(InputField, {
    label: "Invoice value",
    variant: "outlined",
    value: invoice.amt,
    width: "100%"
  }), /*#__PURE__*/React.createElement(InputField, {
    label: "Anchor",
    variant: "outlined",
    value: invoice.anchor,
    width: "100%",
    supportingText: "Obligor of record \u2014 FlexiLoans collects from the anchor, not the dealer"
  }), /*#__PURE__*/React.createElement(InputField, {
    label: "Due date",
    variant: "outlined",
    value: invoice.due,
    width: "100%",
    supportingText: invoice.tenor + " tenor · anchor terms allow 90 days"
  }), /*#__PURE__*/React.createElement(Note, {
    quiet: true,
    status: "inprogress",
    title: "GST e-invoice matched 21 Aug"
  }, "IRN verified against the anchor's purchase register. No mismatch on value or GSTIN.")) : null, tab === "chain" ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    divider: true,
    headline: "Dealer raised invoice",
    supportingText: "21 Aug, 09:14",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "check_circle",
      filled: true,
      color: "var(--md-sys-color-success)"
    })
  }), /*#__PURE__*/React.createElement(ListRow, {
    divider: true,
    headline: "Goods receipt confirmed",
    supportingText: "21 Aug, 16:40 \xB7 anchor depot",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "check_circle",
      filled: true,
      color: "var(--md-sys-color-success)"
    })
  }), /*#__PURE__*/React.createElement(ListRow, {
    headline: "Anchor payables approval",
    supportingText: "Pending \u2014 2 days in queue",
    leading: /*#__PURE__*/React.createElement(Icon, {
      name: "schedule",
      color: "var(--md-sys-color-warning)"
    }),
    trailing: /*#__PURE__*/React.createElement(Button, {
      size: 32,
      type: "tertiary"
    }, "Chase")
  })) : null, tab === "decision" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "kpi-lbl"
  }, "Recommended action"), /*#__PURE__*/React.createElement(Radio, {
    name: "scf",
    value: "fund",
    checked: dec === "fund",
    onChange: setDec,
    label: "Fund at the programme rate"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "scf",
    value: "hold",
    checked: dec === "hold",
    onChange: setDec,
    label: "Hold for anchor approval"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "scf",
    value: "decline",
    checked: dec === "decline",
    onChange: setDec,
    label: "Decline \u2014 dealer limit breached"
  }), /*#__PURE__*/React.createElement(Slider, {
    min: 70,
    max: 100,
    step: 5,
    value: advance,
    onChange: setAdvance,
    label: "Advance rate",
    valueLabel: advance + "% of invoice value"
  }), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: "4px 0"
    }
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: notify,
    onChange: setNotify,
    label: "Notify the dealer and the anchor programme manager"
  })) : null) : null);
}
Object.assign(window, {
  InvoiceSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/supply_chain/InvoiceSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/supply_chain/LimitCharts.jsx
try { (() => {
const scfChartsDS = window.FlexiLoansDesignSystem_be63d1 || {};
const UTIL = [52, 54, 53, 57, 59, 58, 61, 63, 62, 65, 64, 67, 69, 68, 70, 72, 71, 73, 72, 74, 73, 75, 74, 76, 75, 74, 76, 75, 74, 75];
const AGEING = [{
  label: "Current",
  n: "₹22.41 Cr",
  pct: 71,
  fill: "#004A60"
}, {
  label: "1–30 days",
  n: "₹6.18 Cr",
  pct: 20,
  fill: "#0094C1"
}, {
  label: "31–60 days",
  n: "₹2.48 Cr",
  pct: 8,
  fill: "#33C7F4"
}, {
  label: "60+ days · overdue",
  n: "₹56.9 L",
  pct: 2,
  fill: "#C27A00"
}];
function UtilisationChart() {
  const w = 720,
    h = 230,
    pad = 28;
  const max = Math.max(...UTIL) + 4,
    min = Math.min(...UTIL) - 4;
  const x = i => pad + i * (w - pad * 2) / (UTIL.length - 1);
  const y = v => h - pad - (v - min) / (max - min) * (h - pad * 2);
  const line = UTIL.map((v, i) => (i ? "L" : "M") + x(i).toFixed(1) + " " + y(v).toFixed(1)).join(" ");
  const area = line + " L " + x(UTIL.length - 1).toFixed(1) + " " + (h - pad) + " L " + pad + " " + (h - pad) + " Z";
  const capY = y(80);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 " + w + " " + h,
    style: {
      width: "100%",
      height: 230,
      display: "block"
    },
    role: "img",
    "aria-label": "Limit utilisation over the last 30 days, rising from 52 percent to 75 percent against an 80 percent covenant cap"
  }, [0, 0.25, 0.5, 0.75, 1].map(t => /*#__PURE__*/React.createElement("line", {
    key: t,
    x1: pad,
    x2: w - pad,
    y1: pad + t * (h - pad * 2),
    y2: pad + t * (h - pad * 2),
    stroke: "var(--md-sys-color-outline-variant)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "var(--md-sys-color-primary-container)",
    opacity: "0.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "var(--md-sys-color-primary-indicator)",
    strokeWidth: "2.5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: pad,
    x2: w - pad,
    y1: capY,
    y2: capY,
    stroke: "#C27A00",
    strokeWidth: "1.5",
    strokeDasharray: "5 4"
  }), /*#__PURE__*/React.createElement("text", {
    x: w - pad,
    y: capY - 7,
    textAnchor: "end",
    fill: "#C27A00",
    style: {
      font: "500 11px var(--fl-font-plain)"
    }
  }, "80% covenant cap"), UTIL.map((v, i) => i % 6 === 0 || i === UTIL.length - 1 ? /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x(i),
    cy: y(v),
    r: "3.5",
    fill: "var(--md-sys-color-surface)",
    stroke: "var(--md-sys-color-primary-indicator)",
    strokeWidth: "2"
  }) : null), /*#__PURE__*/React.createElement("text", {
    x: pad,
    y: h - 8,
    fill: "var(--md-sys-color-on-surface-variant)",
    style: {
      font: "400 11px var(--fl-font-mono)"
    }
  }, "27 Jul"), /*#__PURE__*/React.createElement("text", {
    x: w - pad,
    y: h - 8,
    textAnchor: "end",
    fill: "var(--md-sys-color-on-surface-variant)",
    style: {
      font: "400 11px var(--fl-font-mono)"
    }
  }, "25 Aug"));
}
function Ageing() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "6px 0"
    }
  }, AGEING.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "400 12px/16px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, s.label), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, s.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22,
      borderRadius: 4,
      background: "var(--md-sys-color-surface-container)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: s.pct + "%",
      height: "100%",
      borderRadius: 4,
      background: s.fill
    }
  })))));
}
function LimitCharts() {
  const {
    Card,
    Tooltip,
    IconButton,
    Icon
  } = scfChartsDS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.9fr) minmax(0, 1fr)",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "outlined"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "card-t"
  }, "Limit utilisation"), /*#__PURE__*/React.createElement("p", {
    className: "card-s"
  }, "% of sanctioned anchor limit \xB7 last 30 days")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Limit utilisation",
    body: "Drawn balance as a share of the anchor's sanctioned limit. Headroom returns the day the anchor settles, so the line falls on settlement dates rather than on repayment by the dealer.",
    actionLabel: "Open definition"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "About this metric"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info"
  }))))), /*#__PURE__*/React.createElement(UtilisationChart, null)), /*#__PURE__*/React.createElement(Card, {
    variant: "outlined"
  }, /*#__PURE__*/React.createElement("p", {
    className: "card-t"
  }, "Receivable ageing"), /*#__PURE__*/React.createElement("p", {
    className: "card-s"
  }, "Drawn balance by days since funding"), /*#__PURE__*/React.createElement(Ageing, null), /*#__PURE__*/React.createElement("p", {
    className: "kpi-f",
    style: {
      marginTop: 8
    }
  }, "Ordered buckets, one hue stepped through the primary ramp. The overdue bucket is the single exception, in Pending shade-60 for contrast on white.")));
}
Object.assign(window, {
  LimitCharts,
  UtilisationChart,
  Ageing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/supply_chain/LimitCharts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/supply_chain/ProgrammeHeader.jsx
try { (() => {
const scfHeaderDS = window.FlexiLoansDesignSystem_be63d1 || {};
const PROGRAMMES = {
  "Bharat Agro Industries": {
    limit: "₹42.00 Cr",
    drawn: "₹31.64 Cr",
    pct: 75,
    dealers: 218,
    kpis: [{
      lbl: "Funded this month",
      v: "₹9.14 Cr",
      d: "8.2% vs last month",
      up: true,
      pct: 71,
      f: "71% of ₹12.9 Cr plan"
    }, {
      lbl: "Awaiting anchor approval",
      v: "64",
      d: "11 past the 3-day mark",
      up: false,
      pct: 68,
      f: "68% cleared inside 3 days"
    }, {
      lbl: "Average tenor",
      v: "58 days",
      d: "4 days shorter",
      up: true,
      pct: 64,
      f: "Anchor terms allow 90 days"
    }, {
      lbl: "Overdue receivables",
      v: "1.8%",
      d: "0.3 pts improvement",
      up: true,
      pct: 18,
      f: "₹56.9 L of ₹31.64 Cr drawn"
    }]
  },
  "Sundaram Motors": {
    limit: "₹28.00 Cr",
    drawn: "₹16.24 Cr",
    pct: 58,
    dealers: 141,
    kpis: [{
      lbl: "Funded this month",
      v: "₹5.02 Cr",
      d: "3.1% vs last month",
      up: false,
      pct: 56,
      f: "56% of ₹9.0 Cr plan"
    }, {
      lbl: "Awaiting anchor approval",
      v: "31",
      d: "4 past the 3-day mark",
      up: false,
      pct: 79,
      f: "79% cleared inside 3 days"
    }, {
      lbl: "Average tenor",
      v: "45 days",
      d: "2 days shorter",
      up: true,
      pct: 50,
      f: "Anchor terms allow 90 days"
    }, {
      lbl: "Overdue receivables",
      v: "2.4%",
      d: "0.1 pts worse",
      up: false,
      pct: 24,
      f: "₹38.9 L of ₹16.24 Cr drawn"
    }]
  }
};
function ProgrammeHeader({
  anchor
}) {
  const {
    Card,
    Progress,
    Icon,
    StatusChip,
    Divider
  } = scfHeaderDS;
  const p = PROGRAMMES[anchor] || PROGRAMMES["Bharat Agro Industries"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    variant: "outlined",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "kpi-lbl"
  }, "Sanctioned anchor limit"), /*#__PURE__*/React.createElement("p", {
    className: "kpi-v"
  }, p.limit), /*#__PURE__*/React.createElement("p", {
    className: "kpi-f"
  }, p.dealers, " dealers onboarded")), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical",
    style: {
      height: 64
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "card-t"
  }, "Limit utilisation"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      font: "400 14px/20px var(--fl-font-mono)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, p.drawn, " drawn of ", p.limit)), /*#__PURE__*/React.createElement(Progress, {
    value: p.pct,
    label: p.pct + "% utilised · headroom released as the anchor settles"
  })), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical",
    style: {
      height: 64
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(StatusChip, {
    status: "approved"
  }, "Programme live"), /*#__PURE__*/React.createElement(StatusChip, {
    status: "neutral",
    size: "sm",
    showIcon: false
  }, "Reviewed 12 Aug")))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: 14
    }
  }, p.kpis.map(k => /*#__PURE__*/React.createElement(Card, {
    key: k.lbl,
    variant: "elevated"
  }, /*#__PURE__*/React.createElement("p", {
    className: "kpi-lbl"
  }, k.lbl), /*#__PURE__*/React.createElement("p", {
    className: "kpi-v"
  }, k.v), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      display: "flex",
      alignItems: "center",
      gap: 4,
      font: "400 12px/16px var(--fl-font-plain)",
      color: k.up ? "var(--md-sys-color-on-success-container)" : "var(--md-sys-color-on-important-container)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: k.up ? "arrow_upward" : "arrow_downward",
    size: 18,
    color: "currentColor"
  }), k.d), /*#__PURE__*/React.createElement(Progress, {
    value: k.pct,
    label: k.f
  })))));
}
Object.assign(window, {
  ProgrammeHeader,
  PROGRAMMES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/supply_chain/ProgrammeHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/supply_chain/ScfApp.jsx
try { (() => {
const scfAppDS = window.FlexiLoansDesignSystem_be63d1 || {};
function ScfApp() {
  const {
    TopAppBar,
    NavigationRail,
    NavigationDrawer,
    Breadcrumbs,
    SearchBar,
    IconButton,
    Icon,
    ProfileSection,
    Badge,
    Button,
    SegmentedButtons,
    Fab,
    Tooltip,
    Snackbar,
    Logo,
    Dropdown
  } = scfAppDS;
  const [drawer, setDrawer] = React.useState(false);
  const [sec, setSec] = React.useState("programme");
  const [range, setRange] = React.useState("30 days");
  const [anchor, setAnchor] = React.useState("Bharat Agro Industries");
  const [invoice, setInvoice] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(TopAppBar, {
    title: "Supply Chain Finance",
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30
    },
    leading: /*#__PURE__*/React.createElement(IconButton, {
      label: "Open navigation menu",
      onClick: () => setDrawer(true)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "menu"
    })),
    trailing: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SearchBar, {
      width: 320,
      placeholder: "Search invoices, dealers, anchors"
    }), /*#__PURE__*/React.createElement(Tooltip, {
      label: "11 approvals past SLA"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Notifications, 11 unread"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "notifications"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 8,
        right: 6,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      count: 11
    })))), /*#__PURE__*/React.createElement(ProfileSection, {
      name: "Snehal Gaware",
      role: "SCF Programmes",
      onClick: () => {},
      size: "sm"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(NavigationRail, {
    value: sec,
    onChange: setSec,
    style: {
      position: "sticky",
      top: 64,
      height: "calc(100vh - 64px)"
    },
    fab: /*#__PURE__*/React.createElement(Fab, {
      label: "Onboard a dealer",
      size: "md",
      onClick: () => setToast(true)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "add"
    })),
    items: [{
      value: "programme",
      label: "Programme",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "dashboard",
        filled: sec === "programme"
      })
    }, {
      value: "invoices",
      label: "Invoices",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "receipt_long",
        filled: sec === "invoices"
      })
    }, {
      value: "anchors",
      label: "Anchors",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "account_balance",
        filled: sec === "anchors"
      })
    }, {
      value: "dealers",
      label: "Dealers",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "storefront",
        filled: sec === "dealers"
      })
    }, {
      value: "limits",
      label: "Limits",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "shield",
        filled: sec === "limits"
      })
    }]
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: "18px 24px 48px"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: ["Home", "Supply Chain Finance", anchor]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 16,
      flexWrap: "wrap",
      margin: "10px 0 18px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: "400 32px/40px var(--fl-font-brand)"
    }
  }, anchor), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      font: "400 14px/20px var(--fl-font-plain)",
      color: "var(--md-sys-color-on-surface-variant)"
    }
  }, "Agri West programme \xB7 anchor-led dealer financing \xB7 updated 4 minutes ago")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Dropdown, {
    label: "Anchor",
    variant: "outlined",
    width: 230,
    options: ["Bharat Agro Industries", "Sundaram Motors"],
    value: anchor,
    onChange: setAnchor
  }), /*#__PURE__*/React.createElement(SegmentedButtons, {
    options: ["7 days", "30 days", "Quarter"],
    value: range,
    onChange: setRange
  }), /*#__PURE__*/React.createElement(Button, {
    type: "secondary",
    size: 40,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "tune",
      size: 20
    })
  }, "Limit review"), /*#__PURE__*/React.createElement(Button, {
    size: 40,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 20
    }),
    onClick: () => setToast(true)
  }, "Fund approved"))), /*#__PURE__*/React.createElement(ProgrammeHeader, {
    anchor: anchor
  }), /*#__PURE__*/React.createElement("div", {
    className: "sec-h"
  }, /*#__PURE__*/React.createElement("h2", null, "Utilisation and ageing"), /*#__PURE__*/React.createElement("span", null, "Headroom returns on anchor settlement")), /*#__PURE__*/React.createElement(LimitCharts, null), /*#__PURE__*/React.createElement("div", {
    className: "sec-h"
  }, /*#__PURE__*/React.createElement("h2", null, "Invoice book"), /*#__PURE__*/React.createElement("span", null, "Click a row to open the invoice")), /*#__PURE__*/React.createElement(InvoiceBook, {
    onOpen: setInvoice
  }))), /*#__PURE__*/React.createElement(InvoiceSheet, {
    invoice: invoice,
    onClose: () => setInvoice(null)
  }), /*#__PURE__*/React.createElement(NavigationDrawer, {
    open: drawer,
    onClose: () => setDrawer(false),
    value: "invoices",
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Logo, {
      size: "md"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(IconButton, {
      label: "Close navigation",
      onClick: () => setDrawer(false)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "close"
    }))),
    groups: [{
      label: "Programme",
      items: [{
        value: "programme",
        label: "Programme overview",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "dashboard"
        })
      }, {
        value: "invoices",
        label: "Invoice book",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "receipt_long"
        }),
        trailing: "412"
      }, {
        value: "settle",
        label: "Settlements due",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "event"
        }),
        trailing: "14"
      }, {
        value: "recovery",
        label: "Recovery",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "warning"
        }),
        trailing: "7"
      }]
    }, {
      label: "Counterparties",
      items: [{
        value: "anchors",
        label: "Anchors",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "account_balance"
        }),
        trailing: "9"
      }, {
        value: "dealers",
        label: "Dealers and vendors",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "storefront"
        }),
        trailing: "218"
      }]
    }, {
      label: "Controls",
      items: [{
        value: "limits",
        label: "Limit policy",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "shield"
        })
      }, {
        value: "settings",
        label: "Settings",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "settings"
        })
      }]
    }]
  }), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: 24,
      bottom: 24,
      zIndex: 80
    }
  }, /*#__PURE__*/React.createElement(Snackbar, {
    actionLabel: "Undo",
    action: () => setToast(false),
    onDismiss: () => setToast(false)
  }, "31 invoices queued for funding at \u20B94.20 Cr")) : null);
}
Object.assign(window, {
  ScfApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/supply_chain/ScfApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SegmentedButtons = __ds_scope.SegmentedButtons;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Typography = __ds_scope.Typography;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.Thumbnail = __ds_scope.Thumbnail;

__ds_ns.TableAppBar = __ds_scope.TableAppBar;

__ds_ns.TableHeader = __ds_scope.TableHeader;

__ds_ns.TableRow = __ds_scope.TableRow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Note = __ds_scope.Note;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.STATUS = __ds_scope.STATUS;

__ds_ns.StatusChip = __ds_scope.StatusChip;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.InputField = __ds_scope.InputField;

__ds_ns.OtpField = __ds_scope.OtpField;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.BottomAppBar = __ds_scope.BottomAppBar;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.NavigationBar = __ds_scope.NavigationBar;

__ds_ns.NavigationDrawer = __ds_scope.NavigationDrawer;

__ds_ns.NavigationRail = __ds_scope.NavigationRail;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.ProfileSection = __ds_scope.ProfileSection;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopAppBar = __ds_scope.TopAppBar;

})();
