import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Input({ addPost }) {
    const [input, setInput] = useState('');

    function inputBox(e) {
        setInput(e.target.value);
    }

    function saveBox(e) {
        const title = e.target.value;

        if (e.key === 'Enter' && title) {
            addPost(title);
            setInput('');
        }
    }

    return (
        <div className="Input">
            <div className="Input__header">พิพม์ที่ช่องนี้เลย</div>
            <input
                className="Input__field"
                type="text"
                value={input}
                onChange={inputBox}
                onKeyDown={saveBox}
            />
        </div>
    );
}

Input.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default Input;