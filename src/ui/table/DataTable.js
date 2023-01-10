import {Table} from 'antd'
import {tableColumns, tableDataSource} from "../../data/table/tableData";

export const DataTable = () => {
    return <Table dataSource={tableDataSource} columns={tableColumns}></Table>
}