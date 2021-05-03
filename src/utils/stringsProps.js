import bulmaStyleTypes from '../enums/bulmaStyleTypes.enum';

const stringsProps = (props) => {
  let returnClass = props.className ? props.className : '';
    
  const propsName = Object.keys(props);

  propsName.forEach(name => {

    if (bulmaStyleTypes [name]) {
      returnClass += ` ${bulmaStyleTypes  [name]}`;
    }
  });

  return returnClass;
    
};

export default stringsProps;