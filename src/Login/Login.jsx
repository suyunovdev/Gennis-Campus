import { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setLoading(true);

    // Imitatsion kirish jarayoni
    setTimeout(() => {
      if (values.email === "ilyos" && values.password === "333196454") {
        setLoading(false);
        navigate("/Teacher_admin"); // Muvaffaqiyatli kirishdan keyin dashboard sahifasiga o'tadi
      } else {
        setLoading(false);
        alert("Login yoki parol noto'g'ri!");
      }
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="login-form"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Iltimos, emailingizni kiriting!" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Iltimos, parolingizni kiriting!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Meni eslab qol</Checkbox>
            </Form.Item>

            <a className="float-right" href="">
              Parolni unutdingizmi?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-full"
              loading={loading}
            >
              Login
            </Button>
            <div className="text-center mt-4">
              Akkauntingiz yoqmi? <a href="">Royxatdan oting!</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
