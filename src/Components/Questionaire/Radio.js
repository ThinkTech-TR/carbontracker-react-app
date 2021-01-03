
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Questionaire.css';

function Radio({ option, identifier, icon, checkedDefault }) {

  const renderIcon = () => {
    if (icon) {
      return <div className="margin-left-sm" ><FontAwesomeIcon icon={icon} /></div>
    } else {
      return null;
    }
  }

  return (
    <label className="quest-radio-item" htmlFor={identifier}>
      <input type="radio" id={identifier} name="radioGroup" value={identifier} defaultChecked={checkedDefault}></input>
      <div className="checkmark"></div>
      {renderIcon()}
      <div className="margin-left-xsm">{option}</div>
    </label>
  );
}
export default Radio;