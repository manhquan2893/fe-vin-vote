import logo from './logo.svg';
import './App.css';
import { Input, Modal } from 'antd';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDToFM01Smz05M1QQHY1LwIcNzV5nr4Jc0",
  authDomain: "fe-vin-vote.firebaseapp.com",
  projectId: "fe-vin-vote",
  storageBucket: "fe-vin-vote.appspot.com",
  messagingSenderId: "749184216286",
  appId: "1:749184216286:web:c787f0c26d6d1479a2264f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [isModalOpen, setisModalOpen] = useState()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const handleOk = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: user,
        pass,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
