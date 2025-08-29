import { useState, useEffect } from 'react';
import { DataTable, type Column } from './components/DataTable/DataTable';


interface User {
  id: number;
  name: string;
  title: string;
  email: string;
}


const sampleColumns: Column[] = [
  { key: 'name', dataIndex: 'name', title: 'Name', sortable: true },
  { key: 'title', dataIndex: 'title', title: 'Title', sortable: true },
  { key: 'email', dataIndex: 'email', title: 'Email', sortable: true },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  
  useEffect(() => {
    setTimeout(() => {
      const fetchedData: User[] = [
        { id: 1, name: 'John Doe', title: 'Software Engineer', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', title: 'Product Manager', email: 'jane.smith@example.com' },
        { id: 3, name: 'Sam Wilson', title: 'UX Designer', email: 'sam.wilson@example.com' },
      ];
      setUsers(fetchedData);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Users Data Table</h1>
      <DataTable
        columns={sampleColumns}
        data={users}
        loading={isLoading}
        selectable
      />
    </div>
  );
}

export default App;