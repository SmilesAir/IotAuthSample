
const AWS = require('aws-sdk')

const Iotdata = new AWS.IotData({ endpoint: "a1xai3ebaxw1za-ats.iot.us-west-2.amazonaws.com" })

const Common = require("./common.js")

module.exports.handler = (e, c, cb) => {
    Common.handler(e, c, cb, async (event, context) => {

        var params = {
            thingName: "RyanComp"
        }
        Iotdata.getThingShadow(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);           // successful response
        })

        return "Does this work?"
    })
}

