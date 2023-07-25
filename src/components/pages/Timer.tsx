import React from "react";
import MenuItem from "../entites/MenuItem/MenuItem";
import Layout from "../pages/Layout/Layout";

const Timer = () => {

    return (
        <Layout isHeader={true} isFooter={true}>
            <MenuItem i={2}>

            </MenuItem>
        </Layout>
    );
}

export default Timer;