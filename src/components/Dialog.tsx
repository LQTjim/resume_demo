import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../styles/radix.css";
type CustomDialogProps = {
  url: string;
  codeUrl: string;
  name: string;
  imgSrc: string;
  description: string;
  ytUrl: string;
};
const CustomDialog = ({
  name,
  codeUrl,
  url,
  description,
}: CustomDialogProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet justify-self-end">詳細資料</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle font-bold text-xl">
          {name}
        </Dialog.Title>

        <Dialog.Description className="DialogDescription">
          {description}
        </Dialog.Description>
        <div>
          <a
            href={url}
            target="_blank"
            className="mr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            點我看作品
          </a>
          <a
            href={codeUrl}
            target="_blank"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            點我看程式碼
          </a>
        </div>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        ></div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default CustomDialog;
