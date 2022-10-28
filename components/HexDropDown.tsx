import SelectDropdown from 'react-native-select-dropdown'
import { hexValues } from '../hexValues';

export default function HexDropDown (setHex: React.Dispatch<React.SetStateAction<string>>, color: string) {
  return <SelectDropdown buttonStyle={{width:250}} defaultButtonText={`Pick ${color} hex value`} data={hexValues} onSelect={(selectedItem, index) => {
    setHex(selectedItem);
  } } buttonTextAfterSelection={(selectedItem, index) => {
    return selectedItem;
  } } rowTextForSelection={(item) => {
    return item;
  } } />;
}