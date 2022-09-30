// import React, { Component } from "react";
import PropTypes from 'prop-types';
import { SectionStyled } from "components/Section/Section.styled";

export const Section = ({ title, children }) => {    

    return <SectionStyled>
            <h2>{title}</h2>            
            { children }
        </SectionStyled>;
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}