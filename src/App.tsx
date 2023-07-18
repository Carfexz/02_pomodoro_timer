import React from "react";
import Layout from "./components/pages/Layout/Layout";
import './styles/fonts.css'
import './test.css'

const App = () => {
  return (
    <Layout isHeader={true} isFooter={true}>
      <div className="test-app" />
    </Layout>
  );
}

export default App;