function isEquivalent(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}

function getParam(b) {
  var c = typeof b === "undefined";
  if (a !== h && c) return a;
  for (var d = {}, b = b || k[B][vb], e = b[p]("?"), f = b[p]("#"), b = (f === -1 ? b[Ya](e + 1) : [b[Ya](e + 1, f - e - 1), "&", b[Ya](f + 1)][K](""))[z]("&"), e = i.dd ? ia : unescape, f = 0, g = b[w]; f < g; ++f) {
      var l = b[f][p]("=");
      if (l !== -1) {
          var q = b[f][I](0, l),
              l = b[f][I](l + 1),
              l = l[Ca](/\+/g, " ");
          try {
              d[q] = e(l)
          } catch (A) {}
      }
  }
  c && (a = d);
  return d
}

// export function isEquivalent(a, b) {
//   return isEquivalentCheck(a, b);
// } 