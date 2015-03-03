module.exports = function(app) {
  var Account = app.models.Account;

  // define a custom scope
  //Customer.scope('youngFolks', {where: {age: {lte: 22 }}});

  app.dataSources.db.automigrate('Account', function(err) {
    if (err) throw err;

    var accounts = [
      {
        firstname: 'Joe', 
        lastname: 'Smith',
        availablefunds: ['AMCAP', 'Growth Fund of America', 'Fundamental Investors']
      },
      {
        firstname: 'John',
        lastname: 'Baker',
        availablefunds: ['AMCAP', 'Growth Fund of America', 'Fundamental Investors']
      },
      {
        firstname: 'Tom',
        lastname: 'Tucker',
        availablefunds: ['AMCAP', 'Growth Fund of America', 'Fundamental Investors']
      }
    ];

    var count = accounts.length;

    accounts.forEach(function(account) {
      Account.create(account, function(err, instance) {
        if (err)
          return console.log(err);

        console.log('Account created:', instance);

        count--;

        if (count === 0)
          console.log('Done');
      });
    });
  });
};
