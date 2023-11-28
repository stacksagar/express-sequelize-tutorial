const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "viaduct.proxy.rlwy.net",
  username: 'root',
  database: "railway",
  password: "2-dE65-4HdGdgf5fBaF3cHb31f4B5-45",
  port: 13144
});

sequelize.authenticate().then(() => console.log("DB connected")).catch(error => {
  console.log('CONNECTION ERROR:', error?.message)
})

sequelize.sync({ force: false });

module.exports = sequelize;