import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';
class MyShop extends React.Component{
  static propTypes = {
    code:PropTypes.number.isRequired,
    titleName:PropTypes.string.isRequired,
  }
    render(){
        var titl=this.props.title.map( v =>
            <th key={v.code}>{v.titleName}</th>
          );  
        return <tr className='Titles'>{titl}</tr> }
    
}
export default MyShop;
