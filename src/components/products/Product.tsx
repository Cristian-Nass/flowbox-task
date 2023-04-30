import {ProductsType} from '../../models/Types';
import {ContainerCard, ContainerImg} from '../styles/ContainerCards';
import {useStore} from '../../store';

const Product = (props: ProductsType) => {
  const {style} = useStore();

  return (
    <ContainerCard color={style}>
      <div className="card-details-image">
        <ContainerImg color={style} src={props.image} />
      </div>
      {style === 'list' && (
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
          <div className="card-details-text">{props.title}</div>
          <div className="card-details-text-descriptions">{props.descriptions}</div>
        </div>
      )}
      {style === 'card' && <div className="card-details-text">{props.title}</div>}
    </ContainerCard>
  );
};

export default Product;
