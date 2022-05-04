import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { FilteringTable } from "./components/FilteringTable";
import { PagenationTable } from "./components/PagenationTable";
import { RowSelection } from "./components/RowSelection";
import { SortingTable } from "./components/SortingTable";
import { ColumnOrder } from "./components/ColumnOrder";
import { ColumnHiding } from "./components/ColumnHiding";

function App() {
    return (
        // <BasicTable />
        // <SortingTable />
        // <FilteringTable />
        // <PagenationTable />
        // <RowSelection />
        <ColumnHiding />
    );
}

export default App;
