import * as fs from "fs";
import * as multer from "multer";
let y: any = {};


y.findLast = async (req: any, res: any) => {
    const gay = await fs.readFileSync("../assets/lastest.png");
    res.send(gay);
};

y.createOne = async (req: any, res: any) => {
    console.log(req.file);
    await //fs.writeFileSync("../assets/last.png", img);
    res.sendSatus(200).json({ message: "Created!" });
};

export default y;