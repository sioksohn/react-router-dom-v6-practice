import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      {/*let React Know where the nested route should be */}
      <Outlet />
    </section>
  );
};

export default Welcome;
