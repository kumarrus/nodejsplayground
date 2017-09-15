/**
 * ImageController
 *
 * @description :: Server-side logic for managing Images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		Image.findAll({
			include: [
				{model: User}
			]
		}).then(function(images) {
			res.json(images);
		}).catch(function(err) {
			res.json(err);
		});
	}
};

