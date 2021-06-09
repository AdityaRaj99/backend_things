const tutorial =(sequelize,Sequalize)=>{
    const Tutorial=sequalize.define("tutorials",{
        title:{
            type:Sequalize.STRING
        },
        description:{
            type:Sequalize.STRING
        },
        published:{
            type: Sequalize.BOOLEAN
        }
    },{
        timestamp:true
    })
    
    return Tutorial
}
export default tutorial;