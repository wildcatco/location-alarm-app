import BottomSheetComponent, { BottomSheetView } from '@gorhom/bottom-sheet';

interface BottomSheetProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheet({ onClose, children }: BottomSheetProps) {
  return (
    <BottomSheetComponent
      snapPoints={['75%']}
      onChange={(index) => {
        if (index === -1) {
          onClose();
        }
      }}
      enablePanDownToClose
    >
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheetComponent>
  );
}
