import React from "react";
import styled from "styled-components";
import { UnderlineStyled } from "./styles/UnderlineStyled.styled";
import { formatDate } from "../helpers/formatDate";
import RemoveFirebaseButton from "./RemoveFirebaseButton";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Clients = (props) => {
  const [list, setList] = useState(props.clientsList);

  const returnListHandler = (list) => {
    setList(list);
  };

  let titleExtractor = (message) => {
    return message.split(" ").slice(0, 4).join(" ") + "...";
  };

  return (
    <ClientsTableStyled>
      <h2>Clients</h2>
      <UnderlineStyled></UnderlineStyled>
      <table>
        <caption>Wlastig Clients</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Type</th>
            <th scope="col">Message</th>
            <th scope="col">Contacted Wlastig On</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {list.map((client) => (
            <tr key={client.id}>
              <th scope="row">{client.name}</th>
              <td>{client.mail || client.email}</td>
              <td>{client.type}</td>
              <td className="client-message">
                <AccordionItem
                  accTitle={titleExtractor(
                    (client.comments && client.comments) ||
                      (client.message && client.message)
                  )}
                  accBody={
                    (client.comments && client.comments) ||
                    (client.message && client.message)
                  }
                  color={"var(--text-dark)"}
                ></AccordionItem>
              </td>
              <td>{formatDate(new Date(client.created_at))}</td>
              <td>
                <RemoveFirebaseButton
                  returnListHandler={returnListHandler}
                  list={props.clientsList}
                  document={"clients"}
                  id={client.id}
                ></RemoveFirebaseButton>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
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

  .client-message h4 {
    font-size: var(--s0);
    font-family: var(--poppinsregular);
    font-style: none;
    text-transform: none;
    line-height: 2;
  }

  .accordion-body {
    margin: 0;
  }

  @media (max-width: 450px) {
    .client-message h4 {
      font-size: var(--s0-1);
    }
  }
`;
