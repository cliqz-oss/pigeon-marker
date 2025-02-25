'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _infact = require('./infact');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var icon = 'https://cdn.cliqz.com/serp/icons/pin.svg';

var iconHover = 'https://cdn.cliqz.com/serp/icons/pin-hover.svg';

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var imageOffset = {
  left: 15,
  top: 31
};

var Marker = function (_Component) {
  _inherits(Marker, _Component);

  function Marker(props) {
    _classCallCheck(this, Marker);

    var _this = _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).call(this, props));

    _this.eventParameters = function (event) {
      return {
        event: event,
        anchor: _this.props.anchor,
        payload: _this.props.payload
      };
    };

    _this.handleClick = function () {
      _this.props.onClick && _this.props.onClick(_this.eventParameters());
    };

    _this.handleContextMenu = function () {
      _this.props.onContextMenu && _this.props.onContextMenu(_this.eventParameters());
    };

    _this.handleMouseOver = function () {
      _this.props.onMouseOver && _this.props.onMouseOver(_this.eventParameters());
      _this.setState({ hover: true });
    };

    _this.handleMouseOut = function () {
      _this.props.onMouseOut && _this.props.onMouseOut(_this.eventParameters());
      _this.setState({ hover: false });
    };

    _this.state = {
      hover: false
    };
    return _this;
  }

  // what do you expect to get back with the event


  _createClass(Marker, [{
    key: 'isRetina',

    // controls
    value: function () {
      return typeof window !== 'undefined' && window.devicePixelRatio >= 2;
    }

    // modifiers

  }, {
    key: 'isHover',
    value: function () {
      return typeof this.props.hover === 'boolean' ? this.props.hover : this.state.hover;
    }
  }, {
    key: 'image',
    value: function () {
      return this.isHover() ? icon : iconHover;
    }

    // lifecycle

  }, {
    key: 'componentDidMount',
    value: function () {
      var images = [icon, iconHover];

      images.forEach(function (image) {
        var img = new window.Image();
        img.src = image;
      });
    }

    // delegators

  }, {
    key: 'render',

    // render

    value: function () {
      var _props = this.props,
          left = _props.left,
          top = _props.top,
          onClick = _props.onClick;

      var style = {
        position: 'absolute',
        transform: 'translate(' + (left - imageOffset.left) + 'px, ' + (top - imageOffset.top) + 'px)',
        cursor: onClick ? 'pointer' : 'default'
      };

      return _infact.React.createElement('div', { style: style,
        className: 'pigeon-click-block',
        onClick: this.handleClick,
        onContextMenu: this.handleContextMenu,
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut }, _infact.React.createElement('img', { src: this.image(), width: 29, height: 34, alt: '' }));
    }
  }]);

  return Marker;
}(_infact.Component);

Marker.propTypes = {
  // input, passed to events
  anchor: _propTypes2.default.array.isRequired,
  payload: _propTypes2.default.any,

  // optional modifiers
  hover: _propTypes2.default.bool,

  // callbacks
  onClick: _propTypes2.default.func,
  onContextMenu: _propTypes2.default.func,
  onMouseOver: _propTypes2.default.func,
  onMouseOut: _propTypes2.default.func,

  // pigeon variables
  left: _propTypes2.default.number,
  top: _propTypes2.default.number,

  // pigeon functions
  latLngToPixel: _propTypes2.default.func,
  pixelToLatLng: _propTypes2.default.func
};
exports.default = Marker;
