"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var inputArray = document.querySelectorAll('form input[type=text]');

function getData(_x) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(string) {
    var data, data2, template, response, json;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('app/js/template.hbs');

          case 2:
            data = _context.sent;
            _context.next = 5;
            return data.text();

          case 5:
            data2 = _context.sent;
            template = Handlebars.compile(data2);
            _context.next = 9;
            return fetch(string);

          case 9:
            response = _context.sent;
            _context.next = 12;
            return response.json();

          case 12:
            json = _context.sent;
            _context.next = 15;
            return template(json);

          case 15:
            document.querySelector('#bookDisplay').innerHTML = _context.sent;

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}

function buildQueryString() {
  var inputTitle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var inputAuthor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var result = "https://openlibrary.org/search.json?";

  if (inputTitle) {
    result += "title=".concat(inputTitle, "&");
  }

  if (inputAuthor) {
    result += "author=".concat(inputAuthor, "&");
  }

  result += 'limit=6';
  return result;
}

document.querySelectorAll('form input[type=text]').forEach(function (input) {
  input.addEventListener('keyup', function (e) {
    e.preventDefault();
    var string = buildQueryString(inputArray[0].value, inputArray[1].value);
    getData(string);
  });
});
//# sourceMappingURL=app.js.map
