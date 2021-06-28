const Rdv =require ('../model/Add-Rdv.model');


exports.postRdv = async (req,res) => {
const { num_rdv, heure_rdv, date_rdv  } = req.body
    const rendezvous = new Rdv({
      num_rdv : num_rdv,
      heure_rdv : heure_rdv,
      date_rdv : date_rdv
    })

    try {
        const newRendezvous = await rendezvous.save();
        res.status(201).json(newRendezvous);
      } catch (error) {
        res.status(400).json({ massage: error.message });
      }
}

app.get (req, res)=>{
  mongo.connect(url, (err, db)=>{
      var collection = db.collection('ninja');
      collection.find({}).toArray((x, hasil)=>{
          res.send(hasil);
      })
  })
}

