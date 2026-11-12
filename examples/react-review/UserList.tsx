import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  users: any[];
  onSelectUser: (user: User) => void;
};

export function UserList({
  users,
  onSelectUser,
}: UserListProps) {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredUsers(result);
  }, [search]);

  return (
    <section>
      <h2>Users</h2>

      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li>
            <div onClick={() => onSelectUser(user)}>
              {user.name} — {user.email}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
