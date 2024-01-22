import React from 'react';
import './App.css';

import { Typography as T, Space, Button, Card } from 'antd';
import { UserUi} from "./components/UserUi";


function App() {
  return (
      <div className="layout">
          <Space direction="vertical">
              <T.Title>
                  Welcome to app!
              </T.Title>
              <Card>
                  <UserUi name="Ivan" position="Developer" extra={<div>123232</div>} />
              </Card>
              <Card>
                  <UserUi name="Ivan" position="Developer" extra={<Button>Удалить</Button>} />
              </Card>
              <Card>
                  <UserUi name="Ivan" position="Developer" extra={<Button>Редактировать</Button>} />
              </Card>
              <Card>
                  <UserUi name="Ivan" position="Developer" extra={<Space><Button danger>Удалить</Button><Button type="primary">Редактировать</Button></Space>} />
              </Card>
              <Space>
                  <Button type="primary">Начать работу</Button>
                  <Button>Перейти в профиль</Button>
                  <Button>Контакты</Button>
              </Space>
          </Space>
      </div>
  );
}

export default App;
