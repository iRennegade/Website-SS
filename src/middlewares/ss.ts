import * as fs from "fs";
var x: any = {};

x.checkExistsForCreate = async (req: any, res: any, next: any) => {
    if (fs.existsSync("../assets/last.png")) {
        await fs.unlinkSync("../assets/last.png");
        next();
    } else {
        next();
    }
};

x.checkExists = async (req: any, res: any, next: any) => {
    if (!fs.existsSync("../assets/last.png")) {
        res.status(404).json({
            message: "404 Not Found"
        })
    };
    next();
};

x.checkPass = async (req: any, res: any, next: any) => {
    console.log(req.body)
    if (!req.body.PASSWORD || req.body.PASSWORD !== "wtf") return res.status(401).json({
        message: "Unauthorized"
    });
    next();
};

x.checkLength = async (req: any, res: any, next: any) => {
    if (!req.body.img) return res.status(411).json({
        message: "You need to add a image"
    })
    next();
};

export default x;