let Mock=require('mockjs')

module.exports= Mock.mock({
    "list|4":[{
        "title":"@cword(2,3)",
        "children|6":[{
            "title":"@cword(3,6)",
            "img":"@image(100x100,@color)",
            "desc":"@cword(5,8)",
            "price|100-1000":20,
            "id":"@id"
        }]
    }]
})

