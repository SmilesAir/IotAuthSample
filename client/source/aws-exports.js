//import { Auth } from "aws-amplify"

const Auth = require("aws-amplify").Auth

module.exports = {
    Auth: {
        identityPoolId: "us-west-2:7701b105-7dac-4b96-b447-3cea2dd7aaf8",
        region: "us-west-2",
        userPoolId: "us-west-2_AIOYTZQ29",
        userPoolWebClientId: "18f0eenekc3ekuha6693oe0aks"
    },
    API: {
        endpoints: [
            {
                name: "testApi",
                endpoint: "https://2nhxqv763f.execute-api.us-west-2.amazonaws.com/development",
                custom_header: async () => {
                    let token = (await Auth.currentSession()).idToken.jwtToken
                    console.log("auth token", token)
                    return { Authorization: token }
                }
            }
        ]
    }
}
