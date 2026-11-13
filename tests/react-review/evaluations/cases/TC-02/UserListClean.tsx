import { useId, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  users: readonly User[];
  onSelectUser: (user: User) => void;
};

export function UserListClean({
  users,
  onSelectUser,
}: UserListProps) {
  const [search, setSearch] = useState("");
  const searchInputId = useId();

  const normalizedSearch = search.toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(normalizedSearch)
  );

  return (
    <section aria-labelledby={`${searchInputId}-heading`}>
      <h2 id={`${searchInputId}-heading`}>Users</h2>

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
              <button
                type="button"
                onClick={() => onSelectUser(user)}
              >
                {user.name} — {user.email}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
