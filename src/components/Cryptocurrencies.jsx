import millify from 'millify'
import { Link } from 'react-router-dom';
import { Card,Row,Col,Input} from 'antd'
import { useGetCryptosQuery } from '../Services/cryptoApi';
import { useState ,useEffect } from 'react';
import Loader from './Loader';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified? 10:100;
    const { data:cryptoList , isFetching } = useGetCryptosQuery(count);
    const [cryptos,setCryptos] = useState([])
    const [searchTerm,setSearchTerm]= useState("");
    // console.log(cryptos)
    useEffect(()=>
    {
        setCryptos(cryptoList?.data?.coins);
        const filterData = cryptoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filterData)
    },[cryptoList,searchTerm])
    
    if (isFetching) return <Loader />;

    return ( 
        <>
            {!simplified &&(
                <div className="search-crypto">
                    <Input placeholder='Seach Cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)}/>
                </div>
            )}
            <Row gutter={[8,8]} className="crypto-card-container">
                {cryptos?.map((currency,id)=>(
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={id}>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card 
                                title={`${currency.rank}.${currency.name}`}
                                extra={<img className='crypto-image' src={currency.iconUrl}/>}
                                hoverable
                                >
                                <p>Price : ${millify(currency.price)}</p>
                                <p>Market Cap : ${millify(currency.marketCap)}</p>
                                <p>Daily Change : {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))
                }
            </Row>
        </>
     );
}
 
export default Cryptocurrencies;