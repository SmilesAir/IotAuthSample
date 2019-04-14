"use strict"

const React = require("react")
const ReactDOM = require("react-dom")
const MobxReact = require("mobx-react")
import Amplify from "aws-amplify"
const Auth = require("aws-amplify").Auth
import API from "@aws-amplify/api"

const config = require("aws-exports.js")

import { withAuthenticator } from "aws-amplify-react"

Amplify.configure(config)

require("./index.less")

@MobxReact.observer class MainContent extends React.Component {
    constructor() {
        super()

        Auth.currentAuthenticatedUser().then((data) => {
            console.log(data)

            this.idToken = data.signInUserSession.idToken.jwtToken

            // return API.post("testApi", "/handler").then((response) => {
            //     console.log(response)
            // }).catch((error) => {
            //     console.log("test", error)
            // })

            return fetch("https://2nhxqv763f.execute-api.us-west-2.amazonaws.com/development/handler", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + this.idToken,
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                return response.json()
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log("test", error)
            })
        }).catch((err) => console.log(err))
    }
    render() {
        return (
            <div>
                Starter Project
            </div>
        )
    }
}

let AmplifyMainContent = withAuthenticator(MainContent)

@MobxReact.observer class Main extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                Logo and stuff up here
                <AmplifyMainContent/>
            </div>
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById("mount")
)
