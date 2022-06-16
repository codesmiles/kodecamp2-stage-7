const { Router } = require(`express`);
const router = Router()
const authFunc = require("../controllers/authController")


router.post(`/add-location`,authFunc.location_create_post);
router.patch(`/edit-location`, authFunc.location_edit_patch);
router.delete(`/delete-location`, authFunc.location_delete)
router.get(`/get-One-location`, authFunc.location_getOne_get)
router.get(`/get-all-locations`, authFunc.location_getAll_get)
router.post(`calculate-location-distance`,authFunc.location_calcLocation_post)



module.exports = router;