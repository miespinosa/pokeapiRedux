import { StarOutlined } from '@ant-design/icons';
import{ Card } from 'antd';


const { Meta } = Card;
const PokeCard = ({ name }) => {
    return <Card
        title={name}
        cover={<img src='' alt='Ditto' />}
        extra={<StarOutlined/>}
    >
        <Meta description='fire, magic'/>

    </Card>
}

export default PokeCard;