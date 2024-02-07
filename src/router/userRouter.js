import { Router } from "express";
import { createNewUser, deleteUsers, getAllUsers, updateUser } from "../controller/userController.js";

let userRouter= Router()
userRouter.route("/").post(createNewUser)
userRouter.route("/").get(getAllUsers)

userRouter.route( "/:id" ).delete(deleteUsers)

userRouter.route("/:id").patch(updateUser)
export default userRouter;  