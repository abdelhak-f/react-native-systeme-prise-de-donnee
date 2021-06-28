const Rendezvous =require ('../model/Add-Rdv.model');


exports.postRdv = async (req,res) =>{
    const rendezvous = new Rendezvous({
      num_rdv : req.body.num_rdv,
      heure_rdv : req.body.heure_rdv,
      date_rdv : req.body.phone, 
        picture : req.body.picture,
        salary : req.body.salary,
        position : req.body.position
    })
    try {
        const newRendezvous = await rendezvous.save();
        res.status(201).json(newRendezvous);
      } catch (error) {
        res.status(400).json({ massage: error.message });
      }
}