import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { signInUser } from 'services/auth-service/auth-service';
import { useDispatch, useSelector } from 'react-redux';
import { authThunk, profileThunk } from 'redux/auth/thunk';

import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = ({ name, email, password }) => {
    signInUser({
      name,
      email,
      password,
    }).then(() => Notiflix.Notify.success('Registration successfull!'))
      .then(() => {
        dispatch(authThunk({ name, email }))
          .unwrap()
          .catch(() => Notiflix.Notify.error('Syncronization went wrong'));
      })
      .then(() => navigate('/phonebook'))
      .catch(error => console.log(error.response.data.message));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    Notiflix.Notify.error('Something went wrong')
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
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
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
        autoComplete="on"
        rules={[{ required: true, message: 'Please input your password!' }]}
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
