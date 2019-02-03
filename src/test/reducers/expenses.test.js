import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses';

test('should setup default filter values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});


test('should not remove expense if id not found', () => {
  const id = expenses[1].id;
  const action = { type: 'REMOVE_EXPENSE', id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0],expenses[2]])
});

test('should remove expense by id', () => {
  const id = '-1';
  const action = { type: 'REMOVE_EXPENSE', id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});


test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    amount: 2019,
    createdAt: 2000
  }
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    expense
  ])
});

test('should edit an expense', () => {
  const id = expenses[1].id
  const amount = 122000;
  const action = { 
    type:'EDIT_EXPENSE', 
    id,
    updates: {
      amount
    }  
  };
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toEqual(amount);
});


test('should not edit an expense if expense not found', () => {
  const id = '-1'
  const amount = 122000;
  const action = { 
    type:'EDIT_EXPENSE', 
    id,
    updates: {
      amount
    }  
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
});

