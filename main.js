// Clase abstracta Figura
class Figura {
  area = 0;
  perimetro = 0;
  constructor() {
    if (this.constructor === Figura) {
      //throw new Error("No se puede instanciar la clase abstracta Figura");
    }
  }
  getArea() {
    return "El área es: " + this.area;
  }
  getPerimetro() {
    return "El perímetro es: " + this.perimetro;
  }
  mostrarTipo() {
    return "Figura";
  }
}

//let figura = new Figura();
//console.log(figura.getArea());
//console.log(figura.getPerimetro());

class Rectangulo extends Figura {
  constructor(b, h) {
    super();
    this.b = b;
    this.h = h;
  }

  getArea() {
    this.area = this.b * this.h;
    return "El área es: " + this.area;
  }

  getPerimetro() {
    this.perimetro = 2 * (this.b + this.h);
    return "El perímetro es: " + this.perimetro;
  }
}

let r = new Rectangulo(2, 4);
console.log(r.getArea());
console.log(r.getPerimetro());
