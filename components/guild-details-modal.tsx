import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface GuildDetailsModalProps {
  guild: any;
  isOpen: boolean;
  onClose: () => void;
}

export function GuildDetailsModal({
  guild,
  isOpen,
  onClose,
}: GuildDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[80vh] max-w-[85vw] p-4 sm:max-w-[600px] sm:p-6">
        <DialogHeader>
          <DialogTitle>{guild.name}</DialogTitle>
          <DialogDescription>Server ID: {guild.id}</DialogDescription>
        </DialogHeader>

        <div className="bg-muted mt-4 max-h-[50vh] overflow-y-auto rounded-md p-4">
          <h3 className="mb-2 text-sm font-medium">Guild Data:</h3>
          <pre className="text-xs break-all whitespace-pre-wrap">
            {JSON.stringify(guild, null, 2)}
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
}
