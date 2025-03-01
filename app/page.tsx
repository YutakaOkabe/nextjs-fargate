import { query } from './database';

type User = {
  id: number;
  name: string;
};

export default async function UsersPage() {
  let users: User[] = [];

  try {
    const result = await query('SELECT * FROM users');
    users = result.rows;
  } catch (error) {
    console.error('Error fetching users:', error);
  }

  return (
    <div>
      <table>
        <p>Hello World</p>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
