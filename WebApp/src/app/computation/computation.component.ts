import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
    selector: 'app-computation',
    templateUrl: './computation.component.html',
    styleUrls: [ './computation.component.css' ]
  })

export class ComputationComponent {
    time;
    computeMatrix(matrixSize){
      var start = performance.now();
      var matrixOne, matrixTwo;
      var n = Number(matrixSize);
      matrixOne = Array(n).fill(null).map(() => Array(n).fill(n));
      matrixTwo = Array(n).fill(null).map(() => Array(n).fill(n));
      var count = 0;
      for(var i = 0; i < n; i++ ){
        for(var j = 0; j < n; j++ ){
          matrixOne[i][j] = count;
          matrixTwo[i][j] = count;
          count++;
        } 
      }
      var result = [];
      for (var i = 0; i < matrixOne.length; i++) {
          result[i] = [];
          for (var j = 0; j < matrixTwo[0].length; j++) {
              var sum = 0;
              for (var k = 0; k < matrixOne[0].length; k++) {
                  sum += matrixOne[i][k] * matrixTwo[k][j];
              }
              result[i][j] = sum;
          }
      }  
      var end = performance.now();
      this.time = end - start;
      console.table(result);
    }
}
