module.exports = function(router)
{
    router.get('/',function(req, res){
        res.render('login.html');
    });

    return router;
}