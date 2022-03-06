import { Router } from "express";
import * as path from "path";
import multer from "multer";
import x from "../middlewares/ss";
import y from "../controllers/ssCtrl";

const router = new (Router as any);
const upload = multer({ dest: "../assets" });

router.get("/last", [x.checkExists], y.findLast);

router.post("/upload", [/*x.checkPass,*/ x.checkLength, upload.single("file")], y.createOne);

router.get("/", (req: any, res: any) => {
    res.sendFile(path.join(__dirname + "/../client/index.html"));
});

export default router;