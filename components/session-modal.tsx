import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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

        <div className="bg-muted mt-4 max-h-[50vh] overflow-y-auto rounded-md p-4">
          <h3 className="mb-2 text-sm font-medium">Session Data:</h3>
          <pre className="text-xs break-all whitespace-pre-wrap">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
}
