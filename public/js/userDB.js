var mongoose = require('mongoose');

var userInfo = new mongoose.Schema({
    name: String,
    count: String,
    fixedPrincipal: {type:Number,min:0,default:0},
    flexiblePrincipal: {type:Number,min:0,default:0},
    extraPrincipal: {type:Number,min:0,default:0},
    totalPrincipal: {type:Number,min:0,default:0},
    trandactionRecord: [{
        time:Date,
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
