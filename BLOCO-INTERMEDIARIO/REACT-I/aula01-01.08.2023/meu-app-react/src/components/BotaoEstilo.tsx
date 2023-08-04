import React from 'react';
import styled, { css } from 'styled-components';

interface BotaoEstiloProps {
	primary?: boolean;
	meuestilo?: {
		altura: string;
		largura: string;
	};
}

const BotaoEstilo = styled.button<BotaoEstiloProps & React.CSSProperties>`
	height: ${(props) => props.meuestilo?.altura ?? '50px'};
	width: ${(props) => props.meuestilo?.largura ?? '150px'};
	border-radius: 3px;
	border: 2px solid ${(props) => props.theme.btnColor};
	margin: 0 1em;
	padding: 0.25em 1em;
	background: ${(props) =>
		props.primary ? props.theme.btnColor : 'transparent'};
	color: ${(props) =>
		props.primary ? props.theme.colorFont : props.theme.btnColor};

	/* 
    ${(props) =>
		props.primary
			? css`
					background: '#BF4F74';
					color: white;
			  `
			: css`
					background: transparent;
					color: #bf4f74;
			  `}; 
    */
`;

export default BotaoEstilo;
