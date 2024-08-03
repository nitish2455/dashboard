import React from 'react';

const DataTable = ({ data }:any) => {
  if (!data.length) {
    return <div>Loading...</div>;
  }

  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item:any) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
