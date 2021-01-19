import React from 'react'

const topbarStyle = {
    display: 'flex',
    flexDirection: 'row',
    color: '#757575',
    marginTop: '3rem'
}

const conversationStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#212121'
}

const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    border: '0.2rem solid #e0e0e0',
    borderRadius: '24px',
    padding: '0 0.5rem',
    margin: '1rem 0.5rem'
}

const iconStyle = {
    padding: '0.5rem',
    color: 'gray'
}

const SecondRow = () => {
    return (
        <div style={topbarStyle}>
            <div style={conversationStyle}>Conversations</div>
            <div style={inputContainerStyle}>
                <i style={iconStyle} className="fas fa-search"></i>
                <input
                    type='text'
                    placeholder='Quick Search'
                    id='searchbox'
                />
            </div>
            <div style={{ ...inputContainerStyle, background: '#e0e0e0' }}>
                <i style={iconStyle} className="fas fa-sliders-h"></i>
                <button id='filter-button'>Filter</button>
            </div>
        </div>
    )
}

export default SecondRow