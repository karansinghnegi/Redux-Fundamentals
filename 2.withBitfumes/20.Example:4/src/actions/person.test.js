import update_person, { UPDATE_PERSON } from './personActions';

describe('actions', () => {
    it('Should return the action for person', () => {
        const expectedAction = {
            type: UPDATE_PERSON,
            payload: 'Harleen'
        }
        expect(update_person).toEqual(expectedAction);
    })
})