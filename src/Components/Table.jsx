import React, { useState } from "react";
import CheckboxColumn from "./CheckBoxColumns";
import "./Tablestyle.css";

const Table = ({ data }) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const handleCheckboxChange = (rowIndex) => {
        setSelectedRow(rowIndex);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <CheckboxColumn checked={false} onChange={() => { }} />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr
                        key={index}
                        className={index === selectedRow ? "selected-row" : ""}
                    >
                        <td>
                            <CheckboxColumn
                                checked={index === selectedRow}
                                onChange={() => handleCheckboxChange(index)}
                            />
                        </td>
                        <td>{row.column1}</td>
                        <td>{row.column2}</td>
                        <td>{row.column3}</td>
                        <td>{row.column4}</td>
                        <td>{row.column5}</td>
                        <td>{row.column6}</td>
                        <td>{row.column7}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
