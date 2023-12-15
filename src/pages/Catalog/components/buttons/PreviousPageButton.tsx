type Props = {
  moveToPreviousPage: () => void;
  isDisabled: boolean;
};

export const PreviousPageButton = ({ moveToPreviousPage, isDisabled }: Props) => (
  <button
    className={`button-custom ${isDisabled && 'invisible'}`}
    onClick={moveToPreviousPage}
    disabled={isDisabled}
  >
    Anterior
  </button>
);
