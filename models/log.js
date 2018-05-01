module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    // ...
  })

  Log.associate = models => {
    // ...
  }

  return Log
}
