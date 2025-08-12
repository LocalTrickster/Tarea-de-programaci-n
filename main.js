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

  mostrarTipo() {
    return "Rectángulo";
  }
}

class Triangulo extends Figura {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  getArea() {
    this.area = (this.base * this.altura) / 2;
    return "El área es: " + this.area;
  }

  getPerimetro() {
   
    this.perimetro = this.base + this.altura + Math.sqrt(this.base ** 2 + this.altura ** 2);
    return "El perímetro es: " + this.perimetro.toFixed(2);
  }

  mostrarTipo() {
    return "Triángulo";
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  getArea() {
    this.area = this.lado * this.lado;
    return "El área es: " + this.area;
  }

  getPerimetro() {
    this.perimetro = 4 * this.lado;
    return "El perímetro es: " + this.perimetro;
  }

  mostrarTipo() {
    return "Cuadrado";
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super();
    this.radio = radio;
  }

  getArea() {
    this.area = Math.PI * this.radio * this.radio;
    return "El área es: " + this.area.toFixed(2);
  }

  getPerimetro() {
    this.perimetro = 2 * Math.PI * this.radio;
    return "El perímetro es: " + this.perimetro.toFixed(2);
  }

  mostrarTipo() {
    return "Círculo";
  }
}

let r = new Rectangulo(5, 10);
console.log(r.mostrarTipo());   
console.log(r.getArea());
console.log(r.getPerimetro());

let t = new Triangulo(3, 4);
console.log(t.mostrarTipo());
console.log(t.getArea());
console.log(t.getPerimetro());

let cu = new Cuadrado(5);
console.log(cu.mostrarTipo());
console.log(cu.getArea());
console.log(cu.getPerimetro());

let ci = new Circulo(2);
console.log(ci.mostrarTipo());
console.log(ci.getArea());
console.log(ci.getPerimetro());
