const Dev = require('../models/Dev')
const parseStringAsArray = require('../models/utils/parseStringAsArray')


module.exports = {
    async index(req, res) {
        const { latitude, longitude, techs } = req.query

        const techsArray = parseStringAsArray(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray, //Procurar mongooperators
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordenaties: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                }
            }
        })

        return res.json({ devs })
    }
}