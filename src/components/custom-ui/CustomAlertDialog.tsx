import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';

export type CustomAlertDialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  buttonText: string;

  alertTitle: string;
  alertDescription: string;

  onCancel: () => void;
  onContinue: () => void;

  // Optional
  cancelTextBtn?: string;
  continueTextBtn?: string;
};

const CustomAlertDialog: React.FC<CustomAlertDialogProps> = ({
  buttonText,
  isOpen,
  setIsOpen,

  alertTitle,
  alertDescription,

  onCancel,
  onContinue,

  cancelTextBtn = 'Cancel',
  continueTextBtn = 'Continue',
}) => {
  return (
    <AlertDialog
      open={isOpen}
      // onOpenChange={isOpen => console.log('isOpen', isOpen)}
      onOpenChange={setIsOpen}
    >
      {/* ============ Trigger ============ */}
      <AlertDialogTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </AlertDialogTrigger>

      {/* ============ Content ============ */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
          <AlertDialogDescription>{alertDescription}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>
            {cancelTextBtn}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onContinue}>
            {continueTextBtn}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomAlertDialog;
