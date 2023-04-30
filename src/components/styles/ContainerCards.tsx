import styled from 'styled-components';

const handleContainerCards = (color: any) => {
  switch (color) {
    case 'grid':
      return `
      display: grid;
      max-width: 1200px;
      margin: 0 auto;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-rows: minmax(300px, auto);
      `;
    case 'list':
      return ``;
    case 'card':
      return `
        display: grid;
        max-width: 1200px;
        margin: 0 auto;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: minmax(300px, auto);
        `;

    default:
      return 'color: #000; background: #eee;';
  }
};

const handleContainerCard = (color: any) => {
  switch (color) {
    case 'grid':
      return `
      background-color: dodgerblue;
      color: white;
      padding: 1rem;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-self: center;
      `;
    case 'list':
      return `
        width: 100%;
        height: 180px;
        display: flex;
        margin: 10px;
        padding: 4px;
        background-color: dodgerblue;
        border-radius: 4px;
      `;
    case 'card':
      return `
        background-color: dodgerblue;
        color: white;
        padding: 1rem;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        `;

    default:
      return 'color: #000; background: #eee;';
  }
};

const handleContainerImg = (color: any) => {
  switch (color) {
    case 'grid':
      return `width: 100%;`;
    case 'list':
      return `width: 172px;
      @media screen and (max-width: 500px) {
          display: none;
      }
      
      `;
    case 'card':
      return `width: 100%;`;

    default:
      return 'color: #000; background: #eee;';
  }
};

export const ContainerCards = styled('div')`
  ${({color}) => handleContainerCards(color)};
`;

export const ContainerCard = styled('div')`
  ${({color}) => handleContainerCard(color)};
`;

export const ContainerImg = styled('img')`
  ${({color}) => handleContainerImg(color)};
`;
