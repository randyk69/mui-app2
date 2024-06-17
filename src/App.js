import logo from './logo.svg';
import './App.css';
import DataTable from './components/DataTable';
import DataTableV2 from './components/DataTableV2';

function App() {
  return (
    <div className="p-20">
      <DataTable />
      <div className="!mt-20">
        <DataTableV2 />
      </div>
    </div>
  );
}

export default App;
