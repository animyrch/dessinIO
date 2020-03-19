/*! For license information please see game.js.LICENSE.txt */
!function(e){var n={};function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(o,s,function(n){return e[n]}.bind(null,s));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}({"./src/js/canvas-manager.js":function(module,exports){eval("//Create canvas\nvar canvas = document.getElementById('myCanvas');\nvar context = canvas.getContext('2d'); //Initialize mouse coordinates to 0,0\n\nvar mouse = {\n  x: 0,\n  y: 0,\n  width: 1,\n  color: \"black\"\n}; //Set background\n\ncontext.fillStyle = \"white\";\ncontext.fillRect(0, 0, 700, 500);\neraseAll.addEventListener('click', function (evt) {\n  evt.preventDefault();\n  context.clearRect(0, 0, canvas.width, canvas.height);\n});\npencil.addEventListener('click', function (evt) {\n  evt.preventDefault();\n  mouse.width = 1;\n  mouse.color = \"black\";\n});\neraser.addEventListener('click', function (evt) {\n  evt.preventDefault();\n  mouse.width = 100;\n  mouse.color = \"white\";\n}); //Lines is default\n\nlines();\n\nfunction lines() {\n  //Paint includes line width, line cap, and color\n  var paint = function paint() {\n    context.lineTo(mouse.x, mouse.y);\n    context.lineJoin = 'round';\n    context.lineWidth = mouse.width;\n    context.strokeStyle = mouse.color;\n    context.stroke();\n  }; //Find mouse coordinates relative to canvas\n\n\n  var linesMousemove = function linesMousemove(e) {\n    mouse.x = e.pageX - this.offsetLeft;\n    mouse.y = e.pageY - this.offsetTop;\n  }; //User clicks down on canvas to trigger paint\n\n\n  var linesMousedown = function linesMousedown() {\n    context.beginPath();\n    context.moveTo(mouse.x, mouse.y);\n    canvas.addEventListener('mousemove', paint, false);\n  }; //When mouse lifts up, line stops painting\n\n\n  var linesMouseup = function linesMouseup() {\n    canvas.removeEventListener('mousemove', paint, false);\n  }; //When mouse leaves canvas, line stops painting\n\n\n  var linesMouseout = function linesMouseout() {\n    //transmitDrawing(\"drawing content\");\n    canvas.removeEventListener('mousemove', paint, false);\n  }; //Event listeners that will trigger the paint functions when\n  //mousedown, mousemove, mouseup, mouseout\n\n\n  canvas.addEventListener('mousedown', linesMousedown, false);\n  canvas.addEventListener('mousemove', linesMousemove, false);\n  canvas.addEventListener('mouseup', linesMouseup, false);\n  canvas.addEventListener('mouseout', linesMouseout, false);\n}\n\n;\n\n//# sourceURL=webpack:///./src/js/canvas-manager.js?")},"./src/js/canvasBroadcast.js":function(module,exports){eval("socket.on('moreDrawing', function (drawing) {\n  /*chat.innerHTML = '';\r\n  for(const message of userMessages) {\r\n      var node = document.createElement(\"DIV\");\r\n      var textnode = document.createTextNode(message);\r\n      node.appendChild(textnode);\r\n      chat.appendChild(node);\r\n  }*/\n});\n\nvar transmitDrawing = function transmitDrawing(drawingContent) {\n  console.log(drawingContent);\n};\n\n//# sourceURL=webpack:///./src/js/canvasBroadcast.js?")},"./src/js/connection.js":function(module,exports){eval('//Get the pseudo of user\nvar pseudo = prompt("Entrer votre pseudonyme:", ""); //Emit pseudo\n\nsocket.emit("pseudo", pseudo);\nsocket.on(\'listUsers\', function (list) {\n  console.log(list);\n});\n\n//# sourceURL=webpack:///./src/js/connection.js?')},"./src/js/game.js":function(module,exports,__webpack_require__){eval('Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ./connection.js */ "./src/js/connection.js", 7));\n\n//# sourceURL=webpack:///./src/js/game.js?')},"./src/js/tchat.js":function(module,exports){eval("tchatForm.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  console.log(msg.value);\n  socket.emit('message', msg.value);\n  msg.value = '';\n});\nsocket.on('userMessages', function (userMessages) {\n  chat.innerHTML = '';\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = userMessages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var message = _step.value;\n      var node = document.createElement(\"DIV\");\n      var textnode = document.createTextNode(message);\n      node.appendChild(textnode);\n      chat.appendChild(node);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/js/tchat.js?")},0:function(module,exports,__webpack_require__){eval('__webpack_require__(/*! ./src/js/game.js */"./src/js/game.js");\n__webpack_require__(/*! ./src/js/connection.js */"./src/js/connection.js");\n__webpack_require__(/*! ./src/js/tchat.js */"./src/js/tchat.js");\n__webpack_require__(/*! ./src/js/canvas-manager.js */"./src/js/canvas-manager.js");\nmodule.exports = __webpack_require__(/*! ./src/js/canvasBroadcast.js */"./src/js/canvasBroadcast.js");\n\n\n//# sourceURL=webpack:///multi_./src/js/game.js_./src/js/connection.js_./src/js/tchat.js_./src/js/canvas-manager.js_./src/js/canvasBroadcast.js?')}});