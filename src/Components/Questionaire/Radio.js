
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Questionaire.css';

function Radio({ option, questDataItem, questDataValue, icon, isChecked, updateRadio}) {

  const renderIcon = () => {
    if (icon) {
      return <div className="margin-left-sm" ><FontAwesomeIcon icon={icon} /></div>
    } else {
      return null;
    }
  }

  return (
    <label className="quest-radio-item" htmlFor={questDataValue}>
      <input type="radio" id={questDataValue} name={questDataItem} value={questDataValue} checked={isChecked || false} onChange={updateRadio}></input>
      <div className="checkmark"></div>
      {renderIcon()}
      <div className="margin-left-xsm">{option}</div>
    </label>
  );
}
export default Radio;