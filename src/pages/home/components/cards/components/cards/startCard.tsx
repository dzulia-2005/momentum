import { Card } from 'antd';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";


const StartCards = () => {
  return (
    <Card style={{ borderColor: '#F7BC30' }} className="w-[381px] h-[217px] border">

        <div className='flex items-center justify-between'>
          <div className='flex gap-2'>
            <Button type="primary" style={{width:"86px",height:"26px"}}>საშუალო</Button>
            <Button type="primary" shape="round" style={{height:"24px", width:"88px"}}>
              დიზაინი
            </Button>
          </div>
          <div>
            22იანვ, 2022
          </div>
        </div>

        <div className='py-6'>
          <h1>Redberry-ს საიტის ლენდინგის დიზაინი </h1>
          <p>შექმენი საიტის მთავარი გვერდი, რომელიც მოიცავს მთავარ სექციებს, ნავიგაციას.</p>
        </div>

        <div className='flex justify-between'>
          <Space size={16} wrap>
            <Avatar icon={<UserOutlined />} />
          </Space>
          <div className='flex items-center gap-1'>
            <FontAwesomeIcon icon={faMessage} style={{ color: "#0a0a0a", width:"22px",height:"22px" }} />
            <div>8</div>
          </div>
        </div>

    </Card>
  )
}

export default StartCards