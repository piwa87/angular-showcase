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
  gyldigFra: string; // Consider changing to Date if needed
  gyldigTil: string; // Consider changing to Date if needed
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
  forventetStartDato: string; // Consider changing to Date if needed
  forventetSlutDato: string; // Consider changing to Date if needed
  adresse: Adresse;
}

export interface Lokation {
  id: number;
  brugervendtNoegle: string;
  navn: string;
  berigetTelefonnummer: string;
  berigetEmail: string;
  aktiv: boolean;
  antalAnsatte: number;
  gyldigFra: string; // Consider changing to Date if needed
  gyldigTil: string; // Consider changing to Date if needed
  kildeKode: string;
  danskAdresse: Adresse;
  rutAdresse: Adresse;
}

export interface Ukendt {
  ukendt: boolean;
}

export interface Adresse {
  bogstavFra: string;
  bogstavTil: string;
  bynavn: string;
  coNavn: string;
  etage: string;
  fritekst: string;
  husnummerFra: string;
  husnummerTil: string;
  kommuneKode: string;
  landekode: string;
  postboks: string;
  postdistrikt: string;
  postnummer: string;
  sideDoer: string;
  vejkode: string;
  vejnavn: string;
  breddegrad: number;
  laengdegrad: number;
  dawaId: string;
}

export interface Koordinator {
  navn: string;
  email: string;
  telefon: string;
}

export interface Tilknytning {
  partType: number;
  brugervendtNoegle: string;
  relation: string;
}
