var Favorite = require('../Models/favorite');
module.exports = function(router){
    router.post('/favorite', function(req, res){
        console.log(req.body);
        var favorite = new Favorite();
        favorite.name = req.body.name;
        favorite.latitude = req.body.latitude;
        favorite.longtitude = req.body.longtitude;
        favorite.address = req.body.address;
        favorite.rating = req.body.rating;
        
        favorite.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/favorite', function(req, res){
        Favorite.find({}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/favorite', function(req, res){
        Favorite.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/favorite/:id', function(req, res){
        Favorite.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        })
    })
    
    router.delete('/favorite/:id', function(req, res){
        Favorite.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/favorite/:id', function(req, res){
        Favorite.findOne({_id: req.params.id}, function(err, data){
            var favorite = data;
            favorite.name = req.body.name;
            favorite.latitude = req.body.latitude;
            favorite.longtitude = req.body.longtitude;
            favorite.address = req.body.address;
            favorite.rating = req.body.rating;
            
            
            favorite.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    
}