class Log extends MainClass{
    constructor(x, y, height, angle) {

      super(x, y, 20, height, angle);

      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("sprites/wood2.png");
    }

  };

  /*
  INHERITANCE

  1. Parent Class ==> Base class
  2. children classes ==> Sub - classes

  Sub classes inherit all the properties & the functions from the base class
  */
  