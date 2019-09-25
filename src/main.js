import 'purecss';
import '../assets/site.css';

class TestingEs6 {
  constructor(text) {
    this.par = document.createElement('p');
    this.par.innerText = text;
  }

  append() {
    document.body.append(this.par);
  }
}

const testEs6Obj = new TestingEs6('hello :)');
testEs6Obj.append();
