export default function ProductOrderCardLoad() {
  return (
    <div className="flex flex-col">
      <div className="flex animate-pulse p-2 items-start gap-2 shadow-md">
        <div className="h-32 w-32 bg-gray-200 aspect-square"></div>
        <div className="w-full flex flex-col gap-2">
          <div className="h-4 w-full rounded bg-gray-200"></div>
          <div className="h-4 w-full rounded bg-gray-200"></div>
          <div className="h-4 w-full rounded bg-gray-200"></div>
        </div>
      </div>

      <div className="flex animate-pulse p-2 items-start gap-2 shadow-md">
        <div className="h-32 w-32 bg-gray-200 aspect-square"></div>
        <div className="w-full flex flex-col gap-2">
          <div className="h-4 w-full rounded bg-gray-200"></div>
          <div className="h-4 w-full rounded bg-gray-200"></div>
          <div className="h-4 w-full rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
