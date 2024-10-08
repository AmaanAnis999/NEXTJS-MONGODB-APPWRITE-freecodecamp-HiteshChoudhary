export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1 className="text-white">Profile Page {params.id}</h1>
    </div>
  );
}
