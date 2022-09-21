import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './breadcrumb.css';

const routes = [
  { path: '/products', breadcrumb: 'Listado de productos' },
  { path: '/products/:id', breadcrumb: 'Detalle de producto' },
];

const BreadCrumb = () => {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });
  return (
    <Breadcrumb className="breadcrumb-container">
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <Breadcrumb.Item className="breadcrumb-item" key={match.pathname}>
          {index === routes.length - 1 ? (
            breadcrumb
          ) : (
            <Link to={match.pathname}>{breadcrumb}</Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
