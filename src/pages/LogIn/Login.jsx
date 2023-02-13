import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { authThunk } from 'redux/auth/thunk';
import {selectAuthError} from 'redux/selectors';
import Notiflix from 'notiflix';
import { useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const onFinish = ({ email, password }) => {
    dispatch(authThunk({ email, password }))
      .unwrap()
      .then(() => Notiflix.Notify.success('Login successfull!'))
      .catch(() => Notiflix.Notify.error(error));
  };

  const onFinishFailed = errorInfo => {
    Notiflix.Notify.error('Something went wrong');
    console.log('ErrorInfo', errorInfo, error);
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
