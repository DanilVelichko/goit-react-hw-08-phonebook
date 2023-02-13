import React from 'react';
import { Button, Form, Input } from 'antd';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/auth/operationsAuth';

const Registration = () => {
  const dispatch = useDispatch();

  const onFinish = ({ name, email, password }) => {
    dispatch(signUpThunk({
      name,
      email,
      password,
    })).unwrap()
      .then(() => Notiflix.Notify.success('Registration successfull!'))
      
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    Notiflix.Notify.error('Something went wrong');
  };

  return (
    <Form
      name="registration"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <h2 style={{ textAlign: 'center' }}>Registration </h2>

      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Register me
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Registration;
