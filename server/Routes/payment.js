const express = require("express");
const payment = express();
const CryptoJS = require("crypto-js");


payment.post("/pay", (req, res) => {

    console.log(req.body);
    let appData = {};
    try {
        let tragetURL = payuPayment(req.body);
        console.log(tragetURL);
        res.status(201).json(tragetURL);
    }
    catch (ex) {

    }
})

const payuPayment = (payParams) => {
console.log(payParams);
    const config = {
        Merchantkey: "cD0hebOp",
        salt: "Y5IgSSe17Y",
        successURL: "http://localhost:5000/api/receipt",
        failureURL: "http://localhost:5000/api/receipt"
    }


    //var keyString 		=  	key+'|'+txnid+'|'+amount+'|'+productinfo+'|'+firstname+'|'+email+'|||||'+udf5+'|||||';

    let hashString =
        config.Merchantkey + "|" + payParams.txnid + "|" + payParams.amount + "|" + payParams.productinfo + "|" + payParams.firstname + "|" + payParams.email + '|||||||||||' + config.salt;

    let hash = CryptoJS.SHA512(hashString).toString(CryptoJS.enc.Hex);
    let paramObj = {};
    try {
        paramObj = {
            hash,
            key:config.Merchantkey,
            txnid: payParams.txnid,
            amount: payParams.amount,
            firstname: payParams.firstname,
            email: payParams.email,
            phone: payParams.phone,
            productinfo: payParams.productinfo,
            surl: config.successURL,
            furl: config.failureURL,
            lastname: payParams.lastname,
            curl: "",
            country: "India",
            zipcode: "",
            udf1: "",
            udf2: "",
            udf3: "",
            udf4: "",
            udf5: "",
            pg: ""

        }

    }
    catch (ex) {

    }

    let result = {
        params: paramObj,
        actionURL: "https://test.payu.in/_payment",
        gateway: "PAYUBIZ"
    }

    return result;
}

module.exports=payment;