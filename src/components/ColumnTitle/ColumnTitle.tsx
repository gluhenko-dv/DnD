import { SyntheticEvent, useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IBoardData } from '../../interfaces/interfaces';
import { updateBoardData } from '../../store/Board/BoardSlice';
import './ColumnTitle.styles.scss';
const mapDispatchToProps = {
    updateBoardData
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface ColumnTitleProps extends PropsFromRedux {
    title: string;
    index: number;
}

const ColumnTitle: React.FC<ColumnTitleProps> = ({ title, index, updateBoardData }) => {
    const keydown = useCallback((event) => {
        if (event.code === 'Enter') {
            event.preventDefault();
            event.srcElement.blur();
        }
    }, []);

    const onFocusHandler = useCallback((e: SyntheticEvent) => e.target.addEventListener('keydown', keydown), []);

    const onBlurHandler = useCallback((e: SyntheticEvent) => {
        const target = e.target as HTMLElement;
        const data: IBoardData[] = localStorage.boardData ? JSON.parse(localStorage.boardData) : [];

        if (data.length === 0) {
            return;
        }

        data[index].title = target.innerText;
        e.target.removeEventListener('keydown', keydown);
        updateBoardData(data);
    }, []);

    return (
        <span className="column-title" contentEditable suppressContentEditableWarning onBlur={onBlurHandler} onFocus={onFocusHandler}>
            {title}
        </span>
    );
};

export default connector(ColumnTitle);
