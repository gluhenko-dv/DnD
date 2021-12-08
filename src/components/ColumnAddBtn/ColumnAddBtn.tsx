import { useCallback } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { dateNow, getBoardData } from 'src/helpers/helpers';
import { updateBoardData } from 'src/store/Board/BoardSlice';
import './ColumnAddBtn.styles.scss';

const mapDispatchToProps = {
    updateBoardData
};

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

const ColumnAddBtn: React.FC<PropsFromRedux> = ({ updateBoardData }) => {
    const onClick = useCallback(() => {
        const data = getBoardData();

        data.splice(data.length, 0, {
            id: dateNow(),
            title: 'Новая колонка',
            items: []
        });

        updateBoardData(data);
    }, []);

    return (
        <button onClick={onClick} className="column-add-btn">
            добавить колонку
        </button>
    );
};

export default connector(ColumnAddBtn);
