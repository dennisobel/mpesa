
var rp = require('request-promise');
let moment = require('moment');
let base64 = require('base-64'); 

let consumer_key = "RwV9nAayEJB4KOqz6Jhwpb3KchTp1QYm"; 
let consumer_secret = "idQR39pxoUVfd2B2";
let SecurityCredential = "fP6K2KuL"

let genoauthUrl = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
let c2bsimulateUrl = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate";
let registerUrl = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl";
let accountbalUrl = "https://sandbox.safaricom.co.ke/mpesa/accountbalance/v1/query";
let transactionStatusUrl = "https://sandbox.safaricom.co.ke/mpesa/transactionstatus/v1/query";
let reversalUrl = "https://sandbox.safaricom.co.ke/mpesa/reversal/v1/request";
let lipaNaMpesaUrl = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
let lipaNaMpesaQueryUrl = "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query";
let QueueTimeOutURL = "https://197.248.117.74:3000/timeout";
let ResultURL = "https://197.248.117.74:3000/result";
let ConfirmationURL = "https://197.248.117.74:3000/confirmation";
let ValidationURL = "https://197.248.117.74:3000/validation";
let CallBackURL = "https://197.248.117.74:4000/callback";

let onlinePassKey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
let onlineShortCode = "174379";
let ResponseType = "Completed";
let ShortCode = "600733";
let Initiator = "Safaricomapi";
let auth = "Bearer " + new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");
let TimeStamp = moment(new Date(Date.now())).format("YYYYMMDDHHmmss")

var request = require('request'),
    oauth_token = consumer_key,
    url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",


request(
    {
    method: 'POST',
    url : url,
    headers : {
        "Authorization" : auth
    },
    json : {
    "BusinessShortCode": onlineShortCode,
    "Password":  Buffer.from(onlineShortCode + onlinePassKey + TimeStamp).toString("base64"),
    "Timestamp": moment(new Date(Date.now())).format("YYYYMMDDHHmmss"),
    "TransactionType": "CustomerPayBillOnline",
    "Amount": "10",
    // "PartyA": phoneNumber.toString(),
    "PartyA": "254727677068",
    "PartyB": onlineShortCode,
    // "PhoneNumber": phoneNumber.toString(),
    "PhoneNumber":"254727677068",
    "CallBackURL": CallBackURL,
    "AccountReference": "ABCD1234",
    "TransactionDesc": " better have my money"    
    }
},
    function (error, response, body) {
    // TODO: Use the body object to extract the response
    // console.log("BODY:",body)
    // console.log("ERROR:",error)
    // console.log("RESPONSE:",response)
    }
)  