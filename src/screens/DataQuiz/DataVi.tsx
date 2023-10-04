import { Dimensions } from 'react-native';
import Svgs from '../../constants/Svgs';

const widthDimensions = Dimensions.get('window').width;
export type country = {
  id: string;
  name: string;
  uri: any;
  answer: string[];
  correct: number;
  index: number;
};
export const DATAVI: country[] = [
  {
    id: 'AD',
    name: 'Andorra',
    uri: require("../../assets/flagpng/ad.png"),
    answer: [ 'Bỉ', 'New Caledonia', 'Andorra', 'Slovakia' ],
    correct: 2,
    index: 0
  }
  ,
  {
    id: 'AE',
    name: 'Các tiểu vương quốc Ả Rập Thống nhất',
    uri: require("../../assets/flagpng/ae.png"),
    answer: [
      'Mỹ (Hoa Kỳ)',
      'Na Uy',
      'Bangladesh',
      'Các tiểu vương quốc Ả Rập Thống nhất'
    ],
    correct: 3,
    index: 1
  }
  ,
  {
    id: 'AF',
    name: 'Afghanistan',
    uri: require("../../assets/flagpng/af.png"),
    answer: [ 'Barbados', 'Gibraltar', 'Yemen', 'Afghanistan' ],
    correct: 3,
    index: 2
  }
  ,
  {
    id: 'AG',
    name: 'Antigua và Barbuda',
    uri: require("../../assets/flagpng/ag.png"),
    answer: [ 'Paraguay', 'Antigua và Barbuda', 'Đức', 'Saint Lucia' ],
    correct: 1,
    index: 3
  }
  ,
  {
    id: 'AI',
    name: 'Anguilla',
    uri: require("../../assets/flagpng/ai.png"),
    answer: [ 'Iceland', 'Tuvalu', 'Angola', 'Anguilla' ],
    correct: 3,
    index: 4
  }
  ,
  {
    id: 'AL',
    name: 'Albania',
    uri: require("../../assets/flagpng/al.png"),
    answer: [ 'Albania', 'Uzbekistan', 'Bangladesh', 'Na Uy' ],
    correct: 0,
    index: 5
  }
  ,
  {
    id: 'AM',
    name: 'Armenia',
    uri: require("../../assets/flagpng/am.png"),
    answer: [ 'Armenia', 'Đảo Bouvet', 'Hà Lan', 'Tuvalu' ],
    correct: 0,
    index: 6
  }
  ,
  {
    id: 'AO',
    name: 'Angola',
    uri: require("../../assets/flagpng/ao.png"),
    answer: [ 'Ba Lan', 'American Samoa', 'Angola', 'Triều Tiên' ],
    correct: 2,
    index: 7
  }
  ,
  {
    id: 'AQ',
    name: 'Antarctica',
    uri: require("../../assets/flagpng/aq.png"),
    answer: [ 'Antarctica', 'Quần đảo Bắc Mariana', 'Ả Rập Xê Út', 'Brazil' ],
    correct: 0,
    index: 8
  }
  ,
  {
    id: 'AR',
    name: 'Argentina',
    uri: require("../../assets/flagpng/ar.png"),
    answer: [ 'Ecuador', 'Thành Vatican', 'Argentina', 'Guatemala' ],
    correct: 2,
    index: 9
  }
  ,
  {
    id: 'AS',
    name: 'American Samoa',
    uri: require("../../assets/flagpng/as.png"),
    answer: [ 'Đảo Bouvet', 'Madagascar', 'American Samoa', 'Đông Timor' ],
    correct: 2,
    index: 10
  }
  ,
  {
    id: 'AT',
    name: 'Áo',
    uri: require("../../assets/flagpng/at.png"),
    answer: [ 'Áo', 'Lesotho', 'Cộng hòa Dominica', 'Papua New Guinea' ],
    correct: 0,
    index: 11
  }
  ,
  {
    id: 'AU',
    name: 'Úc',
    uri: require("../../assets/flagpng/au.png"),
    answer: [ 'Niger', 'Uganda', 'Các tiểu vương quốc Ả Rập Thống nhất', 'Úc' ],
    correct: 3,
    index: 12
  }
  ,
  {
    id: 'AW',
    name: 'Aruba',
    uri: require("../../assets/flagpng/aw.png"),
    answer: [ 'Martinique', 'Aruba', 'Sint Maarten', 'Scotland' ],
    correct: 1,
    index: 13
  }
  ,
  {
    id: 'AX',
    name: 'Åland Islands',
    uri: require("../../assets/flagpng/ax.png"),
    answer: [ 'Uzbekistan', 'Quần đảo Åland', 'Hy Lạp', 'Fiji' ],
    correct: 1,
    index: 14
  }
  ,
  {
    id: 'AZ',
    name: 'Azerbaijan',
    uri: require("../../assets/flagpng/az.png"),
    answer: [
      'Scotland',
      'Quần đảo Svalbard và Jan Mayen',
      'Azerbaijan',
      'Kyrgyzstan'
    ],
    correct: 2,
    index: 15
  }
  ,
  {
    id: 'BA',
    name: 'Bosnia và Herzegovina',
    uri: require("../../assets/flagpng/ba.png"),
    answer: [ 'Bosnia và Herzegovina', 'Tanzania', 'Costa Rica', 'Ma-rốc' ],
    correct: 0,
    index: 16
  }
  ,
  {
    id: 'BB',
    name: 'Barbados',
    uri: require("../../assets/flagpng/bb.png"),
    answer: [ 'Barbados', 'Qatar', 'Azerbaijan', 'Guinea-Bissau' ],
    correct: 0,
    index: 17
  }
  ,
  {
    id: 'BD',
    name: 'Bangladesh',
    uri: require("../../assets/flagpng/bd.png"),
    answer: [ 'Gibraltar', 'Albania', 'Rwanda', 'Bangladesh' ],
    correct: 3,
    index: 18
  }
  ,
  {
    id: 'BE',
    name: 'Bỉ',
    uri: require("../../assets/flagpng/be.png"),
    answer: [ 'Bỉ', 'Canada', 'Uganda', 'Saint Kitts và Nevis' ],
    correct: 0,
    index: 19
  }
  ,
  {
    id: 'BF',
    name: 'Burkina Faso',
    uri: require("../../assets/flagpng/bf.png"),
    answer: [ 'Indonesia', 'Benin', 'Burkina Faso', 'Kosovo' ],
    correct: 2,
    index: 20
  }
  ,
  {
    id: 'BG',
    name: 'Bulgaria',
    uri: require("../../assets/flagpng/bg.png"),
    answer: [ 'Guam', 'Trung Quốc', 'Bulgaria', 'Pitcairn' ],
    correct: 2,
    index: 21
  }
  ,
  {
    id: 'BH',
    name: 'Bahrain',
    uri: require("../../assets/flagpng/bh.png"),
    answer: [ 'Bahrain', 'Malta', 'Quần đảo Virgin', 'Phần Lan' ],
    correct: 0,
    index: 22
  }
  ,
  {
    id: 'BI',
    name: 'Burundi',
    uri: require("../../assets/flagpng/bi.png"),
    answer: [ 'Mali', 'Burundi', 'Vanuatu', 'Belize' ],
    correct: 1,
    index: 23
  }
  ,
  {
    id: 'BJ',
    name: 'Benin',
    uri: require("../../assets/flagpng/bj.png"),
    answer: [ 'Thành Vatican', 'Niger', 'Benin', 'Hà Lan' ],
    correct: 2,
    index: 24
  }
  ,
  {
    id: 'BL',
    name: 'Saint Barthélemy',
    uri: require("../../assets/flagpng/bl.png"),
    answer: [
      'Saint Barthélemy',
      'Bangladesh',
      'Kazakhstan',
      'Trinidad và Tobago'
    ],
    correct: 0,
    index: 25
  }
  ,
  {
    id: 'BM',
    name: 'Bermuda',
    uri: require("../../assets/flagpng/bm.png"),
    answer: [ 'Bermuda', 'Tây Sahara', 'São Tomé và Príncipe', 'Guinea-Bissau' ],
    correct: 0,
    index: 26
  }
  ,
  {
    id: 'BN',
    name: 'Brunei Darussalam',
    uri: require("../../assets/flagpng/bn.png"),
    answer: [ 'Romania', 'Nicaragua', 'Belize', 'Brunei Darussalam' ],
    correct: 3,
    index: 27
  }
  ,
  {
    id: 'BO',
    name: 'Bolivia',
    uri: require("../../assets/flagpng/bo.png"),
    answer: [ 'Liechtenstein', 'Argentina', 'Pitcairn', 'Bolivia' ],
    correct: 3,
    index: 28
  }
  ,
  {
    id: 'BR',
    name: 'Brazil',
    uri: require("../../assets/flagpng/br.png"),
    answer: [ 'Belize', 'Brazil', 'Qatar', 'Hồng Kông' ],
    correct: 1,
    index: 29
  }
  ,
  {
    id: 'BS',
    name: 'Bahamas',
    uri: require("../../assets/flagpng/bs.png"),
    answer: [ 'Sudan', 'Namibia', 'Ecuador', 'Bahamas' ],
    correct: 3,
    index: 30
  }
  ,
  {
    id: 'BT',
    name: 'Bhutan',
    uri: require("../../assets/flagpng/bt.png"),
    answer: [ 'Portugal', 'Afghanistan', 'Macao', 'Bhutan' ],
    correct: 3,
    index: 31
  }
  ,
  {
    id: 'BV',
    name: 'Đảo Bouvet',
    uri: require("../../assets/flagpng/bv.png"),
    answer: [ 'Zambia', 'Li-băng', 'Đảo Bouvet', 'Micronesia' ],
    correct: 2,
    index: 32
  }
  ,
  {
    id: 'BW',
    name: 'Botswana',
    uri: require("../../assets/flagpng/bw.png"),
    answer: [ 'Papua New Guinea', 'New Caledonia', 'Botswana', 'Trung Quốc' ],
    correct: 2,
    index: 33
  }
  ,
  {
    id: 'BY',
    name: 'Belarus',
    uri: require("../../assets/flagpng/by.png"),
    answer: [ 'Kuwait', 'Belarus', 'Áo', 'Ả Rập Xê Út' ],
    correct: 1,
    index: 34
  }
  ,
  {
    id: 'BZ',
    name: 'Belize',
    uri: require("../../assets/flagpng/bz.png"),
    answer: [ 'Belize', 'Quần đảo Cocos', 'Turkmenistan', 'Equatorial Guinea' ],
    correct: 0,
    index: 35
  }
  ,
  {
    id: 'CA',
    name: 'Canada',
    uri: require("../../assets/flagpng/ca.png"),
    answer: [
      'Canada',
      'Bermuda',
      'Quần đảo Svalbard và Jan Mayen',
      'Lithuania'
    ],
    correct: 0,
    index: 36
  }
  ,
  {
    id: 'CC',
    name: 'Quần đảo Cocos',
    uri: require("../../assets/flagpng/cc.png"),
    answer: [
      'Mauritius',
      'French Southern Territories',
      'Albania',
      'Quần đảo Cocos'
    ],
    correct: 3,
    index: 37
  }
  ,
  {
    id: 'CD',
    name: 'Congo, the Democratic Republic of the',
    uri: require("../../assets/flagpng/cd.png"),
    answer: [
      'Quần đảo Virgin',
      'Fiji',
      'Congo, the Democratic Republic of the',
      'Norfolk Island'
    ],
    correct: 2,
    index: 38
  }
  ,
  {
    id: 'CF',
    name: 'Cộng hòa Trung Phi',
    uri: require("../../assets/flagpng/cf.png"),
    answer: [ 'Thụy Sỹ', 'Panama', 'Guyana', 'Cộng hòa Trung Phi' ],
    correct: 3,
    index: 39
  }
  ,
  {
    id: 'CG',
    name: 'Republic of the Congo',
    uri: require("../../assets/flagpng/cg.png"),
    answer: [
      'Republic of the Congo',
      'Lãnh thổ Đảo Christmas',
      'Slovakia',
      'Namibia'
    ],
    correct: 0,
    index: 40
  }
  ,
  {
    id: 'CH',
    name: 'Thụy Sỹ',
    uri: require("../../assets/flagpng/ch.png"),
    answer: [ 'Honduras', 'Bhutan', 'Thụy Sỹ', 'Quần đảo Virgin' ],
    correct: 2,
    index: 41
  }
  ,
  {
    id: 'CI',
    name: 'Côte dIvoire',
    uri: require("../../assets/flagpng/ci.png"),
    answer: [ 'Côte dIvoire', 'Cameroon', 'Đài Loan', 'Mali' ],
    correct: 0,
    index: 42
  }
  ,
  {
    id: 'CK',
    name: 'Cook Islands',
    uri: require("../../assets/flagpng/ck.png"),
    answer: [ 'Cook Islands', 'São Tomé và Príncipe', 'Phần Lan', 'Guadeloupe' ],
    correct: 0,
    index: 43
  }
  ,
  {
    id: 'CL',
    name: 'Chile',
    uri: require("../../assets/flagpng/cl.png"),
    answer: [ 'Quần đảo Cocos', 'Latvia', 'Sudan', 'Chile' ],
    correct: 3,
    index: 44
  }
  ,
  {
    id: 'CM',
    name: 'Cameroon',
    uri: require("../../assets/flagpng/cm.png"),
    answer: [ 'Qatar', 'Cameroon', 'Quần đảo Cocos', 'Equatorial Guinea' ],
    correct: 1,
    index: 45
  }
  ,
  {
    id: 'CN',
    name: 'Trung Quốc',
    uri: require("../../assets/flagpng/cn.png"),
    answer: [ 'Trung Quốc', 'Úc', 'Venezuela', 'Mauritania' ],
    correct: 0,
    index: 46
  }
  ,
  {
    id: 'CO',
    name: 'Colombia',
    uri: require("../../assets/flagpng/co.png"),
    answer: [ 'Colombia', 'Việt Nam', 'Equatorial Guinea', 'Bulgaria' ],
    correct: 0,
    index: 47
  }
  ,
  {
    id: 'CR',
    name: 'Costa Rica',
    uri: require("../../assets/flagpng/cr.png"),
    answer: [ 'Kyrgyzstan', 'Paraguay', 'Costa Rica', 'Quần đảo Cocos' ],
    correct: 2,
    index: 48
  }
  ,
  {
    id: 'CU',
    name: 'Cuba',
    uri: require("../../assets/flagpng/cu.png"),
    answer: [ 'Brazil', 'Ấn Độ', 'Turkmenistan', 'Cuba' ],
    correct: 3,
    index: 49
  }
  ,
  {
    id: 'CV',
    name: 'Cape Verde',
    uri: require("../../assets/flagpng/cv.png"),
    answer: [ 'Cape Verde', 'Madagascar', 'Bulgaria', 'Oman' ],
    correct: 0,
    index: 50
  }
  ,
  {
    id: 'CW',
    name: 'Curaçao',
    uri: require("../../assets/flagpng/cw.png"),
    answer: [ 'Curaçao', 'Guadeloupe', 'Mỹ (Hoa Kỳ)', 'Azerbaijan' ],
    correct: 0,
    index: 51
  }
  ,
  {
    id: 'CX',
    name: 'Lãnh thổ Đảo Christmas',
    uri: require("../../assets/flagpng/cx.png"),
    answer: [ 'Panama', 'Grenada', 'Quần đảo Cayman', 'Lãnh thổ Đảo Christmas' ],
    correct: 3,
    index: 52
  }
  ,
  {
    id: 'CY',
    name: 'Đảo Síp',
    uri: require("../../assets/flagpng/cy.png"),
    answer: [ 'Ukraine', 'Liberia', 'Bhutan', 'Đảo Síp' ],
    correct: 3,
    index: 53
  }
  ,
  {
    id: 'CZ',
    name: 'Czech Republic',
    uri: require("../../assets/flagpng/cz.png"),
    answer: [
      'Czech Republic',
      'Đảo Heard và quần đảo McDonald',
      'Anh',
      'Qatar'
    ],
    correct: 0,
    index: 54
  }
  ,
  {
    id: 'DE',
    name: 'Đức',
    uri: require("../../assets/flagpng/de.png"),
    answer: [ 'Belarus', 'Quần đảo Turks và Caicos', 'Đức', 'Mexico' ],
    correct: 2,
    index: 55
  }
  ,
  {
    id: 'DJ',
    name: 'Djibouti',
    uri: require("../../assets/flagpng/dj.png"),
    answer: [ 'Pitcairn', 'Dominica', 'Guatemala', 'Djibouti' ],
    correct: 3,
    index: 56
  }
  ,
  {
    id: 'DK',
    name: 'Denmark',
    uri: require("../../assets/flagpng/dk.png"),
    answer: [ 'Antarctica', 'Denmark', 'Li-băng', 'Paraguay' ],
    correct: 1,
    index: 57
  }
  ,
  {
    id: 'DM',
    name: 'Dominica',
    uri: require("../../assets/flagpng/dm.png"),
    answer: [ 'Åland Islands', 'Tanzania', 'Quần đảo Bắc Mariana', 'Dominica' ],
    correct: 3,
    index: 58
  }
  ,
  {
    id: 'DO',
    name: 'Cộng hòa Dominica',
    uri: require("../../assets/flagpng/do.png"),
    answer: [ 'Campuchia', 'Cuba', 'Cộng hòa Dominica', 'São Tomé và Príncipe' ],
    correct: 2,
    index: 59
  }
  ,
  {
    id: 'DZ',
    name: 'Algeria',
    uri: require("../../assets/flagpng/dz.png"),
    answer: [ 'Cộng hòa Trung Phi', 'Algeria', 'Sudan', 'Kiribati' ],
    correct: 1,
    index: 60
  }
  ,
  {
    id: 'EC',
    name: 'Ecuador',
    uri: require("../../assets/flagpng/ec.png"),
    answer: [ 'Ecuador', 'Kuwait', 'Tanzania', 'Saint Vincent và Grenadines' ],
    correct: 0,
    index: 61
  }
  ,
  {
    id: 'EE',
    name: 'Estonia',
    uri: require("../../assets/flagpng/ee.png"),
    answer: [ 'Guyane thuộc Pháp', 'Estonia', 'Lào', 'Slovenia' ],
    correct: 1,
    index: 62
  }
  ,
  {
    id: 'EG',
    name: 'Egypt',
    uri: require("../../assets/flagpng/eg.png"),
    answer: [ 'Egypt', 'Monaco', 'Trinidad và Tobago', 'Egypt' ],
    correct: 0,
    index: 63
  }
  ,
  {
    id: 'EH',
    name: 'Tây Sahara',
    uri: require("../../assets/flagpng/eh.png"),
    answer: [ 'Tây Sahara', 'Tanzania', 'Bhutan', 'Ma-rốc' ],
    correct: 0,
    index: 64
  }
  ,
  {
    id: 'ER',
    name: 'Eritrea',
    uri: require("../../assets/flagpng/er.png"),
    answer: [ 'Eritrea', 'Hungary', 'Serbia', 'Hà Lan' ],
    correct: 0,
    index: 65
  }
  ,
  {
    id: 'ES',
    name: 'Tây Ban Nha',
    uri: require("../../assets/flagpng/es.png"),
    answer: [ 'Lãnh thổ Đảo Christmas', 'Tây Ban Nha', 'Somalia', 'Italy' ],
    correct: 1,
    index: 66
  }
  ,
  {
    id: 'ET',
    name: 'Ethiopia',
    uri: require("../../assets/flagpng/et.png"),
    answer: [ 'Saint Barthélemy', 'Kuwait', 'Ethiopia', 'Việt Nam' ],
    correct: 2,
    index: 67
  }
  ,
  {
    id: 'EU',
    name: 'Liên minh châu Âu',
    uri: require("../../assets/flagpng/eu.png"),
    answer: [ 'Quần đảo Solomon', 'Liên minh châu Âu', 'Iraq', 'Chile' ],
    correct: 1,
    index: 68
  }
  ,
  {
    id: 'FI',
    name: 'Phần Lan',
    uri: require("../../assets/flagpng/fi.png"),
    answer: [
      'Egypt',
      'Quần đảo Svalbard và Jan Mayen',
      'Saint Martin',
      'Phần Lan'
    ],
    correct: 3,
    index: 69
  }
  ,
  {
    id: 'FJ',
    name: 'Fiji',
    uri: require("../../assets/flagpng/fj.png"),
    answer: [ 'Namibia', 'Zimbabwe', 'Antigua và Barbuda', 'Fiji' ],
    correct: 3,
    index: 70
  }
  ,
  {
    id: 'FK',
    name: 'Quần đảo Falkland',
    uri: require("../../assets/flagpng/fk.png"),
    answer: [
      'Quần đảo Falkland',
      'Mauritania',
      'Lãnh thổ Đảo Christmas',
      'Papua New Guinea'
    ],
    correct: 0,
    index: 71
  }
  ,
  {
    id: 'FM',
    name: 'Micronesia',
    uri: require("../../assets/flagpng/fm.png"),
    answer: [ 'Micronesia', 'Quần đảo Solomon', 'Pháp', 'Lesotho' ],
    correct: 0,
    index: 72
  }
  ,
  {
    id: 'FO',
    name: 'Quần đảo Faroe',
    uri: require("../../assets/flagpng/fo.png"),
    answer: [ 'Azerbaijan', 'Pakistan', 'Quần đảo Faroe', 'Mali' ],
    correct: 2,
    index: 73
  }
  ,
  {
    id: 'FR',
    name: 'Pháp',
    uri: require("../../assets/flagpng/fr.png"),
    answer: [ 'Benin', 'Tây Ban Nha', 'Pháp', 'Lesotho' ],
    correct: 2,
    index: 74
  }
  ,
  {
    id: 'GA',
    name: 'Gabon',
    uri: require("../../assets/flagpng/ga.png"),
    answer: [ 'Lãnh thổ Anh tại Ấn Độ Dương', 'Burundi', 'Chad', 'Gabon' ],
    correct: 3,
    index: 75
  }
  ,
  {
    id: 'GB-ENG',
    name: 'Anh',
    uri: require("../../assets/flagpng/gb-eng.png"),
    answer: [ 'Tây Ban Nha', 'Anh', 'Montenegro', 'Peru' ],
    correct: 1,
    index: 76
  }
  ,
  {
    id: 'GB-NIR',
    name: 'Bắc Ireland ',
    uri: require("../../assets/flagpng/gb-nir.png"),
    answer: [ 'Hàn Quốc', 'Sint Maarten', 'Angola', 'Bắc Ireland ' ],
    correct: 3,
    index: 77
  }
  ,
  {
    id: 'GB-SCT',
    name: 'Scotland',
    uri: require("../../assets/flagpng/gb-sct.png"),
    answer: [ 'Li-băng', 'Scotland', 'Ethiopia', 'Vanuatu' ],
    correct: 1,
    index: 78
  }
  ,
  {
    id: 'GB-WLS',
    name: 'Wales',
    uri: require("../../assets/flagpng/gb-wls.png"),
    answer: [ 'Wales', 'Georgia', 'Senegal', 'Hungary' ],
    correct: 0,
    index: 79
  }
  ,
  {
    id: 'GB',
    name: 'Vương quốc Anh',
    uri: require("../../assets/flagpng/gb.png"),
    answer: [
      'Vương quốc Anh',
      'Lãnh thổ Đảo Christmas',
      'Comoros',
      'Polynésie thuộc Pháp'
    ],
    correct: 0,
    index: 80
  }
  ,
  {
    id: 'GD',
    name: 'Grenada',
    uri: require("../../assets/flagpng/gd.png"),
    answer: [ 'Pháp', 'Grenada', 'Syria', 'Malaysia' ],
    correct: 1,
    index: 81
  }
  ,
  {
    id: 'GE',
    name: 'Georgia',
    uri: require("../../assets/flagpng/ge.png"),
    answer: [ 'Thụy Điển', 'Georgia', 'Canada', 'Guadeloupe' ],
    correct: 1,
    index: 82
  }
  ,
  {
    id: 'GF',
    name: 'Guyane thuộc Pháp',
    uri: require("../../assets/flagpng/gf.png"),
    answer: [ 'Ethiopia', 'Nhật Bản', 'Guyane thuộc Pháp', 'Ba Lan' ],
    correct: 2,
    index: 83
  }
  ,
  {
    id: 'GG',
    name: 'Guernsey',
    uri: require("../../assets/flagpng/gg.png"),
    answer: [ 'Kyrgyzstan', 'Denmark', 'Swaziland', 'Guernsey' ],
    correct: 3,
    index: 84
  }
  ,
  {
    id: 'GH',
    name: 'Ghana',
    uri: require("../../assets/flagpng/gh.png"),
    answer: [ 'Bulgaria', 'Namibia', 'Ghana', 'Tonga' ],
    correct: 2,
    index: 85
  }
  ,
  {
    id: 'GI',
    name: 'Gibraltar',
    uri: require("../../assets/flagpng/gi.png"),
    answer: [ 'Gibraltar', 'New Caledonia', 'Sudan', 'Hà Lan' ],
    correct: 0,
    index: 86
  }
  ,
  {
    id: 'GL',
    name: 'Greenland',
    uri: require("../../assets/flagpng/gl.png"),
    answer: [ 'Scotland', 'Guadeloupe', 'Greenland', 'Uruguay' ],
    correct: 2,
    index: 87
  }
  ,
  {
    id: 'GM',
    name: 'Gambia',
    uri: require("../../assets/flagpng/gm.png"),
    answer: [ 'Grenada', 'Quần đảo Virgin', 'Gambia', 'Comoros' ],
    correct: 2,
    index: 88
  }
  ,
  {
    id: 'GN',
    name: 'Guinea',
    uri: require("../../assets/flagpng/gn.png"),
    answer: [ 'Martinique', 'Guinea', 'Brazil', 'Tunisia' ],
    correct: 1,
    index: 89
  }
  ,
  {
    id: 'GP',
    name: 'Guadeloupe',
    uri: require("../../assets/flagpng/gp.png"),
    answer: [ 'Kazakhstan', 'Đài Loan', 'Guadeloupe', 'Andorra' ],
    correct: 2,
    index: 90
  }
  ,
  {
    id: 'GQ',
    name: 'Equatorial Guinea',
    uri: require("../../assets/flagpng/gq.png"),
    answer: [ 'Italy', 'Philippines', 'Egypt', 'Equatorial Guinea' ],
    correct: 3,
    index: 91
  }
  ,
  {
    id: 'GR',
    name: 'Hy Lạp',
    uri: require("../../assets/flagpng/gr.png"),
    answer: [
      'Cộng hòa Dominica',
      'Saint Helena, Ascension và Tristan da Cunha',
      'Lãnh thổ Anh tại Ấn Độ Dương',
      'Hy Lạp'
    ],
    correct: 3,
    index: 92
  }
  ,
  {
    id: 'GS',
    name: 'Nam Georgia và Quần đảo Nam Sandwich',
    uri: require("../../assets/flagpng/gs.png"),
    answer: [
      'Việt Nam',
      'Nam Georgia và Quần đảo Nam Sandwich',
      'Tây Ban Nha',
      'Myanmar'
    ],
    correct: 1,
    index: 93
  }
  ,
  {
    id: 'GT',
    name: 'Guatemala',
    uri: require("../../assets/flagpng/gt.png"),
    answer: [ 'Guatemala', 'Israel', 'Quần đảo Solomon', 'Thụy Sỹ' ],
    correct: 0,
    index: 94
  }
  ,
  {
    id: 'GU',
    name: 'Guam',
    uri: require("../../assets/flagpng/gu.png"),
    answer: [ 'Guam', 'Seychelles', 'Bắc Ireland ', 'Israel' ],
    correct: 0,
    index: 95
  }
  ,
  {
    id: 'GW',
    name: 'Guinea-Bissau',
    uri: require("../../assets/flagpng/gw.png"),
    answer: [ 'Sri Lanka', 'Syria', 'Guinea-Bissau', 'Georgia' ],
    correct: 2,
    index: 96
  }
  ,
  {
    id: 'GY',
    name: 'Guyana',
    uri: require("../../assets/flagpng/gy.png"),
    answer: [ 'Triều Tiên', 'Tajikistan', 'Guyana', 'Antarctica' ],
    correct: 2,
    index: 97
  }
  ,
  {
    id: 'HK',
    name: 'Hồng Kông',
    uri: require("../../assets/flagpng/hk.png"),
    answer: [
      'Saint Vincent và Grenadines',
      'Quần đảo Bắc Mariana',
      'Antarctica',
      'Hồng Kông'
    ],
    correct: 3,
    index: 98
  }
  ,
  {
    id: 'HM',
    name: 'Đảo Heard và quần đảo McDonald',
    uri: require("../../assets/flagpng/hm.png"),
    answer: [
      'Đảo Heard và quần đảo McDonald',
      'Sierra Leone',
      'Croatia',
      'Ecuador'
    ],
    correct: 0,
    index: 99
  }
  ,
  {
    id: 'HN',
    name: 'Honduras',
    uri: require("../../assets/flagpng/hn.png"),
    answer: [ 'Honduras', 'Bosnia và Herzegovina', 'Zambia', 'Myanmar' ],
    correct: 0,
    index: 100
  }
  ,
  {
    id: 'HR',
    name: 'Croatia',
    uri: require("../../assets/flagpng/hr.png"),
    answer: [ 'Polynésie thuộc Pháp', 'Benin', 'Croatia', 'Jordan' ],
    correct: 2,
    index: 101
  }
  ,
  {
    id: 'HT',
    name: 'Haiti',
    uri: require("../../assets/flagpng/ht.png"),
    answer: [ 'Anh', 'Saint Martin', 'Haiti', 'Mỹ' ],
    correct: 2,
    index: 102
  }
  ,
  {
    id: 'HU',
    name: 'Hungary',
    uri: require("../../assets/flagpng/hu.png"),
    answer: [ 'Hungary', 'Montserrat', 'Quần đảo Cocos', 'Réunion' ],
    correct: 0,
    index: 103
  }
  ,
  {
    id: 'ID',
    name: 'Indonesia',
    uri: require("../../assets/flagpng/id.png"),
    answer: [ 'New Zealand', 'Cộng hòa Trung Phi', 'Ghana', 'Indonesia' ],
    correct: 3,
    index: 104
  }
  ,
  {
    id: 'IE',
    name: 'Ireland',
    uri: require("../../assets/flagpng/ie.png"),
    answer: [ 'Ireland', 'Moldova', 'Fiji', 'Niue' ],
    correct: 0,
    index: 105
  }
  ,
  {
    id: 'IL',
    name: 'Israel',
    uri: require("../../assets/flagpng/il.png"),
    answer: [ 'Israel', 'Greenland', 'Algeria', 'Thụy Điển' ],
    correct: 0,
    index: 106
  }
  ,
  {
    id: 'IM',
    name: 'Isle of Man',
    uri: require("../../assets/flagpng/im.png"),
    answer: [ 'Scotland', 'Isle of Man', 'Indonesia', 'Sint Maarten' ],
    correct: 1,
    index: 107
  }
  ,
  {
    id: 'IN',
    name: 'Ấn Độ',
    uri: require("../../assets/flagpng/in.png"),
    answer: [ 'Ấn Độ', 'Nhật Bản', 'Quần đảo Faroe', 'Paraguay' ],
    correct: 0,
    index: 108
  }
  ,
  {
    id: 'IO',
    name: 'Lãnh thổ Anh tại Ấn Độ Dương',
    uri: require("../../assets/flagpng/io.png"),
    answer: [ 'Georgia', 'Lãnh thổ Anh tại Ấn Độ Dương', 'Serbia', 'Na Uy' ],
    correct: 1,
    index: 109
  }
  ,
  {
    id: 'IQ',
    name: 'Iraq',
    uri: require("../../assets/flagpng/iq.png"),
    answer: [ 'Armenia', 'Réunion', 'Iraq', 'Myanmar' ],
    correct: 2,
    index: 110
  }
  ,
  {
    id: 'IR',
    name: 'Iran',
    uri: require("../../assets/flagpng/ir.png"),
    answer: [ 'Palau', 'Lithuania', 'Georgia', 'Iran' ],
    correct: 3,
    index: 111
  }
  ,
  {
    id: 'IS',
    name: 'Iceland',
    uri: require("../../assets/flagpng/is.png"),
    answer: [
      'Iceland',
      'Papua New Guinea',
      'Guyane thuộc Pháp',
      'Guinea-Bissau'
    ],
    correct: 0,
    index: 112
  }
  ,
  {
    id: 'IT',
    name: 'Italy',
    uri: require("../../assets/flagpng/it.png"),
    answer: [ 'Nga', 'Italy', 'Sri Lanka', 'Cộng hòa Dominica' ],
    correct: 1,
    index: 113
  }
  ,
  {
    id: 'JE',
    name: 'Jersey',
    uri: require("../../assets/flagpng/je.png"),
    answer: [ 'Anguilla', 'Nigeria', 'Jersey', 'Thổ Nhĩ Kỳ' ],
    correct: 2,
    index: 114
  }
  ,
  {
    id: 'JM',
    name: 'Jamaica',
    uri: require("../../assets/flagpng/jm.png"),
    answer: [
      'Quần đảo Faroe',
      'Wallis và Futuna Islands',
      'Nam Georgia và Quần đảo Nam Sandwich',
      'Jamaica'
    ],
    correct: 3,
    index: 115
  }
  ,
  {
    id: 'JO',
    name: 'Jordan',
    uri: require("../../assets/flagpng/jo.png"),
    answer: [ 'Mali', 'Jordan', 'Micronesia', 'Zimbabwe' ],
    correct: 1,
    index: 116
  }
  ,
  {
    id: 'JP',
    name: 'Nhật Bản',
    uri: require("../../assets/flagpng/jp.png"),
    answer: [ 'Bahamas', 'Monaco', 'Nhật Bản', 'Syria' ],
    correct: 2,
    index: 117
  }
  ,
  {
    id: 'KE',
    name: 'Kenya',
    uri: require("../../assets/flagpng/ke.png"),
    answer: [ 'Kuwait', 'Tây Sahara', 'Kenya', 'Sierra Leone' ],
    correct: 2,
    index: 118
  }
  ,
  {
    id: 'KG',
    name: 'Kyrgyzstan',
    uri: require("../../assets/flagpng/kg.png"),
    answer: [ 'Campuchia', 'Bermuda', 'Kyrgyzstan', 'Kazakhstan' ],
    correct: 2,
    index: 119
  }
  ,
  {
    id: 'KH',
    name: 'Campuchia',
    uri: require("../../assets/flagpng/kh.png"),
    answer: [ 'Jamaica', 'Campuchia', 'Mỹ', 'Barbados' ],
    correct: 1,
    index: 120
  }
  ,
  {
    id: 'KI',
    name: 'Kiribati',
    uri: require("../../assets/flagpng/ki.png"),
    answer: [ 'Syria', 'Kiribati', 'Macao', 'Dominica' ],
    correct: 1,
    index: 121
  }
  ,
  {
    id: 'KM',
    name: 'Comoros',
    uri: require("../../assets/flagpng/km.png"),
    answer: [ 'Sudan', 'Triều Tiên', 'Colombia', 'Comoros' ],
    correct: 3,
    index: 122
  }
  ,
  {
    id: 'KN',
    name: 'Saint Kitts và Nevis',
    uri: require("../../assets/flagpng/kn.png"),
    answer: [ 'Đức', 'Saint Kitts và Nevis', 'Kiribati', 'Ukraine' ],
    correct: 1,
    index: 123
  }
  ,
  {
    id: 'KP',
    name: 'Triều Tiên',
    uri: require("../../assets/flagpng/kp.png"),
    answer: [ 'Triều Tiên', 'Pitcairn', 'Luxembourg', 'Anh' ],
    correct: 0,
    index: 124
  }
  ,
  {
    id: 'KR',
    name: 'Hàn Quốc',
    uri: require("../../assets/flagpng/kr.png"),
    answer: [ 'Uzbekistan', 'Moldova', 'Tây Ban Nha', 'Hàn Quốc' ],
    correct: 3,
    index: 125
  }
  ,
  {
    id: 'KW',
    name: 'Kuwait',
    uri: require("../../assets/flagpng/kw.png"),
    answer: [ 'Seychelles', 'Kuwait', 'Mauritania', 'Fiji' ],
    correct: 1,
    index: 126
  }
  ,
  {
    id: 'KY',
    name: 'Quần đảo Cayman',
    uri: require("../../assets/flagpng/ky.png"),
    answer: [ 'Quần đảo Faroe', 'Thái Lan', 'Iran', 'Quần đảo Cayman' ],
    correct: 3,
    index: 127
  }
  ,
  {
    id: 'KZ',
    name: 'Kazakhstan',
    uri: require("../../assets/flagpng/kz.png"),
    answer: [ 'Costa Rica', 'Kazakhstan', 'Quần đảo Virgin', 'Malawi' ],
    correct: 1,
    index: 128
  }
  ,
  {
    id: 'LA',
    name: 'Lào',
    uri: require("../../assets/flagpng/la.png"),
    answer: [ 'Lào', 'Venezuela', 'Aruba', 'Martinique' ],
    correct: 0,
    index: 129
  }
  ,
  {
    id: 'LB',
    name: 'Li-băng',
    uri: require("../../assets/flagpng/lb.png"),
    answer: [ 'Mexico', 'Saint Pierre và Miquelon', 'Li-băng', 'Pháp' ],
    correct: 2,
    index: 130
  }
  ,
  {
    id: 'LC',
    name: 'Saint Lucia',
    uri: require("../../assets/flagpng/lc.png"),
    answer: [ 'Saint Lucia', 'Moldova', 'Saint Pierre và Miquelon', 'Belarus' ],
    correct: 0,
    index: 131
  }
  ,
  {
    id: 'LI',
    name: 'Liechtenstein',
    uri: require("../../assets/flagpng/li.png"),
    answer: [ 'Isle of Man', 'Nga', 'Bangladesh', 'Liechtenstein' ],
    correct: 3,
    index: 132
  }
  ,
  {
    id: 'LK',
    name: 'Sri Lanka',
    uri: require("../../assets/flagpng/lk.png"),
    answer: [ 'Bhutan', 'Sri Lanka', 'Liberia', 'Somalia' ],
    correct: 1,
    index: 133
  }
  ,
  {
    id: 'LR',
    name: 'Liberia',
    uri: require("../../assets/flagpng/lr.png"),
    answer: [ 'Phần Lan', 'Mauritius', 'Liberia', 'Tokelau' ],
    correct: 2,
    index: 134
  }
  ,
  {
    id: 'LS',
    name: 'Lesotho',
    uri: require("../../assets/flagpng/ls.png"),
    answer: [ 'Lesotho', 'Moldova', 'Denmark', 'Palau' ],
    correct: 0,
    index: 135
  }
  ,
  {
    id: 'LT',
    name: 'Lithuania',
    uri: require("../../assets/flagpng/lt.png"),
    answer: [
      'Saint Helena, Ascension và Tristan da Cunha',
      'Burkina Faso',
      'Malta',
      'Lithuania'
    ],
    correct: 3,
    index: 136
  }
  ,
  {
    id: 'LU',
    name: 'Luxembourg',
    uri: require("../../assets/flagpng/lu.png"),
    answer: [
      'Italy',
      'Luxembourg',
      'Congo, the Democratic Republic of the',
      'Quần đảo Turks và Caicos'
    ],
    correct: 1,
    index: 137
  }
  ,
  {
    id: 'LV',
    name: 'Latvia',
    uri: require("../../assets/flagpng/lv.png"),
    answer: [ 'Chile', 'Latvia', 'Liechtenstein', 'Palestine' ],
    correct: 1,
    index: 138
  }
  ,
  {
    id: 'LY',
    name: 'Libya',
    uri: require("../../assets/flagpng/ly.png"),
    answer: [ 'New Caledonia', 'Libya', 'Nam Phi', 'Đảo Síp' ],
    correct: 1,
    index: 139
  }
  ,
  {
    id: 'MA',
    name: 'Ma-rốc',
    uri: require("../../assets/flagpng/ma.png"),
    answer: [ 'Đài Loan', 'Wales', 'Equatorial Guinea', 'Ma-rốc' ],
    correct: 3,
    index: 140
  }
  ,
  {
    id: 'MC',
    name: 'Monaco',
    uri: require("../../assets/flagpng/mc.png"),
    answer: [ 'Saint Vincent và Grenadines', 'Albania', 'Montserrat', 'Monaco' ],
    correct: 3,
    index: 141
  }
  ,
  {
    id: 'MD',
    name: 'Moldova',
    uri: require("../../assets/flagpng/md.png"),
    answer: [
      'Moldova',
      'Honduras',
      'Úc',
      'Saint Helena, Ascension và Tristan da Cunha'
    ],
    correct: 0,
    index: 142
  }
  ,
  {
    id: 'ME',
    name: 'Montenegro',
    uri: require("../../assets/flagpng/me.png"),
    answer: [ 'Montenegro', 'South Sudan', 'Iraq', 'Bosnia và Herzegovina' ],
    correct: 0,
    index: 143
  }
  ,
  {
    id: 'MF',
    name: 'Saint Martin',
    uri: require("../../assets/flagpng/mf.png"),
    answer: [ 'Brazil', 'Hàn Quốc', 'Turkmenistan', 'Saint Martin' ],
    correct: 3,
    index: 144
  }
  ,
  {
    id: 'MG',
    name: 'Madagascar',
    uri: require("../../assets/flagpng/mg.png"),
    answer: [ 'Réunion', 'Madagascar', 'Libya', 'Antigua và Barbuda' ],
    correct: 1,
    index: 145
  }
  ,
  {
    id: 'MH',
    name: 'Marshall Islands',
    uri: require("../../assets/flagpng/mh.png"),
    answer: [
      'Saint Pierre và Miquelon',
      'Marshall Islands',
      'Guyana',
      'Djibouti'
    ],
    correct: 1,
    index: 146
  }
  ,
  {
    id: 'MK',
    name: 'North Macedonia',
    uri: require("../../assets/flagpng/mk.png"),
    answer: [ 'Paraguay', 'Iran', 'Djibouti', 'North Macedonia' ],
    correct: 3,
    index: 147
  }
  ,
  {
    id: 'ML',
    name: 'Mali',
    uri: require("../../assets/flagpng/ml.png"),
    answer: [ 'Curaçao', 'Mali', 'Quần đảo Bắc Mariana', 'Réunion' ],
    correct: 1,
    index: 148
  }
  ,
  {
    id: 'MM',
    name: 'Myanmar',
    uri: require("../../assets/flagpng/mm.png"),
    answer: [ 'Myanmar', 'Kenya', 'Đức', 'Ả Rập Xê Út' ],
    correct: 0,
    index: 149
  }
  ,
  {
    id: 'MN',
    name: 'Mongolia',
    uri: require("../../assets/flagpng/mn.png"),
    answer: [ 'Belize', 'Greenland', 'Nepal', 'Mongolia' ],
    correct: 3,
    index: 150
  }
  ,
  {
    id: 'MO',
    name: 'Macao',
    uri: require("../../assets/flagpng/mo.png"),
    answer: [ 'Macao', 'Bermuda', 'Indonesia', 'Uruguay' ],
    correct: 0,
    index: 151
  }
  ,
  {
    id: 'MP',
    name: 'Quần đảo Bắc Mariana',
    uri: require("../../assets/flagpng/mp.png"),
    answer: [
      'Quần đảo Bắc Mariana',
      'Saint Kitts và Nevis',
      'Egypt',
      'Somalia'
    ],
    correct: 0,
    index: 152
  }
  ,
  {
    id: 'MQ',
    name: 'Martinique',
    uri: require("../../assets/flagpng/mq.png"),
    answer: [ 'Martinique', 'Mexico', 'Philippines', 'Algeria' ],
    correct: 0,
    index: 153
  }
  ,
  {
    id: 'MR',
    name: 'Mauritania',
    uri: require("../../assets/flagpng/mr.png"),
    answer: [
      'Mauritania',
      'Senegal',
      'Argentina',
      'Đảo Heard và quần đảo McDonald'
    ],
    correct: 0,
    index: 154
  }
  ,
  {
    id: 'MS',
    name: 'Montserrat',
    uri: require("../../assets/flagpng/ms.png"),
    answer: [ 'Bangladesh', 'Sierra Leone', 'Croatia', 'Montserrat' ],
    correct: 3,
    index: 155
  }
  ,
  {
    id: 'MT',
    name: 'Malta',
    uri: require("../../assets/flagpng/mt.png"),
    answer: [ 'Hà Lan', 'Hồng Kông', 'Malta', 'El Salvador' ],
    correct: 2,
    index: 156
  }
  ,
  {
    id: 'MU',
    name: 'Mauritius',
    uri: require("../../assets/flagpng/mu.png"),
    answer: [
      'Mauritius',
      'Ukraine',
      'Ấn Độ',
      'Congo, the Democratic Republic of the'
    ],
    correct: 0,
    index: 157
  }
  ,
  {
    id: 'MV',
    name: 'Maldives',
    uri: require("../../assets/flagpng/mv.png"),
    answer: [ 'Triều Tiên', 'Maldives', 'Quần đảo Virgin', 'Bolivia' ],
    correct: 1,
    index: 158
  }
  ,
  {
    id: 'MW',
    name: 'Malawi',
    uri: require("../../assets/flagpng/mw.png"),
    answer: [ 'Latvia', 'Bỉ', 'Malawi', 'Nepal' ],
    correct: 2,
    index: 159
  }
  ,
  {
    id: 'MX',
    name: 'Mexico',
    uri: require("../../assets/flagpng/mx.png"),
    answer: [ 'Mexico', 'Paraguay', 'Bulgaria', 'Kuwait' ],
    correct: 0,
    index: 160
  }
  ,
  {
    id: 'MY',
    name: 'Malaysia',
    uri: require("../../assets/flagpng/my.png"),
    answer: [ 'Mozambique', 'Palau', 'Canada', 'Malaysia' ],
    correct: 3,
    index: 161
  }
  ,
  {
    id: 'MZ',
    name: 'Mozambique',
    uri: require("../../assets/flagpng/mz.png"),
    answer: [ 'Tây Sahara', 'Iceland', 'Ukraine', 'Mozambique' ],
    correct: 3,
    index: 162
  }
  ,
  {
    id: 'NA',
    name: 'Namibia',
    uri: require("../../assets/flagpng/na.png"),
    answer: [ 'Namibia', 'Nigeria', 'Đảo Bouvet', 'Portugal' ],
    correct: 0,
    index: 163
  }
  ,
  {
    id: 'NC',
    name: 'New Caledonia',
    uri: require("../../assets/flagpng/nc.png"),
    answer: [
      'Saint Pierre và Miquelon',
      'New Caledonia',
      'Phần Lan',
      'Indonesia'
    ],
    correct: 1,
    index: 164
  }
  ,
  {
    id: 'NE',
    name: 'Niger',
    uri: require("../../assets/flagpng/ne.png"),
    answer: [ 'Fiji', 'Gibraltar', 'Niger', 'Togo' ],
    correct: 2,
    index: 165
  }
  ,
  {
    id: 'NF',
    name: 'Norfolk Island',
    uri: require("../../assets/flagpng/nf.png"),
    answer: [ 'Palau', 'Đức', 'Haiti', 'Norfolk Island' ],
    correct: 3,
    index: 166
  }
  ,
  {
    id: 'NG',
    name: 'Nigeria',
    uri: require("../../assets/flagpng/ng.png"),
    answer: [ 'Antarctica', 'Nigeria', 'Romania', 'Nigeria' ],
    correct: 3,
    index: 167
  }
  ,
  {
    id: 'NI',
    name: 'Nicaragua',
    uri: require("../../assets/flagpng/ni.png"),
    answer: [ 'Nicaragua', 'Nepal', 'Benin', 'Lào' ],
    correct: 0,
    index: 168
  }
  ,
  {
    id: 'NL',
    name: 'Hà Lan',
    uri: require("../../assets/flagpng/nl.png"),
    answer: [ 'Saint Kitts và Nevis', 'Czech Republic', 'Hà Lan', 'Slovenia' ],
    correct: 2,
    index: 169
  }
  ,
  {
    id: 'NO',
    name: 'Na Uy',
    uri: require("../../assets/flagpng/no.png"),
    answer: [ 'Georgia', 'Na Uy', 'Tonga', 'Na Uy' ],
    correct: 3,
    index: 170
  }
  ,
  {
    id: 'NP',
    name: 'Nepal',
    uri: require("../../assets/flagpng/np.png"),
    answer: [ 'Swaziland', 'Nepal', 'Canada', 'Malta' ],
    correct: 1,
    index: 171
  }
  ,
  {
    id: 'NR',
    name: 'Nauru',
    uri: require("../../assets/flagpng/nr.png"),
    answer: [ 'Guam', 'Pakistan', 'Argentina', 'Nauru' ],
    correct: 3,
    index: 172
  }
  ,
  {
    id: 'NU',
    name: 'Niue',
    uri: require("../../assets/flagpng/nu.png"),
    answer: [ 'Niue', 'Đông Timor', 'Aruba', 'Madagascar' ],
    correct: 0,
    index: 173
  }
  ,
  {
    id: 'NZ',
    name: 'New Zealand',
    uri: require("../../assets/flagpng/nz.png"),
    answer: [
      'Quần đảo Cayman',
      'New Zealand',
      'Guernsey',
      'Saint Helena, Ascension và Tristan da Cunha'
    ],
    correct: 1,
    index: 174
  }
  ,
  {
    id: 'OM',
    name: 'Oman',
    uri: require("../../assets/flagpng/om.png"),
    answer: [ 'Panama', 'Úc', 'Oman', 'New Caledonia' ],
    correct: 2,
    index: 175
  }
  ,
  {
    id: 'PA',
    name: 'Panama',
    uri: require("../../assets/flagpng/pa.png"),
    answer: [ 'Lãnh thổ Anh tại Ấn Độ Dương', 'Panama', 'Áo', 'Puerto Rico' ],
    correct: 1,
    index: 176
  }
  ,
  {
    id: 'PE',
    name: 'Peru',
    uri: require("../../assets/flagpng/pe.png"),
    answer: [ 'Peru', 'Ghana', 'Qatar', 'Trung Quốc' ],
    correct: 0,
    index: 177
  }
  ,
  {
    id: 'PF',
    name: 'Polynésie thuộc Pháp',
    uri: require("../../assets/flagpng/pf.png"),
    answer: [
      'Wales',
      'Liechtenstein',
      'Polynésie thuộc Pháp',
      'Saint Pierre và Miquelon'
    ],
    correct: 2,
    index: 178
  }
  ,
  {
    id: 'PG',
    name: 'Papua New Guinea',
    uri: require("../../assets/flagpng/pg.png"),
    answer: [ 'Tây Sahara', 'Papua New Guinea', 'Iraq', 'San Marino' ],
    correct: 1,
    index: 179
  }
  ,
  {
    id: 'PH',
    name: 'Philippines',
    uri: require("../../assets/flagpng/ph.png"),
    answer: [ 'Djibouti', 'Philippines', 'Jersey', 'Peru' ],
    correct: 1,
    index: 180
  }
  ,
  {
    id: 'PK',
    name: 'Pakistan',
    uri: require("../../assets/flagpng/pk.png"),
    answer: [ 'Phần Lan', 'Pakistan', 'Montenegro', 'Somalia' ],
    correct: 1,
    index: 181
  }
  ,
  {
    id: 'PL',
    name: 'Ba Lan',
    uri: require("../../assets/flagpng/pl.png"),
    answer: [ 'Tây Sahara', 'Haiti', 'Ba Lan', 'Suriname' ],
    correct: 2,
    index: 182
  }
  ,
  {
    id: 'PM',
    name: 'Saint Pierre và Miquelon',
    uri: require("../../assets/flagpng/pm.png"),
    answer: [
      'El Salvador',
      'Marshall Islands',
      'Saint Pierre và Miquelon',
      'Colombia'
    ],
    correct: 2,
    index: 183
  }
  ,
  {
    id: 'PN',
    name: 'Pitcairn',
    uri: require("../../assets/flagpng/pn.png"),
    answer: [ 'Pitcairn', 'Haiti', 'Quần đảo Solomon', 'Cameroon' ],
    correct: 0,
    index: 184
  }
  ,
  {
    id: 'PR',
    name: 'Puerto Rico',
    uri: require("../../assets/flagpng/pr.png"),
    answer: [ 'Portugal', 'Sri Lanka', 'Anguilla', 'Puerto Rico' ],
    correct: 3,
    index: 185
  }
  ,
  {
    id: 'PS',
    name: 'Palestine',
    uri: require("../../assets/flagpng/ps.png"),
    answer: [ 'Polynésie thuộc Pháp', 'Palestine', 'Bỉ', 'Gibraltar' ],
    correct: 1,
    index: 186
  }
  ,
  {
    id: 'PT',
    name: 'Portugal',
    uri: require("../../assets/flagpng/pt.png"),
    answer: [ 'Malta', 'Sierra Leone', 'Czech Republic', 'Portugal' ],
    correct: 3,
    index: 187
  }
  ,
  {
    id: 'PW',
    name: 'Palau',
    uri: require("../../assets/flagpng/pw.png"),
    answer: [
      'Quần đảo Svalbard và Jan Mayen',
      'Mexico',
      'Palau',
      'Bosnia và Herzegovina'
    ],
    correct: 2,
    index: 188
  }
  ,
  {
    id: 'PY',
    name: 'Paraguay',
    uri: require("../../assets/flagpng/py.png"),
    answer: [ 'Paraguay', 'Mauritania', 'Palestine', 'Bosnia và Herzegovina' ],
    correct: 0,
    index: 189
  }
  ,
  {
    id: 'QA',
    name: 'Qatar',
    uri: require("../../assets/flagpng/qa.png"),
    answer: [ 'Denmark', 'Qatar', 'Réunion', 'Israel' ],
    correct: 1,
    index: 190
  }
  ,
  {
    id: 'RE',
    name: 'Réunion',
    uri: require("../../assets/flagpng/re.png"),
    answer: [ 'Vương quốc Anh', 'Réunion', 'Maldives', 'Panama' ],
    correct: 1,
    index: 191
  }
  ,
  {
    id: 'RO',
    name: 'Romania',
    uri: require("../../assets/flagpng/ro.png"),
    answer: [
      'Venezuela',
      'Các tiểu vương quốc Ả Rập Thống nhất',
      'Namibia',
      'Romania'
    ],
    correct: 3,
    index: 192
  }
  ,
  {
    id: 'RS',
    name: 'Serbia',
    uri: require("../../assets/flagpng/rs.png"),
    answer: [ 'Serbia', 'Nga', 'Đảo Síp', 'Na Uy' ],
    correct: 0,
    index: 193
  }
  ,
  {
    id: 'RU',
    name: 'Nga',
    uri: require("../../assets/flagpng/ru.png"),
    answer: [ 'Nga', 'Palestine', 'Grenada', 'Saint Kitts và Nevis' ],
    correct: 0,
    index: 194
  }
  ,
  {
    id: 'RW',
    name: 'Rwanda',
    uri: require("../../assets/flagpng/rw.png"),
    answer: [ 'Rwanda', 'Thổ Nhĩ Kỳ', 'Côte dIvoire', 'Liberia' ],
    correct: 0,
    index: 195
  }
  ,
  {
    id: 'SA',
    name: 'Ả Rập Xê Út',
    uri: require("../../assets/flagpng/sa.png"),
    answer: [
      'Polynésie thuộc Pháp',
      'Ả Rập Xê Út',
      'Bahamas',
      'Quần đảo Bắc Mariana'
    ],
    correct: 1,
    index: 196
  }
  ,
  {
    id: 'SB',
    name: 'Quần đảo Solomon',
    uri: require("../../assets/flagpng/sb.png"),
    answer: [ 'Quần đảo Solomon', 'Mozambique', 'Sudan', 'Canada' ],
    correct: 0,
    index: 197
  }
  ,
  {
    id: 'SC',
    name: 'Seychelles',
    uri: require("../../assets/flagpng/sc.png"),
    answer: [ 'Seychelles', 'Senegal', 'Côte dIvoire', 'Li-băng' ],
    correct: 0,
    index: 198
  }
  ,
  {
    id: 'SD',
    name: 'Sudan',
    uri: require("../../assets/flagpng/sd.png"),
    answer: [ 'Sudan', 'Đức', 'Singapore', 'Campuchia' ],
    correct: 0,
    index: 199
  }
  ,
  {
    id: 'SE',
    name: 'Thụy Điển',
    uri: require("../../assets/flagpng/se.png"),
    answer: [ 'Thụy Điển', 'Pháp', 'Quần đảo Svalbard và Jan Mayen', 'Malaysia' ],
    correct: 0,
    index: 200
  }
  ,
  {
    id: 'SG',
    name: 'Singapore',
    uri: require("../../assets/flagpng/sg.png"),
    answer: [ 'Bhutan', 'Singapore', 'Mauritius', 'Seychelles' ],
    correct: 1,
    index: 201
  }
  ,
  {
    id: 'SH',
    name: 'Saint Helena, Ascension và Tristan da Cunha',
    uri: require("../../assets/flagpng/sh.png"),
    answer: [
      'Bahamas',
      'Saint Helena, Ascension và Tristan da Cunha',
      'Quần đảo Svalbard và Jan Mayen',
      'Hungary'
    ],
    correct: 1,
    index: 202
  }
  ,
  {
    id: 'SI',
    name: 'Slovenia',
    uri: require("../../assets/flagpng/si.png"),
    answer: [ 'Oman', 'Bosnia và Herzegovina', 'Slovenia', 'Moldova' ],
    correct: 2,
    index: 203
  }
  ,
  {
    id: 'SJ',
    name: 'Quần đảo Svalbard và Jan Mayen',
    uri: require("../../assets/flagpng/sj.png"),
    answer: [
      'Mali',
      'Quần đảo Svalbard và Jan Mayen',
      'Đài Loan',
      'Cook Islands'
    ],
    correct: 1,
    index: 204
  }
  ,
  {
    id: 'SK',
    name: 'Slovakia',
    uri: require("../../assets/flagpng/sk.png"),
    answer: [ 'Bỉ', 'Thành Vatican', 'Slovakia', 'Kuwait' ],
    correct: 2,
    index: 205
  }
  ,
  {
    id: 'SL',
    name: 'Sierra Leone',
    uri: require("../../assets/flagpng/sl.png"),
    answer: [ 'Úc', 'Moldova', 'Sierra Leone', 'Qatar' ],
    correct: 2,
    index: 206
  }
  ,
  {
    id: 'SM',
    name: 'San Marino',
    uri: require("../../assets/flagpng/sm.png"),
    answer: [ 'Ukraine', 'Jamaica', 'Bắc Ireland ', 'San Marino' ],
    correct: 3,
    index: 207
  }
  ,
  {
    id: 'SN',
    name: 'Senegal',
    uri: require("../../assets/flagpng/sn.png"),
    answer: [ 'Đông Timor', 'Ghana', 'Senegal', 'Georgia' ],
    correct: 2,
    index: 208
  }
  ,
  {
    id: 'SO',
    name: 'Somalia',
    uri: require("../../assets/flagpng/so.png"),
    answer: [ 'Somalia', 'Martinique', 'Belarus', 'Réunion' ],
    correct: 0,
    index: 209
  }
  ,
  {
    id: 'SR',
    name: 'Suriname',
    uri: require("../../assets/flagpng/sr.png"),
    answer: [ 'Azerbaijan', 'Quần đảo Virgin', 'Equatorial Guinea', 'Suriname' ],
    correct: 3,
    index: 210
  }
  ,
  {
    id: 'SS',
    name: 'South Sudan',
    uri: require("../../assets/flagpng/ss.png"),
    answer: [ 'Pitcairn', 'South Sudan', 'Azerbaijan', 'Gibraltar' ],
    correct: 1,
    index: 211
  }
  ,
  {
    id: 'ST',
    name: 'São Tomé và Príncipe',
    uri: require("../../assets/flagpng/st.png"),
    answer: [ 'Syria', 'Brunei Darussalam', 'Lithuania', 'São Tomé và Príncipe' ],
    correct: 3,
    index: 212
  }
  ,
  {
    id: 'SV',
    name: 'El Salvador',
    uri: require("../../assets/flagpng/sv.png"),
    answer: [ 'El Salvador', 'New Caledonia', 'Quần đảo Solomon', 'Bỉ' ],
    correct: 0,
    index: 213
  }
  ,
  {
    id: 'SX',
    name: 'Sint Maarten',
    uri: require("../../assets/flagpng/sx.png"),
    answer: [
      'Na Uy',
      'Burundi',
      'Saint Helena, Ascension và Tristan da Cunha',
      'Sint Maarten'
    ],
    correct: 3,
    index: 214
  }
  ,
  {
    id: 'SY',
    name: 'Syria',
    uri: require("../../assets/flagpng/sy.png"),
    answer: [ 'Malta', 'Syria', 'Romania', 'Cook Islands' ],
    correct: 1,
    index: 215
  }
  ,
  {
    id: 'SZ',
    name: 'Swaziland',
    uri: require("../../assets/flagpng/sz.png"),
    answer: [ 'Bosnia và Herzegovina', 'Israel', 'Swaziland', 'Sierra Leone' ],
    correct: 2,
    index: 216
  }
  ,
  {
    id: 'TC',
    name: 'Quần đảo Turks và Caicos',
    uri: require("../../assets/flagpng/tc.png"),
    answer: [
      'Các tiểu vương quốc Ả Rập Thống nhất',
      'Quần đảo Turks và Caicos',
      'Qatar',
      'Guatemala'
    ],
    correct: 1,
    index: 217
  }
  ,
  {
    id: 'TD',
    name: 'Chad',
    uri: require("../../assets/flagpng/td.png"),
    answer: [
      'Guyane thuộc Pháp',
      'Lãnh thổ Anh tại Ấn Độ Dương',
      'Chad',
      'Đông Timor'
    ],
    correct: 2,
    index: 218
  }
  ,
  {
    id: 'TF',
    name: 'French Southern Territories',
    uri: require("../../assets/flagpng/tf.png"),
    answer: [
      'Serbia',
      'Quần đảo Cocos',
      'Madagascar',
      'French Southern Territories'
    ],
    correct: 3,
    index: 219
  }
  ,
  {
    id: 'TG',
    name: 'Togo',
    uri: require("../../assets/flagpng/tg.png"),
    answer: [ 'Papua New Guinea', 'Nicaragua', 'Belarus', 'Togo' ],
    correct: 3,
    index: 220
  }
  ,
  {
    id: 'TH',
    name: 'Thái Lan',
    uri: require("../../assets/flagpng/th.png"),
    answer: [ 'Pitcairn', 'Gibraltar', 'Armenia', 'Thái Lan' ],
    correct: 3,
    index: 221
  }
  ,
  {
    id: 'TJ',
    name: 'Tajikistan',
    uri: require("../../assets/flagpng/tj.png"),
    answer: [ 'South Sudan', 'Macao', 'Tajikistan', 'Georgia' ],
    correct: 2,
    index: 222
  }
  ,
  {
    id: 'TK',
    name: 'Tokelau',
    uri: require("../../assets/flagpng/tk.png"),
    answer: [
      'Montserrat',
      'Quần đảo Svalbard và Jan Mayen',
      'Tokelau',
      'Dominica'
    ],
    correct: 2,
    index: 223
  }
  ,
  {
    id: 'TL',
    name: 'Đông Timor',
    uri: require("../../assets/flagpng/tl.png"),
    answer: [ 'Saint Martin', 'Romania', 'Đông Timor', 'Afghanistan' ],
    correct: 2,
    index: 224
  }
  ,
  {
    id: 'TM',
    name: 'Turkmenistan',
    uri: require("../../assets/flagpng/tm.png"),
    answer: [ 'Mexico', 'Turkmenistan', 'Anguilla', 'Pitcairn' ],
    correct: 1,
    index: 225
  }
  ,
  {
    id: 'TN',
    name: 'Tunisia',
    uri: require("../../assets/flagpng/tn.png"),
    answer: [ 'Pháp', 'Isle of Man', 'Ả Rập Xê Út', 'Tunisia' ],
    correct: 3,
    index: 226
  }
  ,
  {
    id: 'TO',
    name: 'Tonga',
    uri: require("../../assets/flagpng/to.png"),
    answer: [ 'Papua New Guinea', 'Tonga', 'Bahrain', 'Saint Lucia' ],
    correct: 1,
    index: 227
  }
  ,
  {
    id: 'TR',
    name: 'Thổ Nhĩ Kỳ',
    uri: require("../../assets/flagpng/tr.png"),
    answer: [ 'Scotland', 'Thổ Nhĩ Kỳ', 'Greenland', 'Chad' ],
    correct: 1,
    index: 228
  }
  ,
  {
    id: 'TT',
    name: 'Trinidad và Tobago',
    uri: require("../../assets/flagpng/tt.png"),
    answer: [ 'Pháp', 'Trinidad và Tobago', 'Yemen', 'Campuchia' ],
    correct: 1,
    index: 229
  }
  ,
  {
    id: 'TV',
    name: 'Tuvalu',
    uri: require("../../assets/flagpng/tv.png"),
    answer: [ 'Bulgaria', 'Somalia', 'Tuvalu', 'Isle of Man' ],
    correct: 2,
    index: 230
  }
  ,
  {
    id: 'TW',
    name: 'Đài Loan',
    uri: require("../../assets/flagpng/tw.png"),
    answer: [ 'Đài Loan', 'Indonesia', 'Seychelles', 'Đức' ],
    correct: 0,
    index: 231
  }
  ,
  {
    id: 'TZ',
    name: 'Tanzania',
    uri: require("../../assets/flagpng/tz.png"),
    answer: [ 'Tanzania', 'Angola', 'Ấn Độ', 'Venezuela' ],
    correct: 0,
    index: 232
  }
  ,
  {
    id: 'UA',
    name: 'Ukraine',
    uri: require("../../assets/flagpng/ua.png"),
    answer: [ 'Anh', 'Ukraine', 'Panama', 'Sri Lanka' ],
    correct: 1,
    index: 233
  }
  ,
  {
    id: 'UG',
    name: 'Uganda',
    uri: require("../../assets/flagpng/ug.png"),
    answer: [ 'Curaçao', 'Nepal', 'Uganda', 'Croatia' ],
    correct: 2,
    index: 234
  }
  ,
  {
    id: 'US',
    name: 'Mỹ (Hoa Kỳ)',
    uri: require("../../assets/flagpng/us.png"),
    answer: [ 'Mỹ (Hoa Kỳ)', 'Rwanda', 'Chile', 'Guatemala' ],
    correct: 0,
    index: 235
  }
  ,
  {
    id: 'UY',
    name: 'Uruguay',
    uri: require("../../assets/flagpng/uy.png"),
    answer: [ 'Uruguay', 'Thổ Nhĩ Kỳ', 'Saint Barthélemy', 'Madagascar' ],
    correct: 0,
    index: 236
  }
  ,
  {
    id: 'UZ',
    name: 'Uzbekistan',
    uri: require("../../assets/flagpng/uz.png"),
    answer: [ 'American Samoa', 'Bắc Macedonia', 'Madagascar', 'Uzbekistan' ],
    correct: 3,
    index: 237
  }
  ,
  {
    id: 'VA',
    name: 'Thành Vatican',
    uri: require("../../assets/flagpng/va.png"),
    answer: [ 'Hàn Quốc', 'Ba Lan', 'Colombia', 'Thành Vatican' ],
    correct: 3,
    index: 238
  }
  ,
  {
    id: 'VC',
    name: 'Saint Vincent và Grenadines',
    uri: require("../../assets/flagpng/vc.png"),
    answer: [
      'Nhật Bản',
      'Saint Vincent và Grenadines',
      'Thụy Sỹ',
      'Seychelles'
    ],
    correct: 1,
    index: 239
  }
  ,
  {
    id: 'VE',
    name: 'Venezuela',
    uri: require("../../assets/flagpng/ve.png"),
    answer: [ 'Jersey', 'Trung Quốc', 'Venezuela', 'Palestine' ],
    correct: 2,
    index: 240
  }
  ,
  {
    id: 'VG',
    name: 'Quần đảo Virgin',
    uri: require("../../assets/flagpng/vg.png"),
    answer: [
      'Tây Sahara',
      'Lãnh thổ Anh tại Ấn Độ Dương',
      'Nga',
      'Quần đảo Virgin'
    ],
    correct: 3,
    index: 241
  }
  ,
  {
    id: 'VI',
    name: 'Quần đảo Virgin',
    uri: require("../../assets/flagpng/vi.png"),
    answer: [ 'Bosnia và Herzegovina', 'Togo', 'Quần đảo Virgin', 'Madagascar' ],
    correct: 2,
    index: 242
  }
  ,
  {
    id: 'VN',
    name: 'Việt Nam',
    uri: require("../../assets/flagpng/vn.png"),
    answer: [
      'Algeria',
      'Việt Nam',
      'Nam Georgia và Quần đảo Nam Sandwich',
      'Senegal'
    ],
    correct: 1,
    index: 243
  }
  ,
  {
    id: 'VU',
    name: 'Vanuatu',
    uri: require("../../assets/flagpng/vu.png"),
    answer: [ 'Singapore', 'Vanuatu', 'Guinea', 'Trung Quốc' ],
    correct: 1,
    index: 244
  }
  ,
  {
    id: 'WF',
    name: 'Wallis và Futuna Islands',
    uri: require("../../assets/flagpng/wf.png"),
    answer: [ 'Serbia', 'Belize', 'Wallis và Futuna', 'Lithuania' ],
    correct: 2,
    index: 245
  }
  ,
  {
    id: 'WS',
    name: 'Samoa',
    uri: require("../../assets/flagpng/ws.png"),
    answer: [ 'Côte dIvoire', 'Serbia', 'Samoa', 'Malta' ],
    correct: 2,
    index: 246
  }
  ,
  {
    id: 'XK',
    name: 'Kosovo',
    uri: require("../../assets/flagpng/xk.png"),
    answer: [ 'Curaçao', 'Luxembourg', 'Kosovo', 'Ả Rập Xê Út' ],
    correct: 2,
    index: 247
  }
  ,
  {
    id: 'YE',
    name: 'Yemen',
    uri: require("../../assets/flagpng/ye.png"),
    answer: [
      'Anh',
      'Yemen',
      'Zimbabwe',
      'Nam Georgia và Quần đảo Nam Sandwich'
    ],
    correct: 1,
    index: 248
  }
  ,
  {
    id: 'YT',
    name: 'Mayotte',
    uri: require("../../assets/flagpng/yt.png"),
    answer: [ 'Gambia', 'Slovakia', 'Andorra', 'Mayotte' ],
    correct: 3,
    index: 249
  }
  ,
  {
    id: 'ZA',
    name: 'Nam Phi',
    uri: require("../../assets/flagpng/za.png"),
    answer: [
      'Nam Phi',
      'American Samoa',
      'Nam Georgia và Quần đảo Nam Sandwich',
      'Portugal'
    ],
    correct: 0,
    index: 250
  }
  ,
  {
    id: 'ZM',
    name: 'Zambia',
    uri: require("../../assets/flagpng/zm.png"),
    answer: [ 'Ireland', 'Grenada', 'Wallis và Futuna', 'Zambia' ],
    correct: 3,
    index: 251
  }
  ,
  {
    id: 'ZW',
    name: 'Zimbabwe',
    uri: require("../../assets/flagpng/zw.png"),
    answer: [ 'Bolivia', 'Rwanda', 'Zimbabwe', 'Malawi' ],
    correct: 2,
    index: 252
  },
];
