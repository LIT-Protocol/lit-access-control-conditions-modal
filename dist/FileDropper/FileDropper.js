"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _reactDropzone = require("react-dropzone");

var _files = require("utils/files");

var _components = require("components");

var _fileDropperModule = _interopRequireDefault(require("./file-dropper.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 36px',
  border: '1px dashed rgba(0, 5, 51, 0.6)',
  borderRadius: '3px',
  backgroundColor: '#fafafa',
  color: 'rgb(119 119 119)',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  maxWidth: '304px',
  margin: '0 auto',
  boxSizing: 'border-box',
  cursor: 'pointer'
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
    onFilesSelected
  } = props;
  const [selectedFiles, setSelectedFiles] = (0, _react.useState)([...defaultFiles]);
  const onDrop = (0, _react.useCallback)(acceptedFiles => {
    console.log('dropped', acceptedFiles);
    setSelectedFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
  }, []); // console.log(selectedFiles)

  const removeFile = file => {
    setSelectedFiles(prevFiles => prevFiles.filter(f => f.name !== file.name));
  };

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
  const fileTableColumns = [{
    title: 'Name',
    name: 'name'
  }, {
    title: 'Size',
    name: 'size'
  }];
  return /*#__PURE__*/React.createElement("div", null, selectedFiles.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components.Table, {
    className: _fileDropperModule.default.tableWrapper,
    columns: fileTableColumns,
    rows: selectedFiles.map(f => ({
      name: f.name,
      size: (0, _files.humanFileSize)(f.size),
      id: f.name
    })),
    onRemove: removeFile
  })) : null, /*#__PURE__*/React.createElement("div", getRootProps({
    style
  }), /*#__PURE__*/React.createElement("input", getInputProps()), /*#__PURE__*/React.createElement("p", null, "+ Add additional files")));
};

var _default = FileDropper;
exports.default = _default;