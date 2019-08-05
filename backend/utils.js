const salt = process.env.SALT || 'Not$3cr3t';
const crypto = require('crypto');

const saltHash = str => {
  str += salt;
  const hash = crypto.createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
};

module.exports = saltHash;
