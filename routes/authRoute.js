const { Router } = require(`express`);
const router = Router()
const authFunc = require("../controllers/authController")


router.post(`/create_Location`,authFunc.location_create_post)
router.put(`/edit_Location`, authFunc.location_edit_put)
router.delete(`/delete_Location`, authFunc.location_delete)
router.get(`/get_One_Location`, authFunc.location_getOne_get)
router.get(`/get_All_Locations`, authFunc.location_getAll_get)
router.get(`/calculate_location_distance`,authFunc.location_calcLocation_get)
router.post(`calculate_location_distance`,authFunc.location_calcLocation_post)



module.exports = router;