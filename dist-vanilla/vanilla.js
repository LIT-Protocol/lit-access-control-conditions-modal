"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _index = _interopRequireDefault(require("./src/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ShareModal = _index.default; // exports.gooddata = require("@gooddata/gooddata-js");
// var GDRC  = require("@gooddata/react-components"); // GoodData React Components
// buffer of DOM elements rendering React components

var nodes = []; // utility to mount React nodes to target DOM elements

exports.ReactContentRenderer = {
  unmountAll: function unmountAll() {
    if (nodes.length === 0) {
      return;
    }

    nodes.forEach(node => _react.default.unmountComponentAtNode(node));
    nodes = [];
  },
  unmount: function unmount(node) {
    _react.default.unmountComponentAtNode(node);
  },

  /**
   * Creates, renders and returns a React element created
   * from component class using given props and rendered
   * into the targetNode.
   */
  render: function render(component, props, targetNode, callback) {
    var reactElement = /*#__PURE__*/_react.default.createElement(component, props, null);

    _reactDom.default.render(reactElement, targetNode, callback);

    nodes.push(targetNode);
    return reactElement;
  }
}; // // re-export GoodData React components
// for (var prop in GDRC) {
//   if (GDRC.hasOwnProperty(prop)) {
//     exports[prop] = GDRC[prop];
//   }
// }