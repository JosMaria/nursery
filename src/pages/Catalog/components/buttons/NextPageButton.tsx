type Props = {
  moveToNextPage: () => void;
  isDisabled: boolean;
};

export const NextPageButton = ({ moveToNextPage, isDisabled }: Props) => (
  <button
    className={`button-custom ${isDisabled && 'invisible'}`}
    onClick={moveToNextPage}
    disabled={isDisabled}
  >
    Siguiente
  </button>
);
