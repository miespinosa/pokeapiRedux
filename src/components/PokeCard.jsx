import { StarOutlined } from '@ant-design/icons';
import{ Card } from 'antd';


const { Meta } = Card;
const PokeCard = ({ name, image, pokemonTypes }) => {
    return <Card
        title={name.toUpperCase()}
        cover={<img src={image} alt={name} />}
        extra={<StarOutlined/>}
    >
        <Meta title={pokemonTypes}/>

    </Card>
}

export default PokeCard;