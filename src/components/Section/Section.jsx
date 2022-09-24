import React, { Component } from "react";
import PropTypes from 'prop-types';
import { SectionStyled } from "components/Section/Section.styled";

export class Section extends Component {    

    render() {
        const { title, children } = this.props;

        return <SectionStyled>
            <h2>{title}</h2>            
            {children}
        </SectionStyled>;
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}