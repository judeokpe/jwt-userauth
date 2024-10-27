import { authUser, logoutUser, registerUser, updateUserProfile, userProfile } from "../controllers/userController.js";
import { protect } from "../middlwares/authmiddleware.js";
import epxress from "express"

const router = epxress.Router()

router.post('/auth', authUser)
router.post('/', registerUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, userProfile).put(protect, updateUserProfile)



export default router