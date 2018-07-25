import React, {Component} from 'react'

export default function(WrappedComponent){
    return class extends Component {
        state = {
            loadingToggle: true
        }
        toggleLoad = () => {
            this.setState({
                loadingToggle: !this.state.loadingToggle
            })
        }
        render(){
            const loadingToggle = {
                value: this.state.loadingToggle,
                toggleLoad: this.toggleLoad
            }
            return <WrappedComponent 
                    loadingToggle={loadingToggle}    
                    {...this.props} />
        }
    }
}