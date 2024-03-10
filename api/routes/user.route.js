import express from 'express'
import { signOut, signin, signup } from '../controllers/auth.controller.js';
import { deleteUser, getUserListings, updateUser,getPlayers, getPlayersAll, getUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();
router.post('/signup',signup);
router.post('/signin',signin);
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/user/:id',getUser)
router.get('/signout',signOut)
router.get('/listings/:id',verifyToken,getUserListings);
router.get('/get', getPlayers);
router.get("/getall",getPlayersAll);
router.get('/contact/:id',verifyToken,getUser);
export default router;
