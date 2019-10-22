import React from "react";
import QrReader from 'react-qr-reader';
export default class Scanner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            delay: 300,
            result: "No Result"
        };
        this.handleScan = this.handleScan.bind(this);
        this.checkCam = this.checkCam.bind(this);
    }
    async checkCam() {
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
            await navigator.mediaDevices.getUserMedia({video: true})
        }
    }

    handleScan(data){
        if(data){
            this.setState({
                result: data
            });
        }
        if(data){
            this.props.history.push('/user',{
                state: data,
                name: "name"
            });
        }
    }
    handleError(err){
        console.log(err);
    }
    render() {
        return (
            <div>
                <h4 className="text-center mb-4 app-text-color">Scanner</h4>
                <div className="d-flex justify-content-center">
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{width: "100%"}}
                    />
                </div>
            </div>
        );
    }
}