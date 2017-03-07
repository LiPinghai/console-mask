if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(obj, start) {
    for (var i = (start || 0), j = this.length; i < j; i++) {
      if (this[i] === obj) { return i; }
    }
    return -1;
  }
}


if (!Element.prototype.addEventListener) {
  Element.prototype.addEventListener = function(e, callback) {
    e = 'on' + e;
    return this.attachEvent(e, callback);
  };
}


if (!document.getElementsByClassName) {
  document.getElementsByClassName = function(search) {
    var d = document,
      elements, pattern, i, results = [];
    if (d.querySelectorAll) { // IE8
      return d.querySelectorAll("." + search);
    }
    if (d.evaluate) { // IE6, IE7
      pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
      elements = d.evaluate(pattern, d, null, 0, null);
      while ((i = elements.iterateNext())) {
        results.push(i);
      }
    } else {
      elements = d.getElementsByTagName("*");
      pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
      for (i = 0; i < elements.length; i++) {
        if (pattern.test(elements[i].className)) {
          results.push(elements[i]);
        }
      }
    }
    return results;
  }
}

//only override IE
if (/msie/i.test(navigator.userAgent)) {
  document.nativeGetElementById = document.getElementById;
  document.getElementById = function(id) {
    var elem = document.nativeGetElementById(id);
    if (elem) {
      //make sure that it is a valid match on id
      if (elem.id == id) {
        return elem;
      } else {
        //otherwise find the correct element
        for (var i = 1; i < document.all[id].length; i++) {
          if (document.all[id][i].id == id) {
            return document.all[id][i];
          }
        }
      }
    }
    return null;
  };
}

if (!Function.prototype.bind) {
  Function.prototype.bind = function() {
    var fn = this,
      args = [].slice.call(arguments),
      object = args.shift();
    return function() {
      return fn.apply(object, args.concat([].slice.call(arguments)));
    };
  };
}
if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun /*, thisp*/ ) {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();
    var res = new Array();
    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
      if (i in this) {
        var val = this[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, this))
          res.push(val);
      }
    }
    return res;
  };
}

if (typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  }
}