import React from "react";
import ReactDOM from "react-dom/client";
import '../public/sass/styles.scss';
import Header from './components/Header'
import Body from './components/Body'

const root = ReactDOM.createRoot(document.querySelector('#root'))
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body />
    </div>
  )
}
root.render(<AppLayout />)