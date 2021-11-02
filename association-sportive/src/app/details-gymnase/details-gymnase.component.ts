import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gymnase } from '../gymnase.model';
import { GymnaseService } from '../gymnase.service';

@Component({
  selector: 'app-details-gymnase',
  templateUrl: './details-gymnase.component.html',
  styleUrls: ['./details-gymnase.component.scss']
})
export class DetailsGymnaseComponent implements OnInit {
  gymnase: Gymnase | undefined;
  idGymnase: string | undefined;
  idUrl: any;

  constructor(
    private gymnaseService: GymnaseService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const idUrl: string = this.route.snapshot.params.id;
    this.gymnaseService.findOne(idUrl).subscribe(data => {
      this.gymnase = data;
    });
  }
}
