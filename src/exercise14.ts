export type PostItem = {
  id: number;
  title: string;
  body: string;
};

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  const requests = postIds.map(async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await response.json() as PostItem;
  });
  return await Promise.all(requests);
}
