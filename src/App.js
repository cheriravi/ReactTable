import Table from "./components/Table";
import tableData1 from "./tableData1.json";
import React,{useEffect,useLayoutEffect, useState} from 'react';

const columns = [
  { label: "id", accessor: "id" },
  { label: "Cover", accessor: "jacketUrl" },
  { label: "Author", accessor: "author", sortable: false },
  { label: "Biography", accessor: "authorBiography"},
  { label: "Title", accessor: "title", sortable: true },
  { label: "Reading time (minutes)", accessor: "estimatedReadingTimeMinutes", sortable: true },
  { label: "Publication date", accessor: "publicationDate", sortable: true },
];

// function GetInfo() {
// React.useEffect(() => {
//   fetch('https://extracts.panmacmillan.com/getextracts?titlecontains=s')
//     .then(results => results.json())
//     .then(data => {
//       response = data.Extracts;
//     });
// }, []); // <-- Have to pass in [] here!
// }
const  App = () => {
  const [response,setResponse]=useState([])
  React.useEffect(() => {
    fetch('https://corsproxy.io/?https://extracts.panmacmillan.com/getextracts?titlecontains=s')
      .then(results => results.json())
      .then(data => {
        var result = data.Extracts
        result.forEach((item, i) => {
          item.id = i + 1;
        });
        setResponse(result)
      });
  }, []);
  return (
    <div className="table_container">
      <div className="header" id="myHeader">
      <h1>Book Extracts from Pan Macmillan</h1>
      </div>
      <Table
        data={response}
        columns={columns}
      />
      <br />
    </div>
  );
};

export default App;
