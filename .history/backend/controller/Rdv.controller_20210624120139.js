const Rdv =require ('../model/Add-Rdv.model');


exports.postRdv = async (req,res) => {
const { num_rdv, heure_rdv, date_rdv  } = req.body
    const rendezvous = new Rdv({
      num_rdv : num_rdv,
      heure_rdv : heure_rdv,
      date_rdv : date_rdv
    }).save(data => {
      console.log(data)
    })

    // try {
    //     const newRendezvous = await rendezvous.save();
    //     res.status(201).json(newRendezvous);
    //   } catch (error) {
    //     res.status(400).json({ massage: error.message });
    //   }
}