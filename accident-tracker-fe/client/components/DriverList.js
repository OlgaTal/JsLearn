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
            <Link to={{ pathname: '/drivers', query: { page: prev } }}><span>&larr;</span> previous</Link>
          </li>
          <li className="next">
            <Link to={{ pathname: '/drivers', query: { page: next } }}>next <span>&rarr;</span></Link>
          </li>
        </ul>
      </nav>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Payment Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.drivers.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.name}</td>
              <td>{t.age}</td>
              <td>{t.gender === 'M' ? 'Male' : 'Female'}</td>
              <td>{t.payment}</td>
            </tr>
            )
          )}
        </tbody>
      </table>

    </div>
  );
}
