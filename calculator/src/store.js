import { createStore } from 'redux';
import reducer from './ducks/calcReducer';


export default createStore(reducer);