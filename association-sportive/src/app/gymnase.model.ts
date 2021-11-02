import { Seance } from "./seance.model";

export class Gymnase {

  constructor(
      public gymnaseIdUnique: string,
      public gymnaseId: number,
      public gymnaseNom: string,
      public gymnaseAdresse : string,
      public gymnaseVille : string,
      public gymnaseSurface : number,
      public seances : Seance[],
  ) {}
}