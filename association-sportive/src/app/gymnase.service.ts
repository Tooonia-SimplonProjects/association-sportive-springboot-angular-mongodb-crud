import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Gymnase } from './gymnase.model';
import { Seance } from './seance.model';

@Injectable({
  providedIn: 'root'
})
export class GymnaseService {

  private gymnasesUrl: string;

  constructor(private http: HttpClient) {
    this.gymnasesUrl = 'http://localhost:8080/associationsportive/gymnases';
  }

  public findAll(): Observable<Gymnase[]> {

    return this.http.get<Gymnase[]>(this.gymnasesUrl).pipe(
      map((rawData:any[]) => rawData.map(itemGymnase => new Gymnase(
        itemGymnase.id,
        itemGymnase.idGymnase,
        itemGymnase.nomGymnase,
        itemGymnase.adresse,
        itemGymnase.ville,
        itemGymnase.surface,
        itemGymnase.seances ? itemGymnase.seances.map((seance:any) => new Seance(
          seance.idSportifEntraineur,
          seance.jour,
          seance.horaire,
          seance.duree,
          seance.libelle
        )) : []
      )))
    );
  }

  public findOne(id:string): Observable<Gymnase> {
    return this.http.get<Gymnase>(`${this.gymnasesUrl}/${id}`).pipe(
      map((rawData:any) => new Gymnase(
        rawData.id,
        rawData.idGymnase,
        rawData.nomGymnase,
        rawData.adresse,
        rawData.ville,
        rawData.surface,
        rawData.seances ? rawData.seances.map((seance:any) => new Seance(
          seance.idSportifEntraineur,
          seance.jour,
          seance.horaire,
          seance.duree,
          seance.libelle
        )) : []
      ))
    );
  }

}
