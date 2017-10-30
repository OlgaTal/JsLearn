/* eslint-disable react/no-string-refs, react/prop-types, max-len, jsx-a11y/href-no-hash */

import React from 'react';
import { Link } from 'react-router';

export default function (props) {
  const page = (props.page * 1) || 0;
  const prev = page <= 0 ? 0 : page - 1;
  const next = page + 1;

  return (
    <div>

      <nav>
        <ul className="pager">
          <li className="previous">
            <Link to={{ pathname: '/cars', query: { page: prev } }}><span>&larr;</span> previous</Link>
          </li>
          <li className="next">
            <Link to={{ pathname: '/cars', query: { page: next } }}>next <span>&rarr;</span></Link>
          </li>
        </ul>
      </nav>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Make</th>
            <th>Model</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {props.cars.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.year}</td>
              <td>{c.make}</td>
              <td>{c.model}</td>
              <td>{c.personId}</td>
            </tr>
            )
          )}
        </tbody>
      </table>

    </div>
  );
}
