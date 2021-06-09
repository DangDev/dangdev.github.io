import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Mọi quyền đều được bảo lưu.{' '}
          <a href="https://facebook.com/tincowboy/">Nguyễn Hải Đăng</a>.
        </span>
      </div>
    </footer>
  </div>
)
