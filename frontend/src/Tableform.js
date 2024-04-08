import React, { useState } from 'react';
import axios from 'axios';

const TableForm = () => {
    const [formData, setFormData] = useState({
        data: []
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/table', formData);
            alert('Data inserted successfully');
        } catch (error) {
            console.error('Error:', error.response.data.error);
            alert('Error occurred while inserting data');
        }
    };

    const handleChange = (e, rowIndex, columnIndex) => {
        const newData = [...formData.data];
        newData[rowIndex][columnIndex] = e.target.value;
        setFormData({ data: newData });
    };

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    {formData.data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, columnIndex) => (
                                <td key={columnIndex}>
                                    <input
                                        type="text"
                                        value={cell}
                                        onChange={(e) => handleChange(e, rowIndex, columnIndex)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TableForm;
