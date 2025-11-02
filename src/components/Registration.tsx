import { useState } from "react";
import "./Registration.css";

export interface FormDataStructure {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface FormProps {
  onFormSubmit: (newTask: FormDataStructure) => void;
}

export const Registration = ({ onFormSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormDataStructure>({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      ...(name === "email" && value.includes("@") && !formData.username
        ? { username: value.split("@")[0] }
        : {}),
    });
  };

  return (
    <div>
      <h3>Registration</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="username">User name</label>
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="passwordConfirm">Confirm password</label>
          <br />
          <input
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
          />
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
