import React from "react";
import styled from "styled-components";
const TableWrapper = styled.div`
  background: #2d2a67;
  border-radius: 10px;
  padding: 20px 10px;
  width: fit-content;
`;
const Text = styled.div`
  color: ${(props) => props.color};
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 163.42%;
  ${props=> props.border && `border-right: 0.5px solid #00ccff;`}
  

`;
const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 15px;
  width: 715px;
  thead {
    position: relative;
    width: 100%;
    overflow-y: hidden;
    padding-bottom: 12px;
  }
  td {
    padding: 12px 6px;
  }

  tbody {
    tr {
      background: #3b3785;
      border-radius: 4px;
      margin-bottom: 10px;
    }
    td {
    }
  }
`;
const TableContent = () => {
  return (
    <>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>
                <Text  color={"#DBDBDB"}>ID</Text>
              </th>
              <th>
                <Text color={"#DBDBDB"}>Address</Text>
              </th>
              <th>
                <Text color={"#DBDBDB"}>Amount</Text>
              </th>
              <th>
                <Text color={"#DBDBDB"}>Type</Text>
              </th>
              <th>
                <Text color={"#DBDBDB"}>Date</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Text border={true} color={"#9492B1"}>#29840981</Text>
              </td>
              <td>
                <Text border={true}  color={"#DBDBDB"}>NAGA</Text>
              </td>
              <td>
                <Text border={true} color={"#00CCFF"}>+ 937 000 000</Text>
              </td>
              <td>
                <Text border={true} color={"#9492B1"}>NAGA</Text>
              </td>
              <td>
                <Text border={true} color={"#DBDBDB"}>13 Dec 2020</Text>
              </td>
            </tr>
            <tr>
              <td>
                <Text border={true} color={"#9492B1"}>#29840981</Text>
              </td>
              <td>
                <Text border={true} color={"#DBDBDB"}>NAGA</Text>
              </td>
              <td>
                <Text border={true} color={"#00CCFF"}>+ 937 000 000</Text>
              </td>
              <td>
                <Text border={true} color={"#9492B1"}>NAGA</Text>
              </td>
              <td> 
                <Text border={true} color={"#DBDBDB"}>13 Dec 2020</Text>
              </td>
            </tr>
            <tr>
              <td>
                <Text border={true} color={"#9492B1"}>#29840981</Text>
              </td>
              <td>
                <Text border={true} color={"#DBDBDB"}>NAGA</Text>
              </td>
              <td>
                <Text border={true} color={"#00CCFF"}>+ 937 000 000</Text>
              </td>
              <td>
                <Text border={true} color={"#9492B1"}>NAGA</Text>
              </td>
              <td>
                <Text border={true} color={"#DBDBDB"}>13 Dec 2020</Text>
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
};
export default TableContent;
