import { Adresse } from './adresse.model';
import { Koordinator } from './koordinator.model';
import { Tilknytning } from './tilknytning.model';

export type Part = Produktionsenhed | Byggeplads | Lokation | Ukendt;

export interface Produktionsenhed {
  pNummer: number;
  navn: string;
  cvrNummer: number;
  email: string;
  telefon: string;
  berigetEmail: string;
  berigetTelefon: string;
  status: boolean;
  gyldigFra: string;
  gyldigTil: string;
  sikkerhedsmarkeringstype: string;
  sikkerhedsmarkeret: boolean;
  brancheNr: number;
  branchetekst: string;
  branchekode: number;
  aar: number;
  maaned: number;
  antalAarsvaerk: number;
  antalAnsatte: number;
  adresse: Adresse;
}

export interface Byggeplads {
  id: number;
  navn: string;
  brugervendtNoegle: string;
  status: boolean;
  fase: string;
  forventetAntalVirksomheder: number;
  forventetAntalAnsatte: number;
  faktiskAntalAnsatte: number;
  kalender: string;
  tidPaaDagen: string;
  dobbeltTilsynsfoerende: boolean;
  forventetStartDato: string;
  forventetSlutDato: string;
  adresse: Adresse;
  koordinator: Koordinator;
  tilknutninger: Tilknytning[];
}

export interface Lokation {
  id: number;
  brugervendtNoegle: string;
  navn: string;
  berigetTelefonnummer: string;
  berigetEmail: string;
  aktiv: boolean;
  antalAnsatte: number;
  gyldigFra: string;
  gyldigTil: string;
  kildeKode: string;
  danskAdresse: Adresse;
  rutAdresse: Adresse;
}

export interface Ukendt {
  ukendt: boolean;
}
