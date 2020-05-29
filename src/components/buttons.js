import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';


export default class Buttons extends Component {
    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <Button className="btn" onClick={this.props.playButton}>
                        Play
                    </Button>
                    <Button className="btn" onClick={this.props.pauseButton}>
                        Pause
                    </Button>
                    <Button className="btn" onClick={this.props.clear}>
                        Clear
                    </Button>
                    <Button className="btn" onClick={this.props.slow}>
                        Slow
                    </Button>
                    <Button className="btn" onClick={this.props.fast}>
                        Fast
                    </Button>
                    <Button className="btn" onClick={this.props.speed}>
                        Speed
                    </Button>
                    <Button className="btn" onClick={this.props.seed}>
                        Seed
                    </Button>
                </ButtonToolbar>

            </div>
        )
    }
}