var Item = require('./models/item');

function getItems(res){
	Item.find(function(err, items) {
			if (err) {
				res.send(err)
			}
			res.json(items); // return all items in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all items
	app.get('/api/items', function(req, res) {
		getItems(res);
	});

	// create item and send back all items after creation
	app.post('/api/items', function(req, res) {
		// create an item, information comes from AJAX request from Angular
		Item.create({
			name: req.body.name,
			loc: req.body.loc,
			date: Date.now()
		}, function(err, item) {
			if (err)
				res.send(err);
			getItems(res); // get and return all items after you create another
		});
	});

	// delete a item
	app.delete('/api/items/:item_id', function(req, res) {
		Item.remove({
			_id : req.params.item_id
		}, function(err, item) {
			if (err)
				res.send(err);
			getItems(res); // get and return all items after you create another	
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};