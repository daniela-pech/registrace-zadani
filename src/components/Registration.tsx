import { useState } from "react";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
        <button>Register</button>
      </form>
    </div>
  );
};
