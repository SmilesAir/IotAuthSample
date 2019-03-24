"use strict"

const React = require("react")
const ReactDOM = require("react-dom")
const MobxReact = require("mobx-react")
//const Amplify = require("aws-amplify")
import Amplify from "aws-amplify"

const config = require("aws-exports.js")

import { withAuthenticator } from "aws-amplify-react"

console.log(Amplify)

Amplify.configure(config)

require("./index.less")

@MobxReact.observer class MainContent extends React.Component {
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
