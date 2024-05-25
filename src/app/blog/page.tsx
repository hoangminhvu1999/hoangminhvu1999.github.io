import { FC } from "react";

type Params = {

};

const BlogPage: FC<Params> = ({ }) => {

  const styles = {
    container: [
      'bg-gray-900',
      'flex',
      'min-h-screen',
      'flex-col',
      'items-center',
      'justify-between',
      'p-24',
    ].join(' '),
  }

  return (
    <main className={styles.container}>
      <h1>Blog</h1>
    </main>
  );
};

export default BlogPage;