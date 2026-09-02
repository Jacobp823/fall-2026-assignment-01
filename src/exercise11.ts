import { promises as fs } from 'fs';

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const timestamp = new Date().toISOString();
  const message = `${timestamp} - ${statusMessage}\n`;

  await fs.appendFile(filePath, message);
}
