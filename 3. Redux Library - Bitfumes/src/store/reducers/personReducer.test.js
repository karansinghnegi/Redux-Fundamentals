import { UPDATE_PERSON } from '../actions/personActions';
import personReducer from './personReducer';


describe('reducer', () => {
    it('Should update person name only', () => {
        const initialState = { name: 'Karan Singh Negi'}
        expect(
            personReducer(initialState, {
                type: UPDATE_PERSON,
                payload: 'Harleen Kaur Dang'
            })
        ).toEqual({ name: 'Harleen Kaur Dang' })
    })
})