export default function getRandomStatus() {
  const status: string[] = ['Failed', 'Processing', 'Pending', 'Delivered'];

  return status[Math.floor(Math.random() * status.length)];
}
