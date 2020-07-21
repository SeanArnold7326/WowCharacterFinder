import React from 'react'


class CharacterImage extends React.Component {

    constructor(props){
        super(props);

        this.state = {image: this.props.image};
    }

    componentWillReceiveProps(props) {
        this.setState({ image: props.image});
    }

    render() {
        return (
            <div>
                <img src={this.state.image.render_url} alt="character" id="characterImage" />
            </div>
        )
    }
}

export default CharacterImage;