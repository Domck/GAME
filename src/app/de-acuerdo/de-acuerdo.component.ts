import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-de-acuerdo',
  templateUrl: './de-acuerdo.component.html',
  styleUrl: './de-acuerdo.component.css'
})
export class DeAcuerdoComponent implements OnInit {
  petals : {style:{transform:string}} []=[];
  constructor(private router: Router) {}
  ngOnInit():void{
    const numberofPetals=8;
    const angleStep =360 / numberofPetals;
    for (let i = 0; i < numberofPetals; i++){
      const angle = i * angleStep;
      this.petals.push ({
        style:{
          transform:`rotate(${angle}deg) translateY(-70px)`
        }
      });
    }
  }
  irADeUna(): void {
    this.router.navigate(['/de-una']);  // Navega al componente DeUna
  }
}
