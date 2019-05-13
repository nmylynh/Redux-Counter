export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

//action creaters are functions that create actions
//actions are payloads of info that send data from your app to the store
//they are the ONLY source of information!! (sent by store.dispatch())

export const increment = (count) => { //action creator
  console.log(count);
  return { //action
    type: INCREMENT,
    payload: count + 1
  }
};

export const decrement = (count) => {
  console.log(count);
  return {
    type: DECREMENT,
    payload: count - 1
  }
};
