import { promises as fs } from "fs";

export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`);

  const comments = await response.json() as {
    postId: number;
    id: number;
    email: string;
  }[];

  const commentSummaries: CommentSummary[] = comments.map(comment => ({
    postId: comment.postId,
    id: comment.id,
    commenterEmail: comment.email,
  }));

  const filtered = commentSummaries.filter(comment => !comment.commenterEmail.endsWith('.org'));

  const json = JSON.stringify(filtered);

  await fs.writeFile(outputPath, json, 'utf-8');

  return filtered.length;

}
  
