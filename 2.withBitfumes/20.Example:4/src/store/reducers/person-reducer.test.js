import personReducer from './personReducer';
import {UPDATE_PERSON} from '../../actions/personActions'

describe('reducer', () =>{
    it('should update person name only',()=> {
        expect(
           personReducer({}, {
             type: UPDATE_PERSON,
             payload: 'Harleen'  
           }) 
        ).toEqual({name: 'Harleen'})
    })
})