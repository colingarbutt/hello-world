"use strict"


import {
  thing
} from './module1.js';

/*
  can't do this!!!!
  Uncaught SyntaxError: The requested module 'https://unpkg.com/split.js/split.js'
  does not provide an export named 'Split'
*/
// import {
//   Split
// } from "https://unpkg.com/split.js/split.js";


export function main_do_stuff() {

  //  console.log(thing.text);



  Split(['#lft', '#rgt'], {

    sizes: [25, 75]
  })

  Split(['#top', '#bot'], {
    direction: 'vertical'
  })






  // add the css styles needed for Split.js
  //
  let styles = [
    ['.split',
      ['-webkit-box-sizing', 'border-box'],
      ['-moz-box-sizing', 'border-box'],
      ['box-sizing', 'border-box'],
      ['overflow-y', 'auto'],
      ['overflow-x', 'hidden']
    ],
    ['.split.split-vertical',
      []
    ],
    ['.split.split-horizontal',
      ['height', '100%'],
      ['float', 'left']
    ],
    ['.gutter',
      ['background-color', 'transparent'],
      ['background-repeat', 'no-repeat'],
      ['background-position', '50%']
    ],
    ['.gutter.gutter-vertical',
      ['background-image', 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=")']
    ],
    ['.gutter.gutter-horizontal',
      ['height', '100%'],
      ['float', 'left'],
      ['background-image', 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==")']
    ]
  ]

  addStylesheetRules(styles)


  addStylesheetRules([
    ['.left-class',
      ['color', '#ff0000']
    ]
  ]);



  // add left-class to element "lefty" style
  //
  var element = document.getElementById("lefty");
  element.classList.add("left-class");

}





/**
 * Add a stylesheet rule to the document (it may be better practice
 * to dynamically change classes, so style information can be kept in
 * genuine stylesheets and avoid adding extra elements to the DOM).
 * Note that an array is needed for declarations and rules since ECMAScript does
 * not guarantee a predictable object iteration order, and since CSS is
 * order-dependent.
 * @param {Array} rules Accepts an array of JSON-encoded declarations
 * @example
addStylesheetRules([
  ['h2', // Also accepts a second argument as an array of arrays instead
    ['color', 'red'],
    ['background-color', 'green', true] // 'true' for !important rules
  ],
  ['.myClass',
    ['background-color', 'yellow']
  ]
]);
*/
function addStylesheetRules(rules) {
  var styleEl = document.createElement('style');

  // Append <style> element to <head>
  document.head.appendChild(styleEl);

  // Grab style element's sheet
  var styleSheet = styleEl.sheet;

  for (var i = 0; i < rules.length; i++) {
    var j = 1,
      rule = rules[i],
      selector = rule[0],
      propStr = '';
    // If the second argument of a rule is an array of arrays, correct our variables.
    if (Array.isArray(rule[1][0])) {
      rule = rule[1];
      j = 0;
    }

    for (var pl = rule.length; j < pl; j++) {
      var prop = rule[j];
      propStr += prop[0] + ': ' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
    }

    // Insert CSS Rule
    styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
  }
}
