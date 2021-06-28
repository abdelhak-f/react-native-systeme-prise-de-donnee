const Rendezvous =require ('../model/Add-Rdv.model');


exports.postRdv = async (req,res) =>{
    const xrendezvous = new Rendezvous({
      num_rdv : req.body.num_rdv,
      heure_rdv : req.body.heure_rdv,
      date_rdv : req.body.date_rdv
    })
    try {
        const newRendezvous = await xrendezvous.save();
        res.status(201).json(newRendezvous);
      } catch (error) {
        res.status(400).json({ massage: error.message });
      }
}