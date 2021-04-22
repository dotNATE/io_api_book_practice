"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getData(_x) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputTitle) {
    var response, template, json;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = fetch("https://openlibrary.org/search.json?q=".concat(inputTitle));
            template = fetch('template.hbs');
            json = response.json();
            console.log(template.text());
            console.log(json);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}
//# sourceMappingURL=app.js.map
