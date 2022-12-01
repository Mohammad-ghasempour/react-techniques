import React from 'react';
import Clock from "./Clock";

const TimeZoneClocks = () => {
    return (
        <>
        <Clock city={"Tehran"} />
        <Clock city={"Stavanger"} />
        <Clock city={"NewYork"} />
      </>
    );
}

export default TimeZoneClocks;
