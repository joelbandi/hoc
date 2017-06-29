import { createModule } from 'redux-modules';
import { fromJS, List, Map } from 'immutable';
import store from '../store';

export default module = createModule({
  name: 'Module',
  selector: state => state,
  initialState: fromJS({
    signIn: false,
  }),
  transformations: {
    toggleSignIn: {
      reducer: (state = fromJS({}), { payload }) => {
        return fromJS({
          signIn: !state.get('signIn'),
        });
      }
    },
  },
});
