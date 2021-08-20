import React from "react";
import styled from "styled-components";
import { withTheme } from "@material-ui/core/styles";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  background: transparent;
`;

const Tooltip = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
`;

const CardContainer = withTheme(styled.span`
    position: absolute;
    z-index: 10;
    width: 18em;
    height: 10em;
    top: -10.5em;
    left: 0;
    background-color: ${p => p.theme.palette.common.background};
    border-radius: 20px;
    box-shadow: 0px 0px 5px ${p => p.theme.palette.common.light_gray};
    display: ${({ show }) => (show ? "block" : "none")};
`);

function LogoutCard(props) {
  return (
      <>
        <Backdrop show={props.show} onClick={() => props.closed(false)} />
        <Tooltip>
            {props.children}
            <CardContainer show={props.show}>
                {props.content}
            </CardContainer>
        </Tooltip>
      </>
  );
}

export default LogoutCard;
