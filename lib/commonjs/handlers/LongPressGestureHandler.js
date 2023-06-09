"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongPressGestureHandler = exports.longPressHandlerName = exports.longPressGestureHandlerProps = void 0;

var _createHandler = _interopRequireDefault(require("./createHandler"));

var _gestureHandlerCommon = require("./gestureHandlerCommon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const longPressGestureHandlerProps = ['minDurationMs', 'maxDist'];
exports.longPressGestureHandlerProps = longPressGestureHandlerProps;
const longPressHandlerName = 'LongPressGestureHandler';
exports.longPressHandlerName = longPressHandlerName;
// eslint-disable-next-line @typescript-eslint/no-redeclare -- backward compatibility; see description on the top of gestureHandlerCommon.ts file
const LongPressGestureHandler = (0, _createHandler.default)({
  name: longPressHandlerName,
  allowedProps: [..._gestureHandlerCommon.baseGestureHandlerProps, ...longPressGestureHandlerProps],
  config: {
    shouldCancelWhenOutside: true
  }
});
exports.LongPressGestureHandler = LongPressGestureHandler;
//# sourceMappingURL=LongPressGestureHandler.js.map