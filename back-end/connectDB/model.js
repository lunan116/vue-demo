module.exports = {
   news:{
        id:{type: String, required: true},
       title:{type: String, required: true},
       add_time:{type: String, required: true},
       zhaiyao:{type: String, required: true},
       click:{type: String, required: true},
       img_url:{type: String, required: true},
       content:{type: String, required: true},
       commit:{type: Array, required: true}
   },
    photolists:{
        id:{type: String, required: true},
        title:{type: String, required: true},
        add_time:{type: String, required: true},
        zhaiyao:{type: String, required: true},
        click:{type: String, required: true},
        img_url:{type: String, required: true},
        content:{type: String, required: true},
        commit:{type: Array, required: true},
        type:{type: Array, required: true}
    },
    goods:{
        id:{type: String, required: true},
        title:{type: String, required: true},
        img_url:{type: String, required: true},
        price:{type: String, required: true},
        sell:{type: String, required: true},
        status:{type: String, required: true},
        number:{type: String, required: true},
        lunbotu:{type: Array, required: true},
        add_time:{type: String, required: true},
        goodsid:{type: String, required: true},
        commit:{type: Array, required: true}
    }
};
