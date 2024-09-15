import {
  Byggeplads,
  Lokation,
  Produktionsenhed
} from '../../../../../../at-common/forms/src/lib/at-partsoegning/part.model';

export const mockProduktionsenhed1: Produktionsenhed = {
  pNummer: 12345678,
  navn: 'Nordic Steelworks',
  cvrNummer: 35954716,
  adresse: 'Hammervej 12, 8000 Aarhus',
  antalAnsatte: 27,
  email: '',
  telefon: '',
  berigetEmail: '',
  berigetTelefon: '',
  status: false,
  gyldigFra: '',
  gyldigTil: '',
  sikkerhedsmarkeringstype: '',
  sikkerhedsmarkeret: false,
  brancheNr: 0,
  branchetekst: '',
  branchekode: 0,
  aar: 0,
  maaned: 0,
  antalAarsvaerk: 0
};
export const mockProduktionsenhed2: Produktionsenhed = {
  pNummer: 3456789,
  navn: 'Sunshine Textiles',
  cvrNummer: 45954717,
  adresse: 'Kløvervej 45, 2500 Valby',
  antalAnsatte: 32,
  email: '',
  telefon: '',
  berigetEmail: '',
  berigetTelefon: '',
  status: false,
  gyldigFra: '',
  gyldigTil: '',
  sikkerhedsmarkeringstype: '',
  sikkerhedsmarkeret: false,
  brancheNr: 0,
  branchetekst: '',
  branchekode: 0,
  aar: 0,
  maaned: 0,
  antalAarsvaerk: 0
};
export const mockProduktionsenhed3: Produktionsenhed = {
  pNummer: 87654321,
  navn: 'Oceanic Shipbuilders',
  cvrNummer: 55954718,
  adresse: 'Værftsvej 77, 6700 Esbjerg',
  antalAnsatte: 40,
  email: '',
  telefon: '',
  berigetEmail: '',
  berigetTelefon: '',
  status: false,
  gyldigFra: '',
  gyldigTil: '',
  sikkerhedsmarkeringstype: '',
  sikkerhedsmarkeret: false,
  brancheNr: 0,
  branchetekst: '',
  branchekode: 0,
  aar: 0,
  maaned: 0,
  antalAarsvaerk: 0
};
export const mockByggeplads1: Byggeplads = {
  id: 1,
  navn: 'Aarhus Havn',
  brugervendtNoegle: 'AH-001',
  status: true,
  fase: 'Under opførelse',
  forventetAntalVirksomheder: 5,
  forventetAntalAnsatte: 40,
  faktiskAntalAnsatte: 35,
  kalender: 'Mandag - fredag',
  tidPaaDagen: 'Hele dagen',
  dobbeltTilsynsfoerende: true,
  forventetStartDato: '2021-08-01',
  forventetSlutDato: '2022-01-01',
  adresse: 'Havnegade 1, 8000 Aarhus C'
};
export const mockByggeplads2: Byggeplads = {
  id: 2,
  navn: 'Odense Havn',
  brugervendtNoegle: 'OH-001',
  status: true,
  fase: 'Under opførelse',
  forventetAntalVirksomheder: 3,
  forventetAntalAnsatte: 25,
  faktiskAntalAnsatte: 20,
  kalender: 'Mandag - fredag',
  tidPaaDagen: 'Hele dagen',
  dobbeltTilsynsfoerende: true,
  forventetStartDato: '2021-08-01',
  forventetSlutDato: '2022-01-01',
  adresse: 'Havnegade 1, 5000 Odense C'
};
export const mockByggeplads3: Byggeplads = {
  id: 3,
  navn: 'Københavns Havn',
  brugervendtNoegle: 'KH-001',
  status: true,
  fase: 'Under opførelse',
  forventetAntalVirksomheder: 7,
  forventetAntalAnsatte: 60,
  faktiskAntalAnsatte: 50,
  kalender: 'Mandag - fredag',
  tidPaaDagen: 'Hele dagen',
  dobbeltTilsynsfoerende: true,
  forventetStartDato: '2021-08-01',
  forventetSlutDato: '2022-01-01',
  adresse: 'Havnegade 1, 1000 København C'
};
export const mockLokation1: Lokation = {
  id: 1,
  brugervendtNoegle: 'LOK-001',
  navn: 'Emmerys Aarhus',
  berigetTelefonnummer: '12345678',
  adresse: 'Havnegade 1, 8000 Aarhus C',
  berigetEmail: '',
  aktiv: false,
  antalAnsatte: 0,
  gyldigFra: '',
  gyldigTil: '',
  kildeKode: ''
};
export const mockLokation2: Lokation = {
  id: 2,
  brugervendtNoegle: 'LOK-002',
  navn: 'Emmerys Odense',
  berigetTelefonnummer: '87654321',
  adresse: 'Havnegade 1, 5000 Odense C',
  berigetEmail: '',
  aktiv: false,
  antalAnsatte: 0,
  gyldigFra: '',
  gyldigTil: '',
  kildeKode: ''
};
export const mockLokation3: Lokation = {
  id: 3,
  brugervendtNoegle: 'LOK-003',
  navn: 'emmeys København',
  berigetTelefonnummer: '45678912',
  adresse: 'Havnegade 1, 1000 København C',
  berigetEmail: '',
  aktiv: false,
  antalAnsatte: 0,
  gyldigFra: '',
  gyldigTil: '',
  kildeKode: ''
};
