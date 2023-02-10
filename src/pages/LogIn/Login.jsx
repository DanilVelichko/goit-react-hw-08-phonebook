import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch} from 'react-redux';
import { authThunk, profileThunk } from 'redux/auth/thunk';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = ({ email, password }) => {
     dispatch(authThunk({ email, password }))
      .unwrap()
      .then(() => Notiflix.Notify.success('Login successfull!'))
      .then(() => navigate('/phonebook'))
      .catch(() => Notiflix.Notify.error('Something went wrong'));
  };

  const onFinishFailed = errorInfo => {
    Notiflix.Notify.error('Something went wrong');
    console.log(errorInfo);
  };

  return (
    <Form
      name="login"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <h2 style={{ textAlign: 'center' }}>Login </h2>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        Or <a href="registration">go to register now!</a>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
