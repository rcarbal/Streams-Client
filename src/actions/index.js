import streams from '../api/streams';
import { SIGN_IN, SIGN_OUT, CREAT_STREAM } from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = (formValues) =>  async (dispatch) => {
   const response = await streams.post('/streams', formValues);

   // Dispatch an action
   dispatch({ type: CREAT_STREAM, payload: response.data })
};