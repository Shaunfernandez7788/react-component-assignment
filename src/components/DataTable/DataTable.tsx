import React, { useState, useMemo, useEffect } from 'react';


interface User {
  id: number;
  name: string;
  title: string;
  email: string;
}


export interface Column {
  key: string;
  title: string;
  dataIndex: keyof User;
  sortable?: boolean;
}


export interface DataTableProps {
  data: User[];
  columns: Column[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: User[]) => void;
}

export const DataTable = (props: DataTableProps) => {
  const { data, columns, loading = false, selectable = false, onRowSelect } = props;

  
  const [sortConfig, setSortConfig] = useState<{ key: keyof User; direction: 'asc' | 'desc' } | null>(null);
  
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  
  const sortedData = useMemo(() => {
    const sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  
  const handleSort = (key: keyof User) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  
  const handleSelectRow = (row: User) => {
    const isSelected = selectedRows.some((selectedRow) => selectedRow.id === row.id);
    const newSelection = isSelected
      ? selectedRows.filter((selectedRow) => selectedRow.id !== row.id)
      : [...selectedRows, row];
    setSelectedRows(newSelection);
  };

  
  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data);
    }
  };

  
  useEffect(() => {
    onRowSelect?.(selectedRows);
  }, [selectedRows, onRowSelect]);

  const isRowSelected = (row: User) => selectedRows.some((r) => r.id === row.id);

  
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8 border rounded-lg bg-white">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 border rounded-lg bg-white">
        <p className="text-gray-500">No data available.</p>
      </div>
    );
  }

  
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-50">
          <tr>
            {selectable && (
              <th className="px-4 py-2.5">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                  checked={data.length > 0 && selectedRows.length === data.length}
                  onChange={handleSelectAll}
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className="whitespace-nowrap px-4 py-2.5 text-left font-medium text-gray-900 cursor-pointer"
                onClick={() => column.sortable && handleSort(column.dataIndex)}
              >
                {column.title}
                {sortConfig && sortConfig.key === column.dataIndex && (
                  <span>{sortConfig.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sortedData.map((row) => (
            <tr key={row.id} className={isRowSelected(row) ? 'bg-blue-50' : ''}>
              {selectable && (
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={isRowSelected(row)}
                    onChange={() => handleSelectRow(row)}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                </td>
              )}
              {columns.map((column) => (
                <td key={column.key} className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {row[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};