import { key, userCredential } from "@/utils/AdminKey";
import { createFileRoute } from "@tanstack/react-router";
import { FormEventHandler } from "react";
import { useNavigate } from "@tanstack/react-router";

type userInputLogin = {
  username: string;
  password: string;
};

export const Route = createFileRoute("/admin/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const login: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const { username: usernameCredential, password: passwordCredential } =
      userCredential;

    const { username, password } = e.target as typeof e.target & {
      [K in keyof userInputLogin]: { value: string };
    };

    if (!username.value || !password.value) return;

    if (
      !(username.value === usernameCredential) ||
      !(password.value === passwordCredential)
    )
      return;

    localStorage.setItem("key", key);
    navigate({ to: "/admin" });
  };
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="username"
          className="input input-primary"
          name="username"
        />
        <input
          type="text"
          placeholder="password"
          className="input input-primary"
          name="password"
        />

        <button className="btn btn-neutral" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
