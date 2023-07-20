const areaOrPerimeter = function(l , w) {
  //find out if l = w and is therefore a square
  if (l === w) {
  //if so return the area
    return l * w;
  //if not a square, by deffault it is a rectangle
  } else {
  //therefore, return the perimeter
    return l + l + w + w;
  }
};