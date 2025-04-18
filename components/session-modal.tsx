import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface SessionModalProps {
  session: any;
  isOpen: boolean;
  onClose: () => void;
}

export function SessionModal({ session, isOpen, onClose }: SessionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[80vh] max-w-[85vw] p-4 sm:max-w-[600px] sm:p-6">
        <DialogHeader>
          <DialogTitle>Session Details</DialogTitle>
          <DialogDescription>
            Your current Discord session information
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 max-h-[50vh] overflow-y-auto rounded-md bg-muted p-4">
          <h3 className="mb-2 text-sm font-medium">Session Data:</h3>
          <pre className="whitespace-pre-wrap break-all text-xs">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
}
