import BudgetForm from './components/BudgetForm';
import BudgetTracker from './components/BudgetTracker';
import { useBudget } from './hooks/useBudget';

export default function App() {
  const { state } = useBudget();
  const isValidBudget = state.budget > 0;
  return (
    <>
      <header className='bg-blue-600 py-8 max-h-72'>
        <h1 className=' u uppercase text-center font-black text-4xl text-white'></h1>
      </header>
      <div className=' max-w-3xl mx-auto bg-white shadow-lg rounded-l-lg mt-10 p-10'>
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
    </>
  );
}
