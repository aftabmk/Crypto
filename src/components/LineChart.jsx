import { Line } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Tooltip,Legend,} from 'chart.js';
import { Col, Row,Typography } from 'antd'
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Tooltip,Legend);
const {Title} = Typography; 


const LineChart = ({coinHistory,currentPrice,coinName}) => {
    const coinPrice =[];
    const coinTimestamp = [];
    const dates =[];

    for(let i=0;i<coinHistory?.data?.history?.length;i++)
    {
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimestamp.push((coinHistory.data.history[i].timestamp))
        dates.push(new Date(coinHistory.data.history[i].timestamp).toLocaleTimeString())
    }
    console.log(dates)

    const data =
    {
        labels:coinTimestamp,
        datasets:[{
            label:'Price in USD',
            data:coinPrice,
            fill:false,
            backgroundColor:'#0071bd',
            borderColor:'#0071bd',
            tension:0.4,
            pointRadius:0,
        }]
    }
    const options = {
        type:'line',
        responsive: true,
        scales:{
            x:{
                display:false
            }
        },
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        }
      };
  
    return ( 
    <>
        <Row className="chart-header">
            <Title level={2} className="chart-title">{coinName} Price Chart</Title>
            <Col className="price-container">
                <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
                <Title level={5} className="current-price">Current {coinName} Price :${ currentPrice }</Title>
            </Col>
        </Row>
        <Line data={data} options={options}/>
    </> 
    );
}
 
export default LineChart;