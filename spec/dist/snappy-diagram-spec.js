(function() {
  describe('SnappyDiagram', function() {
    var diagram;
    diagram = null;
    beforeEach(function() {
      return diagram = new SnappyDiagram({
        width: 800,
        height: 600,
        boxRadius: 5
      });
    });
    it('sets the dimensions of the surface', function() {
      expect(diagram.options.width).toBe(800);
      return expect(diagram.options.height).toBe(600);
    });
    it('adds a box', function() {
      return expect(diagram.addBox(0, 0, {
        text: 'Box 1'
      }).toString()).toBe('SnappyBox@0,0:Box 1');
    });
    it('adds a parallelogram', function() {
      return expect(diagram.addParallelogram(1, 0, {
        text: 'Parallelogram 1'
      }).toString()).toBe('SnappyParallelogram@1,0:Parallelogram 1');
    });
    it('adds a diamond', function() {
      return expect(diagram.addDiamond(0, 1, {
        text: 'Diamond 1'
      }).toString()).toBe('SnappyDiamond@0,1:Diamond 1');
    });
    it('adds a circle', function() {
      return expect(diagram.addCircle(0, 2, {
        text: 'Circle 1'
      }).toString()).toBe('SnappyCircle@0,2:Circle 1');
    });
    it('adds an ellipse', function() {
      return expect(diagram.addEllipse(1, 1, {
        text: 'Ellipse 1'
      }).toString()).toBe('SnappyEllipse@1,1:Ellipse 1');
    });
    return it('adds a connector', function() {
      var box1, box2, connector;
      box1 = diagram.addBox(0, 0, {
        text: 'Box 1'
      });
      box2 = diagram.addBox(1, 0, {
        text: 'Box 2'
      });
      connector = diagram.addConnector(box1, box2, {
        style: 'double'
      });
      return expect(connector.toString()).toBe("SnappyConnector:(" + (box1.toString()) + ")<->(" + (box2.toString()) + ")");
    });
  });

}).call(this);
