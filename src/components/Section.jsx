export default function Section({ children, sectionName }) {
  return (
    <>
      <div className="flex flex-col border-2 p-2">
        <h2 className="flex justify-center">{sectionName}</h2>
        {children}
      </div>
    </>
  );
}
