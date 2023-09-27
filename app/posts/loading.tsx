import Spinner from "@/components/spinner";

export default function Loading() {
  return (
    <div className="flex gap-1">
      <Spinner />
      Processing...
    </div>
  );
}
