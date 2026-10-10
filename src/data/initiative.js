export const origin = 'https://sourceoftrust.org';
export const editor = {
  '@type': 'Person',
  '@id': origin + '/about/#stefan-mayr',
  name: 'Stefan Mayr',
};
export const initiative = {
  '@type': 'Organization',
  '@id': origin + '/#initiative',
  name: 'Source of Trust Initiative',
  alternateName: 'SoTI',
  url: origin + '/',
  sameAs: ['https://github.com/sourceoftrust'],
  description: 'An open initiative researching source recognition, selection, and citation in AI Search and GEO, and serving as Publisher and Maintainer of the Source of Trust reference framework.',
  founder: { '@id': editor['@id'] },
};
export const concept = {
  '@type': 'DefinedTerm',
  '@id': origin + '/#source-of-trust',
  name: 'Source of Trust',
  alternateName: 'SoT',
  url: origin + '/specification/source-of-trust/#4-core-definition',
  description: 'A Source of Trust (SoT) is an identifiable information-providing entity for which evidence of relevant competence, integrity, and reliable information practices justifies reliance on its attributable information within a defined context.',
};
