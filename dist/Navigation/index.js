"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _navigationModule = _interopRequireDefault(require("./navigation.module.scss"));

var _Button = require("@consta/uikit/Button");

var _IconBackward = require("@consta/uikit/IconBackward");

var _IconForward = require("@consta/uikit/IconForward");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Navigation = props => {
  var _backward$label, _forward$label;

  const {
    backward,
    forward
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _navigationModule.default.navigation
  }, backward ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
    label: (_backward$label = backward === null || backward === void 0 ? void 0 : backward.label) !== null && _backward$label !== void 0 ? _backward$label : 'Back',
    size: "l",
    view: "secondary",
    iconLeft: _IconBackward.IconBackward,
    onClick: backward.onClick
  }) : null, forward ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
    label: (_forward$label = forward.label) !== null && _forward$label !== void 0 ? _forward$label : 'Next',
    size: "l",
    disabled: forward.disabled,
    iconRight: !forward.withoutIcon ? _IconForward.IconForward : undefined,
    onClick: forward.onClick
  }) : null);
};

var _default = Navigation;
exports.default = _default;