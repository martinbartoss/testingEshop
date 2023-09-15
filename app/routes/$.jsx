export async function loader() {
  return new Response(null, {
    status: 301,
    headers: {Location: '/'},
  });
}

export default function CatchAllPage() {
  return null;
}
