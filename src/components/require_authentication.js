import React,{ Component, PropTypes } from 'react';
import { connectModule } from 'redux-modules';

import module from '../modules/module';

export default function(ComposedComponent) {
  @connectModule(module)
  class Authentication_require extends Component {

    static contextTypes = {
      router: PropTypes.object,
    }

    componentWillMount() {
      if(!this.props.Module.toJS().signIn) {
        window.alert('Please sign in first!');
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.Module.toJS().signIn) {
        window.alert('Are you sure?');
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props}/>
    }
  }

  return Authentication_require;

}
