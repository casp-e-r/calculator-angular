import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator-angular';

  calValue: number = 0;
  funcT: any = 'NoFunction';
  calNumber: string = 'NoValue';
  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: any) {
    console.log(val, type);
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }
  onNumberClick(val: string) {
    if (this.calNumber != 'NoValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }

    this.calValue = parseFloat(this.calNumber);
  }
  onFunctionClick(val: string) {
    if (val == 'C') {
      this.clearAll;
    } else if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'NoValue';
      this.funcT = val;
    } else {
      this.secondNumber = this.calValue;
      this.valueCalculate;
    }

    this.calValue = parseFloat(this.calNumber);
  }

  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '/') {
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '%') {
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') {
        this.onEqualPress();
      }
    }
  }
  totalAssignValues(total: number, val: string) {
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'NoValue';
    this.funcT = val;
  }
  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'NoValue';
  }
  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'NoValue';
  }
}
