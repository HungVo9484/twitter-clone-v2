import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    display: flex;
    background-image: linear-gradient(to bottom, #1DA1F2, #D9D9D9);
    cursor: pointer;
`;

const Notch = styled.div`
    height: 21px;
    width: 21px;
    border: 1px solid #666;
    margin-top: 1px;
    background: white;
    border-radius: 50%;
    transition: transform 0.1s linear;
    transform: translate(${p => p.isActive ? '26px' : '1px'});
`;

export const Toggle = ({isActive, onToggle}) => {
    return (
        <ToggleWrapper onClick={onToggle}>
            <Notch isActive={isActive} />
        </ToggleWrapper>
    );
};