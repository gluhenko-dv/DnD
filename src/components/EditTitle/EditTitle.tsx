import { SyntheticEvent, useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { getBoardData, keydownEnter, onFocusEditable } from 'src/helpers/helpers';
import { updateBoardData } from 'src/store/Board/BoardSlice';

const mapDispatchToProps = {
    updateBoardData
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface ItemTitleProps extends PropsFromRedux {
    title: string;
    index: number;
    columnIndex?: number;
    className: string;
}

const EditTitle: React.FC<ItemTitleProps> = ({ title, index, columnIndex, updateBoardData, className }) => {
    const onBlurHandler = useCallback((e: SyntheticEvent) => {
        const target = e.target as HTMLElement;
        const data = getBoardData();

        if (columnIndex) {
            data[columnIndex].items[index].title = target.innerText;
        } else {
            data[index].title = target.innerText;
        }

        target.removeEventListener('keydown', keydownEnter);
        updateBoardData(data);
    }, []);

    return (
        <span className={className} contentEditable suppressContentEditableWarning onBlur={onBlurHandler} onFocus={onFocusEditable}>
            {title}
        </span>
    );
};

export default connector(EditTitle);
