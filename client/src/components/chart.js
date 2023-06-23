import React, { useState } from "react";
import RowItem from "./rowItem";
import "./chart.css"

const Chart = () => {

    const [data, setData] = useState([
        {
            id: "001",
            crypto_name: "BitDollar",
            price: 34000.56,
            change_24h: -2.3,
            market_cap: 210000000000,
            is_watched: true
        },
        {
            id: "002",
            crypto_name: "EtherDime",
            price: 2300.91,
            change_24h: 1.9,
            market_cap: 80000000000,
            is_watched: false
        },
        {
            id: "003",
            crypto_name: "LitePenny",
            price: 150.83,
            change_24h: 0.2,
            market_cap: 10000000000,
            is_watched: true
        },
        {
            id: "004",
            crypto_name: "RippleCent",
            price: 0.76,
            change_24h: -0.1,
            market_cap: 35000000000,
            is_watched: false
        },
        {
            id: "005",
            crypto_name: "CardanoNickel",
            price: 1.32,
            change_24h: 2.3,
            market_cap: 45000000000,
            is_watched: true
        },
        {
            id: "006",
            crypto_name: "MockChain",
            price: 1500.24,
            change_24h: 4.1,
            market_cap: 18000000000,
            is_watched: false
        },
    ]
    
    )
    return ( 
    <div id="container">
        <div id="headline">
            <a className="name">Prices</a>
            <a className="seeless">See Less</a>
        </div>
        <div className="rowContainer">
        {data.map(item => <RowItem item={item} key={item.id}/>)}
        </div>
        
    </div>)
}

export default Chart

