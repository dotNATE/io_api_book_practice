"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getData(_x) {
  return _getData.apply(this, arguments);
} // document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     getData(e.target[0].value)
//     e.target[0].value = ''
// })


function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(inputTitle) {
    var data, data2, template, response, json, html;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('js/template.hbs');

          case 2:
            data = _context.sent;
            _context.next = 5;
            return data.text();

          case 5:
            data2 = _context.sent;
            template = Handlebars.compile(data2);
            _context.next = 9;
            return fetch("https://openlibrary.org/search.json?title=".concat(inputTitle, "&limit=6"));

          case 9:
            response = _context.sent;
            _context.next = 12;
            return response.json();

          case 12:
            json = _context.sent;
            console.log(template);
            console.log(json);
            _context.next = 17;
            return template(json);

          case 17:
            html = _context.sent;
            console.log(html);
            document.querySelector('#bookDisplay').innerHTML = html;

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}

document.querySelector('#bookSearch').addEventListener('keyup', function (e) {
  e.preventDefault();
  getData(e.target.value);
});
//# sourceMappingURL=app.js.map
