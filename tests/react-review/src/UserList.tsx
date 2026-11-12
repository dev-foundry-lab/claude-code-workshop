import { useId, useMemo, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  users: readonly User[];
  onSelectUser: (user: User) => void;
};

export function UserList({ users, onSelectUser }: UserListProps) {
  const [search, setSearch] = useState("");
  const searchInputId = useId();

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (query === "") {
      return users;
    }
    return users.filter((user) => user.name.toLowerCase().includes(query));
  }, [users, search]);

  return (
    <section>
      <h2>Users</h2>

      <label htmlFor={searchInputId}>Search users</label>
      <input
        id={searchInputId}
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <button type="button" onClick={() => onSelectUser(user)}>
                {user.name} — {user.email}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
