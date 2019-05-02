import React from 'react';

const Cryptocoin = ({crypto}) =>{
    //console.log(crypto.CoinInfo)

    const {FullName, Name} = crypto.CoinInfo;
    return(
        <option value={Name}>{FullName}</option>
    );
}


export default Cryptocoin;