import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counterReducer";
import {inputMaxReducer} from "./inputMaxReducer";
import {inputMinReducer} from "./inputMinReducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
   counter: counterReducer,
   inputMaxValue: inputMaxReducer,
   inputMinValue: inputMinReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;