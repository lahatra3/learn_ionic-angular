import { Component, OnInit } from '@angular/core';
import { operateurSignals } from './operateurs';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  input!: string | number;
  output!: number | string;
  firstLine: Array<number> = [1, 2, 3];
  secondLine: Array<number> = [4, 5, 6];
  thirdLine: Array<number> = [7, 8, 9]
  inputTableau!: Array<string | number>;
  operateurs!: { sign: string, icon: string }[];
  constructor() { }

  ngOnInit(): void {
    this.inputTableau = [];
    this.input = 0;
    this.output = 0;
    this.operateurs = operateurSignals;
  }

  onReset():void {
    this.input = 0;
    this.output = 0;
    this.inputTableau = [];
  }

  onDelete(): void {
    this.inputTableau.pop();
    this.input = (this.inputTableau.length === 0 ? 0: this.joinArray(this.inputTableau));
  }

  joinArray(input: Array<string | number>): string {
    let tmp: string = "";
    for (let item of input) {
      tmp += item;
    }
    return tmp;
  }

  onGetValue(valeur: number|string): void {
    this.inputTableau.push(valeur); 
    this.input = this.joinArray(this.inputTableau);
  }

  tableauString(tableau: Array<string | number>): Array<string> {
    let tableauString: Array<string> = [];
    for(let item of tableau) {
      tableauString.push(item.toString());
    }
    return tableauString;
  }

  verifyOperateur(tableau:Array<string>): boolean {
    let status = false;
    let i = 0
    while(i < tableau.length) {
      if(i + 1 === tableau.length) {
        break;
      }
      if(/[*/+-]/.test(tableau[i]) && /[*/+-]/.test(tableau[i + 1])) {
        status = true;
        break;
      }
      i++;
    }
    return status;
  }
  
  onGetResult(): void {
    let reponses = this.tableauString(this.inputTableau);
    if(/[/*]/.test(reponses[0]) || this.verifyOperateur(reponses)) {
      this.output = "Erreur";
    }
    else {
      this.output = eval(this.joinArray(reponses));
    }
  }

}
