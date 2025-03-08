import { createContext } from 'react';
import { BudgetActions, BudgetState } from '../reducers/budget-reducer';

type BudgetContextProps = {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetActions>;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);
