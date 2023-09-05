import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import {setListChoose} from '../../../redux/actions/pageList';
const ItemList = (props: any) => {
  const {item, index} = props;
  const listChosse = useSelector(state => state.state.listChoose);

  console.log('listChosse', listChosse[index]);
  return (
    <TouchableOpacity
      onPress={() => props.onHandlePress(item)}
      // style={}
    >
      <LinearGradient
        colors={
          listChosse[index]?.id == item?.id
            ? ['rgba(138, 50, 169, 1)', 'rgba(138, 0, 255, 1)']
            : ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)']
        }
        // colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)']}
        style={{
          width: 100,
          height: 71,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          borderColor: 'rgba(31, 31, 31, 1)',
          borderWidth: 1,
          marginRight: 15,
          marginBottom: 10,
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          {item.name}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default ItemList;
