"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactDropzone = require("react-dropzone");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 12px',
  border: '1px dashed rgba(0, 5, 51, 0.6)',
  borderRadius: '3px',
  backgroundColor: '#fafafa',
  color: 'rgb(119 119 119)',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  maxWidth: '304px',
  margin: '0 auto',
  boxSizing: 'border-box',
  cursor: 'pointer',
  textAlign: 'center'
};
const activeStyle = {
  borderColor: '#2196f3'
};
const acceptStyle = {
  borderColor: '#00e676'
};
const rejectStyle = {
  borderColor: '#ff1744'
};

const FileDropper = props => {
  const {
    defaultFiles = [],
    onFilesSelected = () => false,
    className
  } = props;
  const [selectedFiles, setSelectedFiles] = (0, _react.useState)([...defaultFiles]);
  const onDrop = (0, _react.useCallback)(acceptedFiles => {
    setSelectedFiles(acceptedFiles);
    onFilesSelected(acceptedFiles);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = (0, _reactDropzone.useDropzone)({
    onDrop
  });
  const style = (0, _react.useMemo)(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, baseStyle), isDragActive ? activeStyle : {}), isDragAccept ? acceptStyle : {}), isDragReject ? rejectStyle : {}), [isDragActive, isDragReject, isDragAccept]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("div", getRootProps({
    style
  }), /*#__PURE__*/_react.default.createElement("input", getInputProps()), /*#__PURE__*/_react.default.createElement("p", null, selectedFiles.length ? selectedFiles[0].name : '+ Add NFT ownership requirement')));
};

var _default = FileDropper;
exports.default = _default;