const Sequelize = require('sequelize');
const db = require('../db');

const states = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY'
];

const Address = db.define('addresses', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  streetAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  aptSuiteNumber: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.ENUM,
    values: states,
    allowNull: false
  },
  zipCode: {
    type: Sequelize.INTEGER(5).ZEROFILL.UNSIGNED,
    allowNull: false
  }
});

module.exports = Address;
