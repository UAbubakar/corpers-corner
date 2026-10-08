import React from 'react';
// Class component: lifecycle methods for educational comparison with useEffect.
export default class LegacyCounter extends React.Component {
  state = { clicks: 0 };
  componentDidMount() { console.log('[Class lifecycle] mounted'); }
  componentDidUpdate() { console.log('[Class lifecycle] updated'); }
  componentWillUnmount() { console.log('[Class lifecycle] unmounted'); }
  render() { return <div className="legacy"><span>Class component demo · clicks: <strong>{this.state.clicks}</strong></span><button className="btn btn-outline" onClick={()=>this.setState(prev=>({clicks:prev.clicks+1}))}>Increment</button></div>; }
}
