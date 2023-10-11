
export type country = {
  id: string;
  name: string;
  uri: any;
  answer: string[];
  correct: number;
  index: number;
};
export const DATAOCEANIA: country[] = [{
  id: 'AS',
    name: 'American Samoa',
  uri: "require('../../assets/flagpng/AS.png)",
  answer: [ 'Tonga', 'American Samoa', 'American Samoa', 'Papua New Guinea' ],
  correct: 1,
  index: 10
}
,
{
  id: 'AU',
    name: 'Úc',
  uri: "require('../../assets/flagpng/AU.png)",
  answer: [ 'Palau', 'Wallis và Futuna Islands', 'Úc', 'Cook Islands' ],
  correct: 2,
  index: 12
}
,
{
  id: 'CK',
    name: 'Cook Islands',
  uri: "require('../../assets/flagpng/CK.png)",
  answer: [ 'Vanuatu', 'American Samoa', 'New Zealand', 'Cook Islands' ],
  correct: 3,
  index: 43
}
,
{
  id: 'FJ',
    name: 'Fiji',
  uri: "require('../../assets/flagpng/FJ.png)",
  answer: [ 'Fiji', 'Tuvalu', 'Úc', 'Niue' ],
  correct: 0,
  index: 70
}
,
{
  id: 'FM',
    name: 'Micronesia',
  uri: "require('../../assets/flagpng/FM.png)",
  answer: [ 'Niue', 'Micronesia', 'Vanuatu', 'Úc' ],
  correct: 1,
  index: 72
}
,
{
  id: 'GU',
    name: 'Guam',
  uri: "require('../../assets/flagpng/GU.png)",
  answer: [ 'Guam', 'Tonga', 'Niue', 'Cook Islands' ],
  correct: 0,
  index: 95
}
,
{
  id: 'KI',
    name: 'Kiribati',
  uri: "require('../../assets/flagpng/KI.png)",
  answer: [ 'Kiribati', 'American Samoa', 'Tuvalu', 'Norfolk Island' ],
  correct: 0,
  index: 121
}
,
{
  id: 'MH',
    name: 'Marshall Islands',
  uri: "require('../../assets/flagpng/MH.png)",
  answer: [ 'Marshall Islands', 'Fiji', 'Pitcairn', 'Vanuatu' ],
  correct: 0,
  index: 146
}
,
{
  id: 'MP',
    name: 'Quần đảo Bắc Mariana',
  uri: "require('../../assets/flagpng/MP.png)",
  answer: [ 'Quần đảo Bắc Mariana', 'Quần đảo Bắc Mariana', 'Palau', 'Tuvalu' ],
  correct: 1,
  index: 152
}
,
{
  id: 'NC',
    name: 'New Caledonia',
  uri: "require('../../assets/flagpng/NC.png)",
  answer: [ 'Quần đảo Solomon', 'New Caledonia', 'New Caledonia', 'Tonga' ],
  correct: 2,
  index: 164
}
,
{
  id: 'NF',
    name: 'Norfolk Island',
  uri: "require('../../assets/flagpng/NF.png)",
  answer: [ 'American Samoa', 'Pitcairn', 'Norfolk Island', 'Tonga' ],
  correct: 2,
  index: 166
}
,
{
  id: 'NR',
    name: 'Nauru',
  uri: "require('../../assets/flagpng/NR.png)",
  answer: [ 'Fiji', 'Nauru', 'Wallis và Futuna Islands', 'New Zealand' ],
  correct: 1,
  index: 172
}
,
{
  id: 'NU',
    name: 'Niue',
  uri: "require('../../assets/flagpng/NU.png)",
  answer: [ 'Niue', 'Tokelau', 'Cook Islands', 'Vanuatu' ],
  correct: 0,
  index: 173
}
,
{
  id: 'NZ',
    name: 'New Zealand',
  uri: "require('../../assets/flagpng/NZ.png)",
  answer: [ 'Đông Timor', 'Marshall Islands', 'Vanuatu', 'New Zealand' ],
  correct: 3,
  index: 174
}
,
{
  id: 'PF',
    name: 'Polynésie thuộc Pháp',
  uri: "require('../../assets/flagpng/PF.png)",
  answer: [
  'Papua New Guinea',
  'Polynésie thuộc Pháp',
  'New Caledonia',
  'Vanuatu'
],
  correct: 1,
  index: 178
}
,
{
  id: 'PG',
    name: 'Papua New Guinea',
  uri: "require('../../assets/flagpng/PG.png)",
  answer: [ 'Guam', 'Samoa', 'Papua New Guinea', 'Papua New Guinea' ],
  correct: 2,
  index: 179
}
,
{
  id: 'PN',
    name: 'Pitcairn',
  uri: "require('../../assets/flagpng/PN.png)",
  answer: [ 'Vanuatu', 'Pitcairn', 'Cook Islands', 'Nauru' ],
  correct: 1,
  index: 184
}
,
{
  id: 'PW',
    name: 'Palau',
  uri: "require('../../assets/flagpng/PW.png)",
  answer: [ 'Vanuatu', 'Palau', 'Micronesia', 'Niue' ],
  correct: 1,
  index: 188
}
,
{
  id: 'SB',
    name: 'Quần đảo Solomon',
  uri: "require('../../assets/flagpng/SB.png)",
  answer: [ 'Samoa', 'Nauru', 'Quần đảo Bắc Mariana', 'Quần đảo Solomon' ],
  correct: 3,
  index: 197
}
,
{
  id: 'TK',
    name: 'Tokelau',
  uri: "require('../../assets/flagpng/TK.png)",
  answer: [ 'Quần đảo Solomon', 'American Samoa', 'Tokelau', 'Vanuatu' ],
  correct: 2,
  index: 223
}
,
{
  id: 'TL',
    name: 'Đông Timor',
  uri: "require('../../assets/flagpng/TL.png)",
  answer: [ 'New Zealand', 'Quần đảo Bắc Mariana', 'Tonga', 'Đông Timor' ],
  correct: 3,
  index: 224
}
,
{
  id: 'TO',
    name: 'Tonga',
  uri: "require('../../assets/flagpng/TO.png)",
  answer: [ 'Tonga', 'Polynésie thuộc Pháp', 'Cook Islands', 'Tonga' ],
  correct: 3,
  index: 227
}
,
{
  id: 'TV',
    name: 'Tuvalu',
  uri: "require('../../assets/flagpng/TV.png)",
  answer: [ 'Úc', 'Tuvalu', 'Quần đảo Solomon', 'Tuvalu' ],
  correct: 1,
  index: 230
}
,
{
  id: 'VU',
    name: 'Vanuatu',
  uri: "require('../../assets/flagpng/VU.png)",
  answer: [ 'Quần đảo Solomon', 'Vanuatu', 'Samoa', 'Fiji' ],
  correct: 1,
  index: 244
}
,
{
  id: 'WF',
    name: 'Wallis và Futuna Islands',
  uri: "require('../../assets/flagpng/WF.png)",
  answer: [
  'Tuvalu',
  'Wallis và Futuna Islands',
  'Quần đảo Bắc Mariana',
  'Norfolk Island'
],
  correct: 1,
  index: 245
}
,
{
  id: 'WS',
    name: 'Samoa',
  uri: "require('../../assets/flagpng/WS.png)",
  answer: [ 'Tonga', 'Samoa', 'Quần đảo Bắc Mariana', 'Papua New Guinea' ],
  correct: 1,
  index: 246
}
,
{
  id: 'AS',
    name: 'American Samoa',
  uri: "require('../../assets/flagpng/AS.png)",
  answer: [
  'American Samoa',
  'American Samoa',
  'Papua New Guinea',
  'Wallis và Futuna Islands'
],
  correct: 1,
  index: 10
}
,
{
  id: 'AU',
    name: 'Úc',
  uri: "require('../../assets/flagpng/AU.png)",
  answer: [ 'Đông Timor', 'Tonga', 'Úc', 'Guam' ],
  correct: 2,
  index: 12
}
,
{
  id: 'CK',
    name: 'Cook Islands',
  uri: "require('../../assets/flagpng/CK.png)",
  answer: [ 'Cook Islands', 'Marshall Islands', 'Tonga', 'Palau' ],
  correct: 0,
  index: 43
}
,
{
  id: 'FJ',
    name: 'Fiji',
  uri: "require('../../assets/flagpng/FJ.png)",
  answer: [
  'Quần đảo Bắc Mariana',
  'Polynésie thuộc Pháp',
  'Wallis và Futuna Islands',
  'Fiji'
],
  correct: 3,
  index: 70
}
,
{
  id: 'FM',
    name: 'Micronesia',
  uri: "require('../../assets/flagpng/FM.png)",
  answer: [
  'Micronesia',
  'Wallis và Futuna Islands',
  'Papua New Guinea',
  'Guam'
],
  correct: 0,
  index: 72
}
,
{
  id: 'GU',
    name: 'Guam',
  uri: "require('../../assets/flagpng/GU.png)",
  answer: [ 'Fiji', 'Vanuatu', 'Guam', 'Norfolk Island' ],
  correct: 2,
  index: 95
}
,
{
  id: 'KI',
    name: 'Kiribati',
  uri: "require('../../assets/flagpng/KI.png)",
  answer: [ 'Đông Timor', 'Vanuatu', 'Micronesia', 'Kiribati' ],
  correct: 3,
  index: 121
}
,
{
  id: 'MH',
    name: 'Marshall Islands',
  uri: "require('../../assets/flagpng/MH.png)",
  answer: [ 'Papua New Guinea', 'Guam', 'Tuvalu', 'Marshall Islands' ],
  correct: 3,
  index: 146
}
,
{
  id: 'MP',
    name: 'Quần đảo Bắc Mariana',
  uri: "require('../../assets/flagpng/MP.png)",
  answer: [ 'Guam', 'Vanuatu', 'Quần đảo Solomon', 'Quần đảo Bắc Mariana' ],
  correct: 3,
  index: 152
}
,
{
  id: 'NC',
    name: 'New Caledonia',
  uri: "require('../../assets/flagpng/NC.png)",
  answer: [ 'Samoa', 'Pitcairn', 'New Caledonia', 'New Caledonia' ],
  correct: 2,
  index: 164
}
,
{
  id: 'NF',
    name: 'Norfolk Island',
  uri: "require('../../assets/flagpng/NF.png)",
  answer: [ 'Palau', 'Micronesia', 'Norfolk Island', 'Tonga' ],
  correct: 2,
  index: 166
}
,
{
  id: 'NR',
    name: 'Nauru',
  uri: "require('../../assets/flagpng/NR.png)",
  answer: [ 'Samoa', 'Quần đảo Bắc Mariana', 'Nauru', 'Niue' ],
  correct: 2,
  index: 172
}
,
{
  id: 'NU',
    name: 'Niue',
  uri: "require('../../assets/flagpng/NU.png)",
  answer: [ 'Samoa', 'Guam', 'Nauru', 'Niue' ],
  correct: 3,
  index: 173
}
,
{
  id: 'NZ',
    name: 'New Zealand',
  uri: "require('../../assets/flagpng/NZ.png)",
  answer: [
  'Đông Timor',
  'Wallis và Futuna Islands',
  'New Zealand',
  'Micronesia'
],
  correct: 2,
  index: 174
}
,
{
  id: 'PF',
    name: 'Polynésie thuộc Pháp',
  uri: "require('../../assets/flagpng/PF.png)",
  answer: [ 'New Caledonia', 'Polynésie thuộc Pháp', 'Đông Timor', 'Vanuatu' ],
  correct: 1,
  index: 178
}
,
{
  id: 'PG',
    name: 'Papua New Guinea',
  uri: "require('../../assets/flagpng/PG.png)",
  answer: [
  'Wallis và Futuna Islands',
  'Papua New Guinea',
  'Kiribati',
  'Đông Timor'
],
  correct: 1,
  index: 179
}
,
{
  id: 'PN',
    name: 'Pitcairn',
  uri: "require('../../assets/flagpng/PN.png)",
  answer: [ 'New Caledonia', 'Pitcairn', 'Vanuatu', 'Polynésie thuộc Pháp' ],
  correct: 1,
  index: 184
}
,
{
  id: 'PW',
    name: 'Palau',
  uri: "require('../../assets/flagpng/PW.png)",
  answer: [ 'Quần đảo Solomon', 'Palau', 'Cook Islands', 'Vanuatu' ],
  correct: 1,
  index: 188
}
,
{
  id: 'SB',
    name: 'Quần đảo Solomon',
  uri: "require('../../assets/flagpng/SB.png)",
  answer: [ 'Fiji', 'Quần đảo Solomon', 'Vanuatu', 'Quần đảo Solomon' ],
  correct: 1,
  index: 197
}
,
{
  id: 'TK',
    name: 'Tokelau',
  uri: "require('../../assets/flagpng/TK.png)",
  answer: [ 'Tokelau', 'Palau', 'Samoa', 'Úc' ],
  correct: 0,
  index: 223
}
,
{
  id: 'TL',
    name: 'Đông Timor',
  uri: "require('../../assets/flagpng/TL.png)",
  answer: [ 'Fiji', 'Tokelau', 'Tonga', 'Đông Timor' ],
  correct: 3,
  index: 224
}
,
{
  id: 'TO',
    name: 'Tonga',
  uri: "require('../../assets/flagpng/TO.png)",
  answer: [ 'Quần đảo Bắc Mariana', 'Tuvalu', 'Quần đảo Solomon', 'Tonga' ],
  correct: 3,
  index: 227
}
,
{
  id: 'TV',
    name: 'Tuvalu',
  uri: "require('../../assets/flagpng/TV.png)",
  answer: [ 'Tuvalu', 'Norfolk Island', 'Wallis và Futuna Islands', 'Úc' ],
  correct: 0,
  index: 230
}
,
{
  id: 'VU',
    name: 'Vanuatu',
  uri: "require('../../assets/flagpng/VU.png)",
  answer: [ 'Vanuatu', 'New Zealand', 'Quần đảo Bắc Mariana', 'Samoa' ],
  correct: 0,
  index: 244
}
,
{
  id: 'WF',
    name: 'Wallis và Futuna Islands',
  uri: "require('../../assets/flagpng/WF.png)",
  answer: [
  'Fiji',
  'Tuvalu',
  'Polynésie thuộc Pháp',
  'Wallis và Futuna Islands'
],
  correct: 3,
  index: 245
}
,
{
  id: 'WS',
    name: 'Samoa',
  uri: "require('../../assets/flagpng/WS.png)",
  answer: [ 'Niue', 'Marshall Islands', 'Samoa', 'Wallis và Futuna Islands' ],
  correct: 2,
  index: 246
}
,
]
