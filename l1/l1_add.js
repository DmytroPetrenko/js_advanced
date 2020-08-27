class Box {
  constructor(Height, Width, Depth, Material) {
      this.Material = Material;
      this.Height = Height;
      this.Width = Width;
      this.Depth = Depth;
  }
}

Box.prototype.Volume = function () {
    return this.Height * this.Width + this.Depth;
}

Box.prototype.equals = function (box) {
    return (this.Material === box.Material ? true : false);
}

var cube = new Box(3, 3, 3, "wood");
var box = new Box(2, 5, 34, "wood");
var cube2 = new Box(3, 3, 3, "metal");

document.write(cube.Volume() + " " + cube.equals(box) + " " + cube.equals(cube2));
