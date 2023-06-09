"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TapGestureHandler = exports.tapHandlerName = exports.tapGestureHandlerProps = void 0;

var _createHandler = _interopRequireDefault(require("./createHandler"));

var _gestureHandlerCommon = require("./gestureHandlerCommon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tapGestureHandlerProps = ['maxDurationMs', 'maxDelayMs', 'numberOfTaps', 'maxDeltaX', 'maxDeltaY', 'maxDist', 'minPointers'];
exports.tapGestureHandlerProps = tapGestureHandlerProps;
const tapHandlerName = 'TapGestureHandler';
exports.tapHandlerName = tapHandlerName;
// eslint-disable-next-line @typescript-eslint/no-redeclare -- backward compatibility; see description on the top of gestureHandlerCommon.ts file
const TapGestureHandler = (0, _createHandler.default)({
  name: tapHandlerName,
  allowedProps: [..._gestureHandlerCommon.baseGestureHandlerProps, ...tapGestureHandlerProps],
  config: {
    shouldCancelWhenOutside: true
  }
});
exports.TapGestureHandler = TapGestureHandler;
//# sourceMappingURL=TapGestureHandler.js.map