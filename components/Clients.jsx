import React from "react";
import styled from "styled-components";
import { UnderlineStyled } from "./styles/UnderlineStyled.styled";

const Clients = (props) => {
  props.clientsList.map((client) => {
    console.log(client);
  });
  return (
    <ClientsTableStyled>
      <h2>Clients</h2>
      <UnderlineStyled></UnderlineStyled>
      <table>
        <caption>Wlastig Clients</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Mail</th>
            <th scope="col">Contacted Wlastig On</th>
          </tr>
        </thead>
        <tbody>
          {props.clientsList.map((client) => (
            <tr key={client.id}>
              <th scope="row">{client.name}</th>
              <td>{client.mail}</td>
              <td>{client.date}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {/* <tr>
              <th scope="row" colspan="2">
                Average age
              </th>
              <td>33</td>
            </tr> */}
        </tfoot>
      </table>
    </ClientsTableStyled>
  );
};

export default Clients;

export const ClientsTableStyled = styled.div`
  overflow-x: scroll;

  table {
    border-collapse: collapse;
    border: 1px solid rgb(140 140 140);
    /* font-size: 0.8rem; */
    letter-spacing: 1px;
    background-color: var(--background-light);
    width: 100%;
  }

  caption {
    caption-side: bottom;
    padding: 10px;
    font-weight: bold;
  }

  thead,
  tfoot {
    background-color: var(--background-light);
  }

  th,
  td {
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
    text-align: center;
  }

  td:last-of-type {
    text-align: center;
  }

  tbody > tr:nth-of-type(even) {
    background-color: var(--primary-shade);
  }

  tfoot th {
    text-align: center;
  }

  tfoot td {
    font-weight: bold;
  }
`;
