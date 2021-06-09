import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import _get from 'lodash/get'
import AlertTriangle from 'react-feather/dist/icons/alert-triangle'

import Layout from '../components/Layout'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query NotFoundPageQuery {
        globalSettings: settingsYaml {
          siteTitle
        }
      }
    `}
    render={(data) => (
      <Layout>
        <Helmet>
          <title>404 – Bạn đi lạc rồi!</title>
        </Helmet>
        <section className="section thick">
          <div className="container skinny taCenter">
            <p>
              <AlertTriangle size="5rem" />
            </p>
            <h1>404 - Bạn đi lạc rồi!</h1>
            <p>
              Trang bạn đang truy cập hiện không rõ địa chỉ! <br />
              Phải chăng nó đã bị xoá đi hoặc chưa từng tồn tại!
              <br />
              Quay lại{' '}
              <Link to="/">{_get(data, 'globalSettings.siteTitle')}</Link>
            </p>
          </div>
        </section>
      </Layout>
    )}
  />
)
