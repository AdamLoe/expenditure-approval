let knex = require("../helpers/knexfile");

let getCount = function(event, callback, filters) {
  return new Promise(function(resolve) {
    knex("requests")
      .where(filters)
      .count()
      .then(function(data) {
        resolve(data[0].count);
      })
      .catch(function(err) {
        console.log("Database count requests failed.", err);
        callback(err);
      });
  });
};

let getFilters = function(event) {
  let { status, requesterId, approverId } = event.body;

  let filters = {
    "requests.status": status,
    "requests.requesterid": requesterId,
    "requests.approverid": approverId
  };

  for (let i in filters) {
    if (filters[i] === "-1" || filters[i] === -1 || filters[i] === undefined) {
      delete filters[i];
    }
  }
  return filters;
};
let getFilter = (filter, key) => {
  console.log("filter", filter, key);
  if (filter === "-1" || filter === -1 || filter === undefined) {
    console.log("requests." + key);
    return "requests." + key;
  } else {
    return filter;
  }
};

//Searches Database with filters, returns requests objects
exports.queryRequest = async function(event, callback) {
  console.log("Query Requests Called", event.body);

  let { perPage, pageNum } = event.body;

  let filters = getFilters(event);

  let count = null;
  if (pageNum === 1 || pageNum === "1") {
    count = await getCount(event, callback, filters);
    console.log("GOT COUNT", count);
  }

  knex("requests")
    .select(
      "requests.*",
      "approvers.fullname as approvername",
      "requesters.fullname as requestername"
    )
    .where(filters)
    .limit(perPage)
    .offset(perPage * (pageNum - 1))
    .orderBy("createdate", "desc")
    .leftJoin("users as approvers", "requests.approverid", "approvers.id")
    .leftJoin("users as requesters", "requests.requesterid", "requesters.id")
    .then(function(data) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          array: data,
          count: count
        })
      });
    })
    .catch(function(err) {
      console.log("Database query requests failed.", err);
      callback(err);
    });
};
/*


console.log("Using filters", filters);
  knex("users")
    .rightJoin(
      knex("requests")
        .where(filters)
        .limit(perPage)
        .offset(perPage * (pageNum - 1))
        .orderBy("createdate", "desc")
    )
    .then(function(data) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          array: data,
          count: count
        })
      });
    })
    .catch(function(err) {
      console.log("Database query requests failed.", err);
      callback(err);
    });


	console.log("Using filters", filters);
	knex("requests")
		.where(filters)
		.limit(perPage)
		.offset(perPage * (pageNum - 1))
		.orderBy("createdate", "desc")
		.then(function(data) {
			callback(null, {
				"statusCode": 200,
				"body": JSON.stringify({
					array: data,
					count: count
				})
			});
		})
		.catch(function(err){
			console.log("Database query requests failed.", err);
			callback(err);
		});
 */
