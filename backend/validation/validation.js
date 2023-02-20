const Joi = require('joi');

const register= Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
   
    lname: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    pass: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    cpass: Joi.ref('pass')

});

const login=Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    pass: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

const del=Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
});



const upd=Joi.object({
    UserId: Joi.number().required(),
    name: Joi.string().alphanum().min(3).max(30).required(),
   
    lname: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    pass: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    cpass: Joi.ref('pass')
})




const registervalidate = (req, res, next) => { 
    
    const { error} = register.validate(req.body); 
    const valid = error == null; 
    
    if (valid) { 
      next(); 
    } else { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',');
   
      console.log("error", message); 
      res.send(message);
    //  res.status(422).json({ error: message }) 
} 
    } 

    const loginvalidate=(req,res,next)=>{
        const { error} = login.validate(req.body); 
        const valid = error == null; 
        
        if (valid) { 
          next(); 
        } else { 
          const { details } = error; 
          const message = details.map(i => i.message).join(',');
       
          console.log("error", message); 
          res.send(message);
    }
}

const deletevalidate=(req,res,next)=>{
    const { error} = del.validate(req.body); 
    const valid = error == null; 
    
    if (valid) { 
      next(); 
    } else { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',');
   
      console.log("error", message); 
      res.send(message);
}
}

const updatevalidate=(req,res,next)=>{
    const { error} = upd.validate(req.body); 
    const valid = error == null; 
    
    if (valid) { 
      next(); 
    } else { 
      const { details } = error; 
      const message = details.map(i => i.message).join(',');
   
      console.log("error", message); 
      res.send(message);
}
}

  


module.exports={registervalidate,loginvalidate,deletevalidate,updatevalidate};  