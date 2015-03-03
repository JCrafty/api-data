module.exports = function(app) {
  app.dataSources.db.automigrate('Purchase', function(err) {
    if (err) throw err;

    var purchases = [
      {
        taxyear: 2014,
        stopdate: "Thursday, May 8, 2014 2:41 PM",
        startdate: "Saturday, February 14, 2015 10:37 PM",
        banknumber: 81626346,
        bankname: "Wellsfargo",
        banktype: "Fiduciary",
        schedule: {
          defer: "Dec",
          days: "1st, 15th",
          months: "Jan, Apr, Jul, Oct",
          frequency: "TBD"
        },
        shares: 8,
        amount: 1100.64,
        shareclass: "A",
        fund: "AMCAP Fund",
        fundcode: 10,
        isActive: false,
        accountId: 1
      },
      {
        taxyear: 2015,
        stopdate: "Thursday, May 8, 2014 2:41 PM",
        startdate: "Saturday, February 14, 2015 10:37 PM",
        banknumber: 41242412,
        bankname: "Chase Bank",
        banktype: "Fiduciary",
        schedule: {
          defer: "Dec",
          days: "31st",
          months: "Jan, Apr, Jul, Oct",
          frequency: "TBD"
        },
        shares: 8,
        amount: 873.34,
        shareclass: "A",
        fund: "Fundamental Investors",
        fundcode: 3,
        isActive: false,
        accountId: 1
      },
      {
        taxyear: 2014,
        stopdate: "Thursday, May 8, 2014 2:41 PM",
        startdate: "Saturday, February 14, 2015 10:37 PM",
        banknumber: 96766416,
        bankname: "Bank of America",
        banktype: "Fiduciary",
        schedule: {
          defer: "Dec",
          days: "1st, 15th",
          months: "Jan, Apr, Jul, Oct",
          frequency: "TBD"
        },
        shares: 8,
        amount: 233.64,
        shareclass: "A",
        fund: "Growth Fund of America",
        fundcode: 9,
        isActive: false,
        accountId: 2
      }
    ];

    var count = purchases.length;

    purchases.forEach(function(purchase) {
      app.models.Purchase.create(purchase, function(err, instance) {
        if (err)
          return console.log(err);

        console.log('Purchase created:', instance);

        count--;

        if (count === 0)
          console.log('done');
      });
    });
  });
};
