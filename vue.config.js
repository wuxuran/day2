let data=require('./src/mock/data')

module.exports={
    lintOnSave:false,
    devServer:{
        before(app) {
            app.get('/api/list',(req,res)=>{
                res.json(data)
            })

            app.get('/api/getlist',(req,res)=>{
                let {id}=req.query//前台的数据都传到req中 
                data.list.map((item,index)=>{
                    item.children.map((ite,ind)=>{
                        if(ite.id==id){
                            res.json(ite)
                        }
                    })
                })
            })
        },
    }
}

