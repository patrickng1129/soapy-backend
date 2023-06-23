import React from "react";
import "./rowItem.css"

const RowItem = ({item}) => {
    return <div className="row">
        <div>{item.crypto_name}</div>
        <div>{item.price}</div>
        <div>{item.change_24h}</div>
        <div>{item.market_cap}</div>
    </div>
}

export default RowItem;