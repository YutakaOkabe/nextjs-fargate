import { query } from './database';

type User = {
  id: number;
  name: string;
};

export default async function UsersPage() {
  let users: User[] = [];

  // try {
  //   const result = await query('SELECT * FROM users');
  //   users = result.rows;
  // } catch (error) {
  //   console.error('Error fetching users:', error);
  // }

  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}
