import React from "react";

const CheckboxColumn = ({ checked, onChange }) => {
    return <input type="checkbox" checked={checked} onChange={onChange} />;
};

export default CheckboxColumn;
