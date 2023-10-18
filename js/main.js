import postApi from './api/postApi';

async function main() {
  const post = await postApi.getAll('/posts');
  console.log(post);
}
main();
