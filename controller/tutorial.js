import db from "../model/index";

const Tutorial = db.tutorials
export default getTutorialByID=(req,res)=>{
    Tutorial.findByPk(req.params.id)
    .then(
        result=>{
            res.send(result)
        }
    )
    .catch(
        err=> res.status(404).send(err)
    )
}