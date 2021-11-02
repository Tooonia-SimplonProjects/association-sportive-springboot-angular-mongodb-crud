import { Component, Input, OnInit } from '@angular/core';
import { Gymnase } from '../gymnase.model';
import { Seance } from '../seance.model';

@Component({
  selector: 'app-create-gymnase',
  templateUrl: './create-gymnase.component.html',
  styleUrls: ['./create-gymnase.component.scss']
})
export class CreateGymnaseComponent implements OnInit {

  @Input('gymnase') gymnase : Gymnase | undefined;

  constructor() {
   }

  ngOnInit(): void {
  }

}
