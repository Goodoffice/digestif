import React from 'react';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui/svg-icons/toggle/star-border';
import StarIcon from 'material-ui/svg-icons/toggle/star';

const renderIcon = checked => {
  if (checked) {
    return <StarIcon color='ecb400' />
  }
  else {
    return <StarBorderIcon color='black' />
  }
}

const onChange = props => {
  return () => {
    props.onChange(value)
  };
}

const style = {
  padding: 0,
  width: 'auto',
  height: 'auto',
  float: 'right'
}

const StarIconButton = props => (
  <IconButton
    touch={true}
    onTouchTap={props.onChange}
    style={style}>
    {renderIcon(props.checked)}
  </IconButton>
);

export default StarIconButton;
