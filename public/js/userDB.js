var mongoose = require('mongoose');

var userInfo = new mongoose.Schema({
    name: String,
    count: String,
    fixedPrincipal: {type:Number,min:0,default:0},    //定期存款
    flexiblePrincipal: {type:Number,min:0,default:0}, //活期存款
    extraPrincipal: {type:Number,min:0,default:0},    //理财
    totalPrincipal: {type:Number,min:0,default:0},    //总金额
    trandactionRecord: [{
        time:{type:Date,default:Date.now},
        activity: String,
        amount: {type:Number,min:0},

    }]

})

userInfo.static = {
    findUserInfoById: async (userId)=>{
        return /**/
    },

    deposit: async (userId,method,amount)=>{
        return /**/
    },

    withdrawal: async (userId,amount)=>{
        return /**/
    }
}

mongoose.model('userInfo', userInfo);
