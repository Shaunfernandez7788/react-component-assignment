import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, type Column } from './DataTable';
interface User {
  id: number;
  name: string;
  title: string;
  email: string;
}

const sampleData: User[] = [
  { id: 1, name: 'Zoe Washington', title: 'Software Engineer', email: 'zoe.w@example.com' },
  { id: 2, name: 'Alex Rodriguez', title: 'Product Manager', email: 'alex.r@example.com' },
  { id: 3, name: 'Sam Taylor', title: 'UX Designer', email: 'sam.t@example.com' },
];

const sampleColumns: Column[] = [
  { key: 'name', dataIndex: 'name', title: 'Name', sortable: true },
  { key: 'title', dataIndex: 'title', title: 'Title', sortable: true },
  { key: 'email', dataIndex: 'email', title: 'Email', sortable: true },
];


const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTable>;


export const WithData: Story = {
  args: {
    columns: sampleColumns,
    data: sampleData,
    selectable: true,
  },
};


export const Loading: Story = {
  args: {
    columns: sampleColumns,
    data: [],
    loading: true,
  },
};


export const Empty: Story = {
  args: {
    columns: sampleColumns,
    data: [],
    loading: false,
  },
};