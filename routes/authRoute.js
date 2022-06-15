const { Router } = require(`express`);
const router = Router()
const authFunc = require("../controllers/authController")


router.post(`/register-location-data`,authFunc.location_create_post);
router.put(`/edit-location`, authFunc.location_edit_put);
router.delete(`/delete-location`, authFunc.location_delete)
router.get(`/get_One_location`, authFunc.location_getOne_get)
router.get(`/get_all_locations`, authFunc.location_getAll_get)
// router.get(`/calculate_location_distance`,authFunc.location_calcLocation_get)
router.post(`calculate_location_distance`,authFunc.location_calcLocation_post)



module.exports = router;