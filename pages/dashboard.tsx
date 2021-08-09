import Link from "next/link";
import { useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      <h1>Welcome, {user.length > 0 ? user : "User"} 👋</h1>
      <p>
        <Link href="/">
          <a>Back Home </a>
        </Link>
      </p>
    </div>
  );
};
export default Dashboard;
