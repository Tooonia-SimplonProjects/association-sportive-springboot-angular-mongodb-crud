import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsGymnaseComponent } from '../details-gymnase/details-gymnase.component';
import { Gymnase } from '../gymnase.model';
import { GymnaseService } from '../gymnase.service';

@Component({
  selector: 'app-gymnase-list',
  templateUrl: './gymnase-list.component.html',
  styleUrls: ['./gymnase-list.component.scss']
})
export class GymnaseListComponent implements OnInit {
  gymnases : Gymnase[] | undefined;
  detailGymnaseUrl: string | undefined;
  gymnaseForDetails: Gymnase | undefined;
  currentGymnaseUniqueId: string | undefined;
  idUrl: any;

  constructor(
    private gymnaseService : GymnaseService,
    private route: ActivatedRoute,
    private router: Router) {
   }

  ngOnInit(): void {
    this.gymnaseService.findAll().subscribe((data: Gymnase[]) => {
      this.gymnases = data;

      console.log(data);
    })
  }

  detailsGymnase(idUrl: any){
      console.log(idUrl);
      this.router.navigate(['associationsportive/gymnases/'+idUrl])
  }

}
